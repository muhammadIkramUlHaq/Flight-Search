# ✈️ Flight Search App

A simple and fast flight search frontend built with **React**, **Vite**, **TypeScript**, and **MUI**. Supports filtering, routing, and lazy-loaded pages for optimized performance.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI (MUI)](https://mui.com/)
- [pnpm](https://pnpm.io/) — Package Manager

## Prerequisites

- **Node.js v22+**
- **pnpm v10+**

Check versions:

```bash
node -v
pnpm -v
```

## Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/muhammadIkramUlHaq/Flight-Search.git
cd Flight-Search
pnpm install
```

## Development

Start the local dev server:

```bash
pnpm dev
```

Open your browser at: http://localhost:5173

## Build for Production

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

## Project Structure

```bash
src/
│
├── assets/         # Static assets like images
├── components/     # Reusable UI components
├── data/           # Mock data
├── pages/          # Route-level views/pages
├── styles/         # Theme or global styled-components
|── theme/          # Theme config (MUI, styled-components, etc.)
├── types/          # TypeScript types / models
├── utils/          # Utility functions
├── App.tsx         # Main app component
└── main.tsx        # Entry point
```

## Running Tests

This project uses **Jest** with **TypeScript** and **React Testing Library**.

### Run tests

```bash
pnpm run test
```

## 🔍 Search Query Examples

The results page accepts **3-letter IATA airport codes** as query parameters for both origin and destination.

✅ **Valid Example**

```bash
http://localhost:5173/results?origin=JFK&destination=LAX
```

- Lowercase is allowed (e.g., origin=jfk) — the app automatically normalizes codes to uppercase internally.

- The code must exist in the dataset to be considered valid.

❌ **Invalid Examples**

The app will show an error screen if:

- The origin or destination is missing or not exactly 3 letters

- The code is valid format-wise but not found in the data

```bash
http://localhost:5173/results?origin=abc&destination=xyz
```

