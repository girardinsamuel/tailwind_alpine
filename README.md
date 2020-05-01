# tailwind_alpine

Template to scaffold new projet with Tailwind CSS and Alpine.js quickly

## Build for production

```
npm run build
```

1. It will first run Tailwind CSS compilation with purge enabled.
2. It will then minify CSS with `cssnano`.
3. The final file to use in production is `index.min.css`.
