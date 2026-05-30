import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onToggle, onFavorite, onDelete }) => {
  const activeTasks = tasks.filter(task => !task.completed);

  return (
    <div className="section">
      <h2 className="section-title">My tasks</h2>
      <div className="task-list">
        {activeTasks.length === 0 ? (
          <div className="empty-state">
            <p>Add your first task above</p>
          </div>
        ) : (
          activeTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onFavorite={onFavorite}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;