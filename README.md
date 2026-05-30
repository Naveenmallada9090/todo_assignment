# Task Management Web Application (MERN Stack)

A full-stack task management application with user authentication and Microsoft To Do inspired UI.

![Task Manager Preview](https://images.unsplash.com/photo-1506744038136-4627383b9425?auto=format&fit=crop&w=1200&q=80)

## ✨ Features

### Frontend (React.js)
- Modern Microsoft To Do inspired UI design
- Full-screen background with dark overlay
- Task CRUD operations (Create, Read, Update, Delete)
- Search functionality with real-time filtering
- Collapsible completed tasks section
- Glassmorphism effects on buttons and controls
- Responsive design for desktop, tablet, and mobile

### Backend (Node.js/Express)
- RESTful API endpoints
- JWT-based authentication
- Password hashing with bcryptjs
- MongoDB database integration
- Protected routes with middleware

## 🛠️ Tech Stack

### Frontend
- React.js (Functional Components & Hooks)
- Lucide React Icons
- Plain CSS (No frameworks)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- cors

## 📁 Project Structure

```
task-manager/
├── backend/
│   ├── index.js           # Express server entry point
│   ├── .env               # Environment variables
│   ├── models/
│   │   ├── User.js        # User schema
│   │   └── Task.js        # Task schema
│   ├── routes/
│   │   ├── auth.js        # Authentication routes
│   │   └── tasks.js       # Task CRUD routes
│   └── middleware/
│       └── auth.js        # JWT authentication middleware
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── CompletedTasks.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
├── package.json
└── README.md
```

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in backend:
```
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=jwt_secret_key_min_32_chars_long_for_security
PORT=5000
CLIENT_URL=http://localhost:3000
```

Run backend:
```bash
npm run dev    # Development (with nodemon)
npm start      # Production
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Tasks (Protected - requires JWT token)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all user tasks |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

## 🎨 Sample Tasks

Default tasks loaded on frontend:
- turbine (active)
- rust (completed)
- react (completed)

## 📱 Responsive Design

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🔐 Security

- Passwords hashed with bcryptjs
- JWT tokens for authentication
- Protected API routes with middleware
- CORS enabled for frontend origin

## 📄 License

MIT License

## 🚀 Deployment

### Backend (Render/Heroku)
1. Push to Render/Heroku
2. Set environment variables in platform dashboard
3. Use MongoDB Atlas for database

### Frontend (Netlify/Vercel)
1. Build: `npm run build`
2. Deploy `build/` folder to Netlify/Vercel
3. Set `REACT_APP_API_URL` environment variable to your backend URL