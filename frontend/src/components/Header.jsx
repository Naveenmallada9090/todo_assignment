import React from 'react';
import { Grid2x2, Lightbulb, Menu, LogOut } from 'lucide-react';

const Header = ({ onFocusClick, onIdeasClick, onMenuClick, onLogout, focusCount, ideasCount }) => {
  const formatDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">My Day</h1>
        <p className="header-date">{formatDate()}</p>
      </div>
      <div className="header-actions">
        <button 
          className="action-btn" 
          title="Focus tasks" 
          onClick={onFocusClick}
        >
          <Grid2x2 size={20} />
        </button>
        <button 
          className="action-btn" 
          title="Ideas" 
          onClick={onIdeasClick}
        >
          <Lightbulb size={20} />
        </button>
        <button 
          className="action-btn" 
          title="Menu" 
          onClick={onMenuClick}
        >
          <Menu size={20} />
        </button>
        {onLogout && (
          <button 
            className="action-btn" 
            title="Logout" 
            onClick={onLogout}
          >
            <LogOut size={20} />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;