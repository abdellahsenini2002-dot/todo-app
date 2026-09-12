// Local Storage Service
class StorageService {
  constructor(storageKey = 'todos') {
    this.storageKey = storageKey;
  }

  // Get all todos from localStorage
  getTodos() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  }

  // Save all todos to localStorage
  saveTodos(todos) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(todos));
      return true;
    } catch (error) {
      console.error('Error writing to localStorage:', error);
      return false;
    }
  }

  // Add a new todo
  addTodo(text, category = 'general', priority = 'medium') {
    const todos = this.getTodos();
    const newTodo = {
      id: Date.now(),
      text,
      category,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    todos.push(newTodo);
    this.saveTodos(todos);
    return newTodo;
  }

  // Update a todo
  updateTodo(id, updates) {
    let todos = this.getTodos();
    todos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, ...updates, updatedAt: new Date().toISOString() }
        : todo
    );
    this.saveTodos(todos);
    return todos.find((t) => t.id === id);
  }

  // Delete a todo
  deleteTodo(id) {
    let todos = this.getTodos();
    todos = todos.filter((todo) => todo.id !== id);
    this.saveTodos(todos);
    return true;
  }

  // Toggle todo completion
  toggleTodo(id) {
    const todos = this.getTodos();
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      todo.updatedAt = new Date().toISOString();
      this.saveTodos(todos);
    }
    return todo;
  }

  // Clear all completed todos
  clearCompleted() {
    let todos = this.getTodos();
    const completedCount = todos.filter((t) => t.completed).length;
    todos = todos.filter((t) => !t.completed);
    this.saveTodos(todos);
    return completedCount;
  }

  // Get todos by filter
  filterTodos(filter) {
    const todos = this.getTodos();
    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed);
      case 'completed':
        return todos.filter((t) => t.completed);
      case 'high':
        return todos.filter((t) => t.priority === 'high');
      case 'medium':
        return todos.filter((t) => t.priority === 'medium');
      case 'low':
        return todos.filter((t) => t.priority === 'low');
      default:
        return todos;
    }
  }

  // Get todos by category
  getTodosByCategory(category) {
    const todos = this.getTodos();
    return todos.filter((t) => t.category === category);
  }

  // Export todos as JSON
  exportTodos() {
    const todos = this.getTodos();
    return JSON.stringify(todos, null, 2);
  }

  // Import todos from JSON
  importTodos(jsonString) {
    try {
      const todos = JSON.parse(jsonString);
      if (Array.isArray(todos)) {
        this.saveTodos(todos);
        return { success: true, count: todos.length };
      }
      return { success: false, error: 'Invalid todo format' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Get statistics
  getStats() {
    const todos = this.getTodos();
    const completed = todos.filter((t) => t.completed).length;
    const total = todos.length;
    return {
      total,
      completed,
      remaining: total - completed,
      completionPercent: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = StorageService;
}
