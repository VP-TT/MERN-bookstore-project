# 📚 MERN Bookstore Project

A full-stack **Bookstore web application** built using the **MERN stack**
(**MongoDB, Express.js, React, Node.js**).

This project demonstrates **end-to-end CRUD operations**, **RESTful API design**, and a **modern React frontend** connected to a scalable backend architecture.

---

## 🚀 Features

- 📖 View a list of available books  
- ➕ Add new books to the collection  
- ✏️ Update existing book details  
- ❌ Delete books  
- 🌐 RESTful API for backend operations  
- ⚡ Fast and responsive frontend powered by React  
- 🗄️ MongoDB for persistent data storage  

---

## 🛠️ Tech Stack

### Frontend
- React  
- JavaScript  
- HTML & CSS  
- Vite  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Tools & Utilities
- npm  
- Concurrently (optional)  

---

## 📂 Project Structure

```text
bookstore-project/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   ├── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Getting Started

Clone the repository:

```bash
git clone https://github.com/VP-TT/MERN-bookstore-project.git
```

Navigate to the project directory:

```bash
cd bookstore-project
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

Set up environment variables.

Create a `.env` file inside the **backend** directory and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

## ▶️ Running the Application

Start the backend server:

```bash
cd backend
npm run dev
```

Start the frontend development server:

```bash
cd frontend
npm run dev
```

Run both frontend and backend concurrently (optional):

```bash
npm run dev:full
```

---

## 📌 Usage

Open the frontend in your browser:

```text
http://localhost:5173
```

Backend API runs at:

```text
http://localhost:5000
```

Use the application to perform CRUD operations on books.

---

## 🎯 Learning Outcomes

This project helped reinforce:

- Full-stack application architecture  
- RESTful API design  
- React component-based development  
- Backend–frontend integration  
- MongoDB schema modeling  

---

## 🔮 Future Improvements

- 🔐 User authentication & authorization  
- 🛒 Shopping cart and checkout system  
- 📦 Book categories and search functionality  
- 🌍 Deployment using Docker or cloud platforms  
- 🎨 Improved UI/UX styling  

---

## 👤 Author

**Vishnu Priya Taduka**  
Computer Science Undergraduate | MERN Stack Developer  

GitHub: https://github.com/VP-TT  

---

⭐ If you find this project useful, consider giving it a star!
