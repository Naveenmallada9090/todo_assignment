import React from 'react';
import { ChevronDown } from 'lucide-react';
import TaskCard from './TaskCard';

const CompletedTasks = ({ tasks, onToggle, onFavorite, isCollapsed, onToggleCollapse }) => {
  const completedTasks = tasks.filter(task => task.completed);

  if (completedTasks.length === 0) return null;

  return (
    <div className="completed-section">
      <div className="completed-header" onClick={onToggleCollapse}>
        <ChevronDown className={`chevron ${isCollapsed ? '' : 'rotated'}`} size={18} />
        <h2 className="completed-title">Completed</h2>
        <span className="completed-count">{completedTasks.length}</span>
      </div>
      <div className={`completed-tasks ${isCollapsed ? 'collapsed' : ''}`}>
        {completedTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={onToggle}
            onFavorite={onFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;