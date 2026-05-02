# 📝 To-Do List Application

A beautiful, feature-rich to-do list application built with vanilla JavaScript and local storage. Supports multiple languages, categories, and priority levels.

## 🌟 Features

### ✨ Core Features
- ✅ **Add Tasks** - Create new tasks with title, category, priority, and due date
- 📝 **Edit Tasks** - Double-click task text to edit (inline editing)
- ✓ **Mark Complete** - Check off tasks when done
- 🗑️ **Delete Tasks** - Remove unwanted tasks
- 📊 **Real-time Statistics** - Track total, completed, pending, and high-priority tasks
- 🎨 **Visual Status** - Color-coded priority indicators

### 🔍 Filter & Sort
- **Filter Options**:
  - ទាំងអស់ (All tasks)
  - ក្នុងដំណើរការ (Pending tasks)
  - ស្រេច (Completed tasks)
  - 🔴 ខ្ពស់ (High priority tasks)

- **Sort Options**:
  - 📅 កាលបរិច្ឆេទ (By date)
  - ⚡ អាទិភាព (By priority)
  - 📂 ប្រភេទ (By category)
  - ✓ ស្ថានភាព (By status)

### 💾 Local Storage
- Automatically saves tasks to browser local storage
- Persists data across browser sessions
- No server required

### 📁 Categories
- 💼 ការងារ (Work)
- 👤 ផ្ទាល់ខ្លួន (Personal)
- 🛒 ទិញទំនិញ (Shopping)
- 💪 ព្យាបាល (Health)
- 📌 ផ្សេងទៀត (Other)

### 🎯 Priority Levels
- 🔴 ខ្ពស់ (High) - Urgent tasks
- 🟡 មធ្យម (Medium) - Normal tasks
- 🟢 ទាប (Low) - Low priority tasks

### 📥📤 Import/Export
- **Export to JSON** - Download tasks as JSON file
- **Import from JSON** - Load tasks from JSON file
- **Clear All** - Remove all tasks at once

### 🖨️ Print
- Print tasks with formatting
- Includes task details (title, category, priority, date, status)
- Professional layout

## 🚀 How to Use

### Adding a Task
1. Enter task title in the input field
2. Select category from dropdown
3. Choose priority level
4. Pick a due date (optional)
5. Click "➕ បន្ថែម" button

### Editing a Task
- Double-click on task text to edit
- Press Enter or click outside to save
- Press Escape to cancel

### Completing a Task
- Check the checkbox next to the task
- Task will be marked as completed with strikethrough
- Completion timestamp recorded

### Filtering & Sorting
- Use filter buttons to show specific task groups
- Use sort dropdown to organize tasks
- Combine filters and sorts for flexible views

### Export/Import
```javascript
// Export
Click "📥 នាំចេញ JSON" to download tasks

// Import
Click "📤 នាំចូល JSON" to load tasks from file
```

### Delete Tasks
- Click "🗑️ លុប" on individual task
- Or click "🗑️ លុបទាំងអស់" to remove all

## 💾 Local Storage Details

### Storage Key
```
localStorage key: 'todoList'
```

### Task Object Structure
```javascript
{
  id: 1234567890,              // Unique timestamp
  text: "Task description",     // Task title
  category: "work",            // Task category
  priority: "medium",          // Priority level
  date: "2026-05-02",         // Due date
  completed: false,            // Completion status
  createdAt: "ISO 8601",      // Creation timestamp
  completedAt: null           // Completion timestamp
}
```

### Auto-Save
- Tasks save automatically after each action
- Saves when page loses focus
- No manual save needed

## 🎨 UI Components

### Header
- Gradient background with purple theme
- Shows app title and description
- Responsive design

### Statistics Box
- 📊 Total tasks count
- ✅ Completed tasks count
- ⏳ Pending tasks count
- 🔴 High priority tasks count

### Add Task Card
- Input field for task title
- Category selector
- Priority selector
- Date picker
- Submit button

### Task Item
- Task text (editable)
- Category badge with icon
- Priority badge with color
- Due date display
- Created time display
- Completion time (if done)
- Delete button
- Checkbox for completion

### Filter Section
- Quick filter buttons
- Sort dropdown selector
- Responsive layout

### Action Buttons
- 📥 Export as JSON
- 📤 Import from JSON
- 🗑️ Clear all tasks
- 🖨️ Print tasks

## 📱 Responsive Design

- **Mobile** - Single column layout
- **Tablet** - Multi-column grid
- **Desktop** - Full layout with sidebars
- Tailwind CSS for responsive styling

## 🌐 Language Support

The application is fully localized in Khmer:
- All labels in Khmer
- Date formatting in Khmer calendar
- Local time display

## 🔐 Data Privacy

- All data stored locally in browser
- No server communication
- No external API calls
- Complete data privacy
- Export data to backup

## 📝 Example Tasks

```json
[
  {
    "id": 1704268800000,
    "text": "ចូលរៀនកម្មវិធីលេងកុំព្យូទ័រ",
    "category": "work",
    "priority": "high",
    "date": "2026-05-05",
    "completed": false,
    "createdAt": "2026-05-02T10:30:00Z",
    "completedAt": null
  },
  {
    "id": 1704268801000,
    "text": "ទិញផ្នែកសាច់គោ",
    "category": "shopping",
    "priority": "medium",
    "date": "2026-05-03",
    "completed": true,
    "createdAt": "2026-05-02T11:00:00Z",
    "completedAt": "2026-05-02T14:30:00Z"
  }
]
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Enter | Submit task form or save edit |
| Escape | Cancel editing |
| Double-click | Edit task text |

## 🎯 Tips & Tricks

1. **Quick Add**: Keep tab open for quick task additions
2. **Backup**: Export tasks weekly for backup
3. **Filter**: Use filters to focus on specific work
4. **Sort**: Organize by priority for urgent tasks
5. **Complete**: Check off tasks for satisfaction boost!

## 🔄 Workflow Example

```
1. Morning: Add all tasks for the day
2. Midday: Filter by "ក្នុងដំណើរការ" to see pending
3. Complete: Check off finished tasks
4. Evening: Review completed tasks
5. Export: Backup tasks at end of week
```

## 🐛 Troubleshooting

### Tasks Not Saving
- Check browser local storage is enabled
- Clear browser cache and reload
- Check browser console for errors

### Tasks Disappeared
- Check if browser data was cleared
- Try importing from backup JSON
- Check in DevTools Application → Local Storage

### Import Not Working
- Verify JSON file format is correct
- Ensure file is .json extension
- Check file contains valid task array

## 📊 Statistics

- Real-time task count updates
- Visual stat boxes with colors
- Auto-refresh on every action

## 🎨 Color Scheme

- **Primary**: Purple (#667eea)
- **High Priority**: Red (#ef4444)
- **Medium Priority**: Orange (#f59e0b)
- **Low Priority**: Green (#10b981)
- **Completed**: Gray (opacity)

## 📦 Technologies

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (Vanilla)
- LocalStorage API
- File API (Import/Export)
- Print API

## 🌍 Browsers Supported

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## 💡 Future Enhancements

- [ ] Cloud sync support
- [ ] Recurring tasks
- [ ] Task reminders/notifications
- [ ] Subtasks
- [ ] Tags system
- [ ] Dark mode
- [ ] Multiple lists
- [ ] Time tracking
- [ ] Analytics

## 📄 License

Free to use and modify

## 👨‍💻 Author

Created with ❤️ for productivity enthusiasts

---

**Happy Planning! 📝✨**
