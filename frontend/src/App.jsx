import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';
import SearchBar from './components/SearchBar';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles.css';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  
  useEffect(() => {
    const checkAuth = () => {
      const stored = localStorage.getItem('token');
      if (stored !== token) {
        setToken(stored);
      }
    };
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, [token]);

  return children(token);
};

const AppContent = () => {
  const token = localStorage.getItem('token');
  
  return token ? <Dashboard /> : <Navigate to="/login" replace />;
};

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'turbine', completed: false, favorite: false },
    { id: 2, title: 'rust', completed: true, favorite: false },
    { id: 3, title: 'react', completed: true, favorite: true },
  ]);
  const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');
  const [completedCollapsed, setCompletedCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask, completed: false, favorite: false }
    ]);
    setNewTask('');
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleFavorite = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, favorite: !task.favorite } : task
    ));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleClearSearch = () => {
    setSearch('');
  };

  const handleFocusClick = () => {
    alert('Focus mode: Show only favorite tasks');
  };

  const handleIdeasClick = () => {
    alert('Ideas: Show suggestions for new tasks');
  };

  const handleMenuClick = () => {
    alert('Menu: Settings and theme options');
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const completedCount = tasks.filter(t => t.completed).length;
  const focusCount = tasks.filter(t => t.favorite && !t.completed).length;
  const ideasCount = 3;

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Header
          focusCount={focusCount}
          ideasCount={ideasCount}
          onFocusClick={handleFocusClick}
          onIdeasClick={handleIdeasClick}
          onMenuClick={handleMenuClick}
          onLogout={handleLogout}
        />

        <SearchBar
          search={search}
          onSearch={handleSearch}
          onClear={handleClearSearch}
        />

        <form className="task-input-container" onSubmit={handleAddTask}>
          <input
            type="text"
            className="task-input"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" className="add-btn">
            <Plus size={20} />
          </button>
        </form>

        {search && filteredTasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks found matching "{search}"</p>
          </div>
        ) : (
          <>
            <TaskList
              tasks={filteredTasks}
              onToggle={handleToggle}
              onFavorite={handleFavorite}
              onDelete={handleDelete}
            />

            {completedCount > 0 && (
              <CompletedTasks
                tasks={filteredTasks}
                onToggle={handleToggle}
                onFavorite={handleFavorite}
                isCollapsed={completedCollapsed}
                onToggleCollapse={() => setCompletedCollapsed(!completedCollapsed)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<AppContent />} />
    </Routes>
  </Router>
);

export default App;