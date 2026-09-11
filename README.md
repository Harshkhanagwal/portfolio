# My Portfolio Website 🚀

A personal portfolio website built with the **MERN stack** (MongoDB, Express.js, React, Node.js) — featuring a public-facing portfolio site and a protected **admin panel** to manage my Projects, Skills, and Experience directly from the database.

🔗 **Live Demo:** [your-live-link-here](#)

---

## ✨ Current Features

- 🎨 Responsive portfolio site — Hero, About, Skills, Experience, Projects, GitHub, and Contact sections
- 🔐 Admin panel with login (protected routes) to manage site content
- 🛠️ Full CRUD for:
  - Projects
  - Skills
  - Experience
- 🖱️ Custom cursor and smooth scroll UX touches
- 📡 REST API backend connected to MongoDB

> 🚧 Currently focused on getting the core MERN CRUD (Projects/Skills/Experience + Admin) solid. See [Planned Features](#-planned-features) below for what's next.

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Plain CSS (component-scoped stylesheets)
- ESLint

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT-based auth (admin login + protected middleware)

---

## 📂 Project Structure

```
portfolio/
├── client/                              # React (Vite) frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── Style/                       # Global styles (App, Typography, form, index)
│   │   │
│   │   ├── components/                  # Public portfolio site sections
│   │   │   ├── HeroSection/
│   │   │   ├── AboutSection/
│   │   │   ├── SkillsSection/
│   │   │   ├── Skills/
│   │   │   ├── ExperienceSection/
│   │   │   ├── ProjectsSection/
│   │   │   ├── GitHubSection/
│   │   │   ├── ContactSection/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   ├── Personal/
│   │   │   ├── Cursor/                  # Custom cursor
│   │   │   ├── elements/                # SmoothScroll, etc.
│   │   │   └── AIchatBot/               # 🚧 Scaffolded, not yet wired up
│   │   │
│   │   └── admin/                       # Admin panel (separate app shell)
│   │       ├── adminApp.jsx
│   │       ├── components/
│   │       │   ├── layout/              # AdminLayout
│   │       │   ├── ProtectedRoute.jsx
│   │       │   ├── services/            # authService, projectService, skillService, experienceService
│   │       │   └── pages/
│   │       │       ├── Login/
│   │       │       ├── Dashboard/
│   │       │       ├── Projects/
│   │       │       ├── Skills/
│   │       │       └── Experience/
│   │       └── admin.css
│   │
│   └── public/
│
├── server/                              # Express backend
│   ├── server.js
│   ├── app.js
│   ├── config/
│   │   └── db.js                        # MongoDB connection
│   ├── models/
│   │   ├── Admin.js
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   └── Experience.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   └── experienceController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── skillRoutes.js
│   │   ├── experienceRoutes.js
│   │   └── overviewRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js            # JWT protection for admin routes
│   ├── scripts/
│   │   └── createAdmin.js               # One-off script to seed an admin user
│   └── services/
│
└── README.md
```

> 📌 More components and admin pages are being added as the project grows — this structure will keep evolving.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/your-username/your-portfolio-repo.git
cd portfolio
```

### 2. Install dependencies
```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3. Set up environment variables
Copy `server/.env.example` to `server/.env` and fill in your values:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Create an admin user
```bash
cd server
node scripts/createAdmin.js
```

### 5. Run the app
```bash
# Terminal 1 — backend
cd server
npm run dev

# Terminal 2 — frontend
cd client
npm run dev
```

Frontend runs on Vite's default port (usually `http://localhost:5173`), backend API on `http://localhost:5000`.

---

## 🔐 Admin Panel

The admin panel is a separate app shell (`client/src/admin`) mounted alongside the public site. It's protected via `ProtectedRoute.jsx` and JWT auth (`authMiddleware.js` on the backend).

From the dashboard, I can currently manage:
- **Projects** — add/edit/delete portfolio projects
- **Skills** — add/edit/delete listed skills
- **Experience** — add/edit/delete work experience entries

---

## 🗺️ Planned Features

- 🤖 **AI chat assistant** (`AIchatBot` component is scaffolded, not yet functional) — planned to use **RAG (Retrieval-Augmented Generation)**:
  - Pull context from my resume and from the same DB content managed in the admin panel (Projects, Skills, Experience)
  - Retrieve relevant chunks per visitor question and feed them to an LLM for grounded, accurate answers
  - Admin-added details automatically become usable context — no redeploy needed
- 🌓 Dark mode
- 📊 Analytics for site/chat usage
- 🚀 CI/CD deployment pipeline

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact

- Portfolio: [https://harshkhanagwal.netlify.app](#)
- Email: Harshkhanagwall29@gmail.com
- LinkedIn: [https://www.linkedin.com/in/harshkhanagwal/](#)