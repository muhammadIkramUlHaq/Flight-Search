# ✈️ Flight Search App

A simple and fast flight search frontend built with **React**, **Vite**, **TypeScript**, and **MUI**. Supports filtering, routing, and lazy-loaded pages for optimized performance.

## 🚀 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI (MUI)](https://mui.com/)
- [pnpm](https://pnpm.io/) — Package Manager

## ⚙️ Prerequisites

- **Node.js v22+**
- **pnpm v9.9+**

Check versions:

```bash
node -v
pnpm -v
```

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
pnpm install
```

## 🧪 Development

Start the local dev server:

```bash
pnpm dev
```

Open your browser at: http://localhost:5173

## 🛠️ Build for Production

Generate a production build:

```bash
pnpm build
```

The output will be in the dist/ folder.

## Preview Production Build

To preview the app as it would run in production:

```bash
pnpm preview   # Preview the production build
```

This will start a local server (usually on port 4173):

👉 Visit http://localhost:4173

## 🗂 Project Structure

```bash
src/
│
├── assets/         # Static assets like images
├── components/     # Reusable UI components
├── pages/          # Route-level views/pages
├── data/           # Mock data
├── types/          # TypeScript types / models
├── utils/          # Utility functions
├── styles/         # Theme or styled-components
│   ├── theme.ts    # Theme config (MUI, styled-components, etc.)
│   └── palettes.ts # Color palette
├── App.tsx         # Main app component
└── main.tsx        # Entry point
```
