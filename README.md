# DevConnect

> A platform for developers to connect with projects and peers.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat-square&logo=reactrouter)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)

---

## Overview

DevConnect is a developer networking platform that lets developers discover projects, collaborate with peers, and grow their professional network. Built with a dark, modern UI using React and Tailwind CSS.

---

## Pages

| Page | Route | Description |
|---|---|---|
| Main | `/` | Landing page with hero, search, and about section |
| Selection | `/selectionpage` | Choose between Developer or User role |
| Login | `/loginpage` | Sign in to your account |
| Sign Up | `/signup` | Create a new account |
| Forgot Password | `/forgotpassword` | Request a password reset code |
| Developer Dashboard | `/developerdashboard` | Main dashboard with projects and team info |

---

## Project Structure

```
devconnect/
├── public/
├── src/
│   ├── assets/
│   │   └── assets.js          # Centralized asset exports (icons, images)
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── Footer.jsx          # Footer
│   │   └── Sidebar.jsx         # Dashboard sidebar with active link detection
│   ├── pages/
│   │   ├── Main.jsx            # Landing page
│   │   ├── SelectionPage.jsx   # Role selection
│   │   ├── LoginPage.jsx       # Login form
│   │   ├── SignUp.jsx          # Registration form
│   │   ├── ForgotPassword.jsx  # Password reset
│   │   └── DeveloperDash.jsx   # Developer dashboard
│   ├── App.jsx                 # Route definitions
│   └── main.jsx                # React entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/devconnect.git
cd devconnect
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

---

## Tech Stack

- **React 18** — UI library
- **React Router v6** — Client-side routing
- **Tailwind CSS v3** — Utility-first styling
- **Vite** — Build tool and dev server

---

## Routing

Routes are defined in `App.jsx` using React Router v6:

```jsx
<Routes>
  <Route path="/"                    element={<Main />} />
  <Route path="/selectionpage"       element={<SelectionPage />} />
  <Route path="/loginpage"           element={<LoginPage />} />
  <Route path="/signup"              element={<SignUp />} />
  <Route path="/forgotpassword"      element={<ForgotPassword />} />
  <Route path="/developerdashboard"  element={<DeveloperDash />} />
</Routes>
```

---

## Demo Credentials

The login page uses hardcoded credentials for demo purposes:

```
Email:    admin@example.com
Password: 123
```

> Replace this with a real authentication system (JWT, Firebase, etc.) before deploying to production.

---

## Features

- Dark, modern UI consistent across all pages
- Role-based entry point (Developer / User)
- Login, Sign Up, and Forgot Password flows
- Developer dashboard with project stats, recent projects, and team members
- Active link detection in the sidebar
- Responsive layout with Tailwind CSS
- Reusable components (Navbar, Footer, Sidebar)

---

## Planned Features

- [ ] Real authentication with JWT or Firebase
- [ ] User and Developer profile pages
- [ ] Project creation and management
- [ ] Live search for developers and skills
- [ ] Messaging and meeting scheduling
- [ ] Notifications system

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "add: your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">Built with ❤️ by the DevConnect team</p>
