# Boilerplate and Starter for Next JS 11+, Tailwind CSS 2.0 and TypeScript [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40jrkennemer)](https://twitter.com/jrkennemer)


🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, Vercel, PostCSS, Tailwind CSS.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. 

### Features

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) React Framework
- 🎨 Integrated with [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode)
- 💅 PostCSS for processing Tailwind CSS and integrated w/`styled-jsx`
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Minimalist theme included
- 💯 Maximized lighthouse score

Built-in features from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and yarn

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ValescoAgency/nextjs-va-boilerplate.git my-project-name
cd my-project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

Open http://localhost:3000 with your browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `@styles/main.css`: your CSS file using Tailwind CSS
- `@utils/AppConfig.ts`: configuration file
- `@layouts/Main.tsx`: default theme

### Deploy to production

You can see the results locally in production mode with:

```
$ yarn build
$ yarn start
```

The generated HTML and CSS files are minified (built-in feature from Next.js). It will also remove unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
yarn build-prod
```

Now, your project is ready to be deployed. 
### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FValescoAgency%2Fnextjs-va-boilerplate)

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ValescoAgency/nextjs-va-boilerplate)
### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2021

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [ValescoAgency](https://valesco.agency) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40jrkennemer)](https://twitter.com/jrkennemer)

[![Sponsor Next.js Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/jrkennemer)
