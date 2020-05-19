# Static Starter

This is a simple boilerplate for static sites. It tries to maintain a similar directory structure to generators like middleman, roots and jekyll while layering on more recent modern perks like asset bundling, global data, and support for multiple template languages at the same time.

# Start a new site

## The Easy Way

The easiest way to get started is to copy this repo using `degit`. If the second argument is omitted, the project will be setup in your current directory.

```sh
npx degit jmegs/static-starter YOUR_PROJECT
```

## The Manual Way

You an also clone this project and re-initialize git

```sh
git clone --depth 1 git@github.com:jmegs/static-starter YOUR_PROJECT
cd YOUR_PROJECT
rm -rf .git
git init
```

## Install Dependencies

Once the files are cloned over, install dependencies with `yarn` or `npm install`

# Directory Structure

The static starter default comes with a structure that looks like this.

```
.
├── eleventy.config.js
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── assets
│   │   ├── app.js
│   │   └── styles
│   │       └── main.scss
│   ├── data
│   │   ├── example.json
│   │   └── site.json
│   ├── includes
│   │   ├── components
│   │   │   └── hello.js
│   │   ├── example.njk
│   │   └── layouts
│   │       └── base.njk
│   ├── pages
│   │   └── index.njk
│   ├── public
│   └── utils
│       └── filters
│           ├── dump.js
│           └── friendlyDate.js
└── webpack.config.js

```

## Main Directories

### `src`

This contains all your main website files to be built: templates, pages, includes, assets, and data

### `src/assets`

`app.js` is the entry points for your styles and scripts. Files imported by `app.js` files will be bundled into the final output assets. You need to import your scss here for styles to be processed.

### `src/data`

any `json` file in this directory will be available in all your pages and templates as an object with the same name as its filename. so `example.json` with a key-value pair `"foo": "bar"` can be used anywhere on your site as `<p>the value of foo is: {{example.foo}}</p>`.

### `src/pages`

Files inside of the pages directory will be processed by eleventy. These are preferably written in Nunjucjs, but you can write in any of the template languages mentioned in the [Eleventy docs](https://www.11ty.dev/docs/languages/).

### `src/includes
Files in `src/includes` can are partials. There is a special directory called `layouts` that contains page layouts. This works the same way as jekyll or other static site generators. See the [Eleventy layout docs](https://www.11ty.io/docs/layouts/) for details. The other special directory is `components`, any js file here will be added as a Nunjucks [shortcode](https://www.11ty.io/docs/layouts/)

### `_site`

the site will be built into `_site`, you can host this directory as a static site anywhere

### `public`

Files in the public folder will be "dumped" into the root of the built site. This is good for images, fonts, favicons, etc.

## Development

To start the development server, run `yarn start` or `npm start`. This will watch the project, recompiling the site and processing assets as things change.

## Deployment

Running `yarn build` or `npm run build` will build the site into `dist` which can be served from any static site host.
