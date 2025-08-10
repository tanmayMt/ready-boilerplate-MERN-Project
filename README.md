# ⚡️ Speed-Ready MERN Boilerplate

A speed-ready MERN boilerplate with a real industrial project structure.

---

## 🛠️ Backend

- **server.js** → 🚀 Entry point
- **config/db.js** → 🗄️ DB connection
- **models/** → 🧩 Mongoose models
- **controllers/** → 🧠 Logic only (no DB code here)
- **routes/** → 🌐 API endpoints
- **queries/** → 🔍 All DB queries in one place (separate layer)
- **middleware/** → 🛡️ Error handling, authentication, etc.

---

## 🎨 Frontend

- **src/components/** → 🧱 Reusable UI
- **src/pages/** → 📄 Page-level components
- **src/services/** → 🔗 API calls
- **src/context/** → 🗂️ State management

---

## 📂 Project Structure

```plaintext
ready-boilerplate-MERN-Project/
│
├── backend/
│   ├── config/
│   │   └── db.js         🗄️
│   ├── controllers/
│   │   └── userController.js  🧠
│   ├── models/
│   │   └── User.js       🧩
│   ├── queries/
│   │   └── userQueries.js     🔍
│   ├── routes/
│   │   └── userRoutes.js      🌐
│   ├── middleware/
│   │   └── errorMiddleware.js 🛡️
│   └── server.js         🚀
│   └── .gitignore
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── UserList.jsx   🧱
    │   ├── pages/
    │   │   └── HomePage.jsx   📄
    │   ├── services/
    │   │   └── userService.js 🔗
    │   ├── context/
    │   │   └── UserContext.jsx 🗂️
    │   └── App.jsx
└── .gitignore
```
