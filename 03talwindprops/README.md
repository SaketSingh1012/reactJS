# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# To install tailwindcss
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```bash
npm run dev
```



# If css is not loaded, do the following configurations:
## Go to the ** tailwind.config.js ** and change the content script:
```bash
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ]
```

## Go to the index.css under src folder and add the following lines and remove all other css:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```