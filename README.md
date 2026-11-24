# Circle Area Calculator

A small React + Vite project that accepts a circle's radius, calculates its area, and passes the calculated value to a separate `Result` component through props.

## Features

- Controlled radius input using React `useState`
- Calculates area using `Math.PI * radius ** 2`
- Passes `area` and `radius` to the `Result` component as props
- Handles empty, invalid, and negative input
- Responsive UI

## Run locally

Make sure Node.js and npm are installed.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

## How props are used

In `App.jsx`:

```jsx
<Result area={area} radius={radius} />
```

In `Result.jsx`:

```jsx
export default function Result({ area, radius }) {
  // Display the values received through props
}
```

## Push to GitHub

Create an empty repository on GitHub, then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Build circle area calculator with React props"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own GitHub repository URL.
