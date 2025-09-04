# 📝 Task Manager (MERN + TypeScript)

A fullstack **Task Manager App** built with the **MERN stack** (MongoDB, Express, React, Node.js) and **TypeScript**.  
Users can register, log in, and manage tasks (create, read, update, delete). Authentication is handled with **JWT**.

---

## 🚀 Features
- User authentication (Register, Login, JWT-based Auth)
- CRUD operations for tasks
- Protected routes (only logged-in users can manage tasks)
- Responsive UI (React + Tailwind/Bootstrap)
- TypeScript on both frontend and backend

---

## 🛠 Tech Stack
- **Frontend**: React, React Router, Axios, TailwindCSS/Bootstrap, TypeScript
- **Backend**: Node.js, Express, MongoDB, Mongoose, TypeScript
- **Auth**: JWT, bcryptjs
- **Database**: MongoDB Atlas

---

## 📂 Project Structure
task-manager/
│── backend/ # Node + Express API
│ ├── src/
│ │ ├── config/ # MongoDB connection
│ │ ├── middleware/ # Auth middleware
│ │ ├── models/ # User, Task models
│ │ ├── routes/ # Auth + Task routes
│ │ └── server.ts # Entry point
│── frontend/ # React App (to be added later)

---

## ⚙️ Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/theo-georgewill/task-manager.git
cd task-manager/backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
```bash
Create a .env file in backend/:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Run the server
```bash 
npm run dev
The API will run on http://localhost:5000.
```

📌 API Endpoints

Auth
    POST /api/auth/register → Register new user
    POST /api/auth/login → Login user & return JWT

Tasks (protected)
    GET /api/tasks → Get all tasks for logged-in user
    POST /api/tasks → Create new task
    PUT /api/tasks/:id → Update task
    DELETE /api/tasks/:id → Delete task

🎯 Future Improvements
    Add unit & integration tests (Jest)
    Deploy backend (Render) & frontend (Vercel)
    Add pagination, task filtering & search

👨‍💻 Author
Theo Georgewill