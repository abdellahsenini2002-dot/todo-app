# 📝 Todo App with Local Storage

A modern, feature-rich todo list application with local storage functionality. All your tasks are saved directly in your browser!

## ✨ Features

- ✅ **Add, Edit, Delete Tasks** - Manage your todos easily
- 💾 **Local Storage** - All data saved automatically in your browser
- 🏷️ **Categories** - Organize tasks by: General, Work, Personal, Shopping, Health
- 🎯 **Priority Levels** - Set tasks as Low, Medium, or High priority
- 🔍 **Filtering** - View All, Active, Completed, or filter by priority
- 📊 **Statistics** - Track total, completed, remaining tasks and completion %
- 📥 **Export/Import** - Backup and restore your tasks as JSON
- 🎨 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** - No external dependencies

## 🚀 Quick Start

### Option 1: Open HTML File (Easiest)

1. Clone the repository:
```bash
git clone https://github.com/abdellahsenini2002-dot/todo-app
cd todo-app
```

2. Double-click `index.html` to open in your browser

**That's it! No installation needed.**

### Option 2: Use Local Server (Python)

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 3: Use Node.js HTTP Server

If you have Node.js installed:

```bash
npm install -g http-server
http-server

# Then open the URL shown (usually http://localhost:8080)
```

### Option 4: Use VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically

## 📖 How to Use

### Adding a Task
1. Type your task in the input field
2. Select a category (optional)
3. Select priority level (optional)
4. Click ➕ **Add** or press Enter

### Managing Tasks
- ✅ **Check box** to mark complete/incomplete
- ✏️ **Edit button** to modify task text
- 🗑️ **Delete button** to remove task

### Filtering
- **All** - Show all tasks
- **Active** - Show incomplete tasks only
- **Completed** - Show completed tasks only
- **🔴 High** - Filter by high priority
- **🟡 Medium** - Filter by medium priority
- **🟢 Low** - Filter by low priority

### Backup & Restore
- **📥 Export** - Download all tasks as JSON file
- **📤 Import** - Upload previously exported JSON file

### Clear Completed
- Click **🗑️ Clear Completed** to remove all finished tasks

## 📂 File Structure

```
todo-app/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styling
├── js/
│   ├── storage.js      # Local storage logic
│   └── todo.js         # App logic and rendering
├── README.md           # This file
└── package.json        # Project metadata
```

## 💾 How Local Storage Works

All your tasks are stored in your browser's **localStorage**:

- Data persists even after closing the browser
- Stored locally on your device (not on a server)
- ~5-10MB available per domain
- No internet connection needed
- Data is NOT shared between browsers or devices

## 🔍 View Your Data

1. Open browser DevTools (F12 or Right-click → Inspect)
2. Go to **Application** tab
3. Click **Local Storage**
4. Select your website URL
5. Look for key: `todos`

## 📦 Export Format

Exported JSON contains:
```json
[
  {
    "id": 1694123456789,
    "text": "Buy groceries",
    "category": "shopping",
    "priority": "high",
    "completed": false,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

## 🎨 Customization

### Add New Categories
Edit in `js/todo.js` and `index.html` `<select id="categorySelect">`

### Change Colors
Edit `css/style.css` - Look for color variables:
- `#667eea` - Primary purple
- `#764ba2` - Secondary purple
- `#ff6b6b` - Red (high priority)
- `#ffd93d` - Yellow (medium priority)
- `#6bcf7f` - Green (low priority)

### Adjust Storage Size
Check browser localStorage limit:
```javascript
// In browser console
Object.keys(localStorage).length  // Number of items
localStorage.length               // Total items
```

## 🐛 Troubleshooting

### Tasks not saving?
- Check if localStorage is enabled in browser settings
- Try a different browser
- Check browser console for errors (F12)

### Import not working?
- Ensure JSON file is valid format
- File should be exported from this app
- Check file size (max ~5MB)

### Want to clear all data?
```javascript
// In browser console
localStorage.removeItem('todos')
// Refresh page
```

## 🔐 Privacy

- ✅ All data stored locally on your device
- ✅ No servers involved
- ✅ No tracking or analytics
- ✅ Open source (see code)
- ✅ Works offline

## 📝 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork and submit PRs!

## 📄 License

MIT License - Use freely

## 🎯 Future Features

- [ ] Drag & drop to reorder
- [ ] Recurring tasks
- [ ] Due dates & reminders
- [ ] Dark mode
- [ ] Cloud sync
- [ ] Tags/Labels
- [ ] Search functionality
- [ ] Subtasks

---

**Happy organizing! 🎉**
