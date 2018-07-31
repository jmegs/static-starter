# Static Starter

Project starter to spin up a static site when you don't need a js framework.

The scaffold includes:

#### The [Eleventy][1] static site generator

New, but it has a few things going for it including (1) the flexibility to choose from a ton of template languages and (2) it's written in JS, so there's no dependency on Ruby or Go.

- Compile Sass to CSS

- TODO: Simple js concatenation

- TODO: Images optimization with [imagemin]

- Live reloading and mobile mirroring with [browsersync]

## Installation

### The Easy Way

You can use my other project [tpl] to quickly start a new project with this scaffold

```sh
# install tpl
npm install -g @jmegs/tpl

# start your project
tpl jmegs/static-starter YOUR_PROJECT
```

### The Manual Way

1.  Clone the repo and clean up its git brain (remove my git repo and start a new blank one)

    ```sh
     git clone --depth 1 https://github.com/jmegs/static-starter.git YOUR_PROJECT
     cd YOUR_PROJECT
     rm -rf .git && git init
    ```

## Getting Started

1.  Install dependencies. Bask in stillness while it loads. Breathe deeply.

    ```sh
    yarn
    # or npm install
    ```

2.  Start the development server. All changes will be processed and your site will automatically reload on http://localhost:3000

    ```sh
    yarn start
    # or npm start
    ```

3.  When you're done, build the project into dist/ and deploy it somewhere awesome.

    ```sh
    yarn build
    # or npm run build
    ```

## Structure

```
.
├── README.md
├── gulpfile.babel.js
├── netlify.toml
├── package.json
├── src
│   ├── fonts
│   ├── img
│   ├── scripts
│   │   └── main.js
│   ├── styles
│   │   └── main.css
│   └── views
│       ├── _includes
│       │   └── base.html
│       └── index.html
└── yarn.lock
```

- Built output lives in `dist`, ready to deploy to wherever you host your static files. I suggest [netlify] or Zeit's [now].
- Views and content live in `src/views` where they will be compiled by the static site generator.
- CSS, JS, images, and fonts live in their own folders in `src/` where they will be processed by gulp and placed lovingly into `dist`.

[1]: https://www.11ty.io/
[tpl]: https://github.com/jmegs/tpl
[postcss-preset-env]: https://github.com/csstools/postcss-preset-env
[imagemin]: https://github.com/sindresorhus/gulp-imagemin
[browsersync]: https://browsersync.io/docs
[netlify]: https://www.netlify.com/
[now]: https://zeit.co/now
