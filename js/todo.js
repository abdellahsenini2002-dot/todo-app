// Todo App Main Logic
class TodoApp {
  constructor() {
    this.storage = new StorageService();
    this.currentFilter = 'all';
    this.editingId = null;
    this.init();
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.render();
  }

  cacheDOM() {
    this.todoInput = document.getElementById('todoInput');
    this.categorySelect = document.getElementById('categorySelect');
    this.prioritySelect = document.getElementById('prioritySelect');
    this.addBtn = document.getElementById('addBtn');
    this.todoList = document.getElementById('todoList');
    this.emptyState = document.getElementById('emptyState');
    this.clearCompletedBtn = document.getElementById('clearCompletedBtn');
    this.exportBtn = document.getElementById('exportBtn');
    this.importBtn = document.getElementById('importBtn');
    this.fileInput = document.getElementById('fileInput');
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.stats = {
      total: document.getElementById('totalTasks'),
      completed: document.getElementById('completedTasks'),
      remaining: document.getElementById('remainingTasks'),
      percent: document.getElementById('completionPercent'),
    };
  }

  bindEvents() {
    // Add todo
    this.addBtn.addEventListener('click', () => this.addTodo());
    this.todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addTodo();
    });

    // Filter
    this.filterBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.setFilter(e.target.dataset.filter);
      });
    });

    // Clear completed
    this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());

    // Export/Import
    this.exportBtn.addEventListener('click', () => this.export());
    this.importBtn.addEventListener('click', () => this.fileInput.click());
    this.fileInput.addEventListener('change', (e) => this.import(e));
  }

  addTodo() {
    const text = this.todoInput.value.trim();
    if (!text) return;

    this.storage.addTodo(
      text,
      this.categorySelect.value,
      this.prioritySelect.value
    );

    this.todoInput.value = '';
    this.categorySelect.value = 'general';
    this.prioritySelect.value = 'medium';
    this.render();
  }

  setFilter(filter) {
    this.currentFilter = filter;
    this.filterBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    this.render();
  }

  deleteTodo(id) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.storage.deleteTodo(id);
      this.render();
    }
  }

  toggleTodo(id) {
    this.storage.toggleTodo(id);
    this.render();
  }

  editTodo(id) {
    const todos = this.storage.getTodos();
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const newText = prompt('Edit task:', todo.text);
    if (newText && newText.trim()) {
      this.storage.updateTodo(id, { text: newText.trim() });
      this.render();
    }
  }

  clearCompleted() {
    if (confirm('Clear all completed tasks?')) {
      const count = this.storage.clearCompleted();
      alert(`${count} task(s) deleted`);
      this.render();
    }
  }

  export() {
    const data = this.storage.exportTodos();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `todos-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  import(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = this.storage.importTodos(e.target.result);
      if (result.success) {
        alert(`${result.count} task(s) imported successfully!`);
        this.render();
      } else {
        alert(`Error importing: ${result.error}`);
      }
    };
    reader.readAsText(file);
    this.fileInput.value = '';
  }

  render() {
    const todos =
      this.currentFilter === 'all'
        ? this.storage.getTodos()
        : this.storage.filterTodos(this.currentFilter);

    // Update stats
    const stats = this.storage.getStats();
    this.stats.total.textContent = stats.total;
    this.stats.completed.textContent = stats.completed;
    this.stats.remaining.textContent = stats.remaining;
    this.stats.percent.textContent = stats.completionPercent + '%';

    // Render todos
    if (todos.length === 0) {
      this.todoList.innerHTML = '';
      this.emptyState.classList.add('show');
    } else {
      this.emptyState.classList.remove('show');
      this.todoList.innerHTML = todos
        .map((todo) => this.createTodoElement(todo))
        .join('');

      // Attach event listeners to delete and edit buttons
      this.todoList.querySelectorAll('.delete-btn').forEach((btn) => {
        btn.addEventListener('click', () => this.deleteTodo(parseInt(btn.dataset.id)));
      });

      this.todoList.querySelectorAll('.edit-btn').forEach((btn) => {
        btn.addEventListener('click', () => this.editTodo(parseInt(btn.dataset.id)));
      });

      this.todoList.querySelectorAll('.checkbox').forEach((checkbox) => {
        checkbox.addEventListener('change', () => this.toggleTodo(parseInt(checkbox.dataset.id)));
      });
    }
  }

  createTodoElement(todo) {
    const date = new Date(todo.createdAt).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    return `
      <div class="todo-item ${todo.completed ? 'completed' : ''} ${todo.priority}">
        <input
          type="checkbox"
          class="checkbox"
          data-id="${todo.id}"
          ${todo.completed ? 'checked' : ''}
        >
        <div class="todo-content">
          <div class="todo-text">${this.escapeHtml(todo.text)}</div>
          <div class="todo-meta">
            <span class="priority-badge ${todo.priority}">${todo.priority}</span>
            <span class="category-badge">${todo.category}</span>
            <span class="todo-date">${date}</span>
          </div>
        </div>
        <div class="todo-actions">
          <button class="action-btn edit edit-btn" data-id="${todo.id}">✏️</button>
          <button class="action-btn delete delete-btn" data-id="${todo.id}">🗑️</button>
        </div>
      </div>
    `;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
  });
} else {
  new TodoApp();
}
