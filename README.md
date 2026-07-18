# Zustand Demo

A minimal counter app demonstrating global state management with [Zustand](https://github.com/pmndrs/zustand) in a React + TypeScript + Vite project, styled with Tailwind CSS v4.

## Features

- Vite for fast dev/build tooling
- React 19
- Zustand for simple, hook-based global state
- Tailwind CSS v4 for styling
- Fully typed with TypeScript

## Tech Stack

| Tool | Version |
|------|---------|
| React | ^19.2.7 |
| Zustand | ^5.0.14 |
| Tailwind CSS | ^4.3.3 |
| Vite | ^8.1.1 |
| TypeScript | ~6.0.2 |

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/The-Saadhere/zustand_demo.git
cd zustand_demo
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   └── Counter.tsx      # Counter UI component
├── store/
│   └── counterStore.ts  # Zustand store definition
├── App.tsx
└── main.tsx
```

## How it Works

The counter state (`count`) and its actions (`increase`, `decrease`, `reset`) live in a Zustand store (`src/store/counterStore.ts`). Any component can subscribe to this store via the `useCounterStore` hook without prop drilling or context providers.

```ts
const { count, increase, decrease, reset } = useCounterStore();
```

## License

This project is for learning/demo purposes.