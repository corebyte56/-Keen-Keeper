# KeenKeeper 🌿

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

[![Live Demo](https://img.shields.io/badge/Live-keen--keeper--khaki.vercel.app-brightgreen?style=flat-square&logo=vercel)](https://keen-keeper-khaki.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 📖 About

**KeenKeeper** is a relationship management app designed to help you stay meaningfully connected with the people who matter most in your life — friends, mentors, family, and colleagues. It tracks how long it's been since you last reached out, reminds you when connections are going cold, and gives you a clean, beautiful interface to manage your personal network.

Think of it as a CRM — but for real human relationships.

---

## ✨ Features

- 🧑‍🤝‍🧑 **Friend Cards** — Visual cards showing each contact's photo, name, tags, and last contact date
- 🔴 **Status Badges** — Automatically marks contacts as `On Track`, `Almost Due`, or `Overdue` based on your goal interval
- 🏷️ **Tag System** — Categorize contacts as `friend`, `work`, `college`, `mentor`, `family`, and more
- 📋 **Friend Detail Page** — Deep-dive view with stats, quick check-in buttons (Call, Text, Video), and relationship goal tracking
- 📊 **Stats Dashboard** — Overview cards showing total friends, on-track count, and monthly interactions
- ⏰ **Timeline View** — Filter and browse your interaction history
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- ⚡ **Fast & Lightweight** — Built with Vite for near-instant load times

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 19 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 + DaisyUI |
| Icons | Lucide React |
| Build Tool | Vite |
| Deployment | Vercel |
| State Management | React Context API |
| Data | Static JSON (src/Data) |

---

## 📁 Folder Structure

```
keen-keeper/
├── public/                  # Static assets served directly
├── src/
│   ├── assets/              # Images and icons
│   │   └── Icons/           # PNG icon files (call, facebook, instagram, etc.)
│   ├── Compnents/           # Reusable UI components
│   │   ├── Banner/          # Hero banner for home page
│   │   ├── Count-Card/      # Stats overview cards
│   │   ├── Footer/          # Site footer
│   │   ├── Friends/         # Friends grid component
│   │   └── Navbar/          # Top navigation bar
│   ├── Context/
│   │   └── Context.jsx      # Global state via React Context API
│   ├── Data/
│   │   └── friendData.json  # Static friend data
│   ├── Layout/
│   │   └── mainLayout.jsx   # Root layout with Navbar + Outlet + Footer
│   ├── Pages/
│   │   ├── FriendDetails/   # Individual friend detail page
│   │   ├── HomePage/        # Main landing/home page
│   │   ├── States/          # Stats/analytics page
│   │   └── TimeLine/        # Interaction timeline page
│   ├── Routes/
│   │   └── Routes.jsx       # React Router route definitions
│   ├── UI/                  # Shared low-level UI components (Card, etc.)
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json              # Vercel deployment config
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/corebyte56/Keen-Keeper.git

# Navigate into the project
cd keen-keeper

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. Every push to the `main` branch triggers an automatic deployment.

Live URL: [https://keen-keeper-khaki.vercel.app](https://keen-keeper-khaki.vercel.app)

To deploy your own instance:

1. Fork this repository
2. Go to [vercel.com](https://vercel.com) and import your forked repo
3. Vercel will auto-detect the Vite config and deploy

---

## 📊 Data Structure

Each friend entry in `src/Data/friendData.json` follows this schema:

```json
{
  "id": 1,
  "name": "Alice Morgan",
  "picture": "https://i.pravatar.cc/150?img=1",
  "email": "alice.morgan@gmail.com",
  "days_since_contact": 3,
  "status": "active",
  "tags": ["friend", "college"],
  "bio": "Met at NYU freshman orientation. Love going to museums together.",
  "goal": 7,
  "next_due_date": "2025-04-20"
}
```

| Field | Type | Description |
|---|---|---|
| `id` | number | Unique identifier |
| `name` | string | Full name |
| `picture` | string | Avatar image URL |
| `email` | string | Contact email |
| `days_since_contact` | number | Days since last interaction |
| `status` | string | `active` or `overdue` |
| `tags` | string[] | Relationship categories |
| `bio` | string | Personal note about the contact |
| `goal` | number | Target contact interval in days |
| `next_due_date` | string | Date of next scheduled check-in |

---

## 🗺️ Roadmap

- [ ] Add/Edit/Delete friends from the UI
- [ ] Log interactions with notes and timestamps
- [ ] Push notifications for overdue contacts
- [ ] Authentication (login/signup)
- [ ] Backend integration (Supabase or Firebase)
- [ ] Dark mode toggle
- [ ] Export contacts as CSV

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m "feat: add amazing feature"`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

Made with ❤️ by **Fahim**

[![GitHub](https://img.shields.io/badge/GitHub-corebyte56-181717?style=flat-square&logo=github)](https://github.com/corebyte56)