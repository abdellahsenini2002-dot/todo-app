# Getting Started with Todo App

## Quick Start (2 Ways)

### ⚡ Method 1: Just Open in Browser (Easiest!)

```bash
# Clone the repo
git clone https://github.com/abdellahsenini2002-dot/todo-app
cd todo-app

# Double-click index.html
# Browser opens - Done! ✅
```

**No installation, no dependencies, works offline!**

---

### 🖥️ Method 2: Run a Local Server

#### Using Python (Most Common)

```bash
# Clone the repo
git clone https://github.com/abdellahsenini2002-dot/todo-app
cd todo-app

# Start server
python -m http.server 8000

# Open browser
# http://localhost:8000
```

#### Using Node.js

```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server -p 8000

# Open browser
# http://localhost:8000
```

#### Using VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically

---

## ✨ What You Get

✅ Add, edit, delete tasks  
✅ Categories & priorities  
✅ Filter by status or priority  
✅ Export/Import data  
✅ Statistics dashboard  
✅ Works offline  
✅ No account needed  

---

## 📸 Screenshot

```
📝 My Todo List
Stay organized and track your tasks

[Total Tasks: 5] [Completed: 2] [Remaining: 3] [Completion: 40%]

[Add a new task...] [General ▼] [Medium ▼] [➕ Add]

[All] [Active] [Completed] [🔴 High] [🟡 Medium] [🟢 Low]

✅ Buy groceries (🔴 HIGH • shopping • Jan 15)
   [✏️] [🗑️]

☐ Finish project (🟡 MEDIUM • work • Jan 14)
   [✏️] [🗑️]
```

---

## 🎯 Common Tasks

### Add a Task
1. Type in the input field
2. Choose category & priority (optional)
3. Click Add or press Enter

### Complete a Task
- Click the checkbox ✅

### Edit a Task
- Click the ✏️ button
- Edit the text
- Click OK

### Delete a Task
- Click the 🗑️ button
- Confirm deletion

### Export Tasks
- Click 📥 Export
- JSON file downloads

### Import Tasks
- Click 📤 Import
- Select JSON file
- Tasks are restored

---

## 🔍 Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't open index.html | Right-click → Open with → Browser |
| Tasks not saving | Check localStorage in DevTools |
| Import not working | Ensure file is JSON from export |
| Want to clear all | Press F12 → Console → `localStorage.removeItem('todos')` |

---

## 📚 Learn More

- [README.md](README.md) - Full documentation
- [index.html](index.html) - HTML structure
- [js/storage.js](js/storage.js) - Storage logic
- [js/todo.js](js/todo.js) - App logic
- [css/style.css](css/style.css) - Styling

---

**Ready? Open index.html and start organizing! 🚀**
