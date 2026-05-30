import React from 'react';
import { Star, Check, Trash2 } from 'lucide-react';

const TaskCard = ({ task, onToggle, onFavorite, onDelete }) => {
  return (
    <div className="task-card" onClick={() => onToggle(task.id)}>
      <div className={`checkbox ${task.completed ? 'completed' : ''}`}>
        {task.completed && <Check size={16} className="checkbox-icon" />}
      </div>
      <div className="task-content">
        <div className={`task-title ${task.completed ? 'completed' : ''}`}>
          {task.title}
        </div>
        <div className="task-subtitle">Tasks</div>
      </div>
      <button
        className={`favorite-btn ${task.favorite ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onFavorite(task.id);
        }}
      >
        <Star size={20} fill={task.favorite ? 'currentColor' : 'none'} />
      </button>
      {onDelete && (
        <button
          className="favorite-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm('Delete this task?')) onDelete(task.id);
          }}
          style={{ color: '#ef4444' }}
        >
          <Trash2 size={18} />
        </button>
      )}
    </div>
  );
};

export default TaskCard;