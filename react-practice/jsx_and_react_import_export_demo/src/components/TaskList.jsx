function TaskList() {
  // Array of tasks
  const tasks = [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Build a project", completed: false },
    { id: 3, title: "Deploy to netlify", completed: false },
    { id: 4, title: "Learn JSX", completed: true }
  ];

  // Calculate statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="task-list">
      <h1>Task Manager</h1>

      {/* Progress display */}
      <div className="progress">
        <p>Progress: {completedTasks}/{totalTasks} tasks completed</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>{Math.round(progress)}% complete</p>
      </div>

      {/* Task list */}
      <ul className="tasks">
        {tasks.map(task => (
          <li
            key={task.id}
            className={task.completed ? "completed" : "pending"}
          >
            <span>{task.title}</span>
            <span>
              {task.completed ? "✅" : "⏳"}
            </span>
          </li>
        ))}
      </ul>

      {/* Summary with conditional */}
      <div className="summary">
        {completedTasks === totalTasks ? (
          <p className="success">🎉 All tasks completed! Great job!</p>
        ) : (
          <p className="info">
            Keep going! {totalTasks - completedTasks} tasks remaining.
          </p>
        )}
      </div>
    </div>
  );
}

export default TaskList;
