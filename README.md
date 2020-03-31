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
├── postcss.config.js
├── README.md
└── src
   ├── assets
   │  ├── app.js
   │  └── main.css
   ├── data
   │  └── example.json
   ├── static
   └── views
      ├── _includes
      │  └── example.html
      ├── _layouts
      │  └── base.html
      └── index.html

```

## Main Directories

### `src`

This contains all your main website files to be built: templates, pages, includes, assets, and data

### `src/assets`

the `app.js` and  `main.css` are the entry points for your styles and scripts. Files imported by these files will be bundled into the final output assets. `main.css` is processed with PostCSS, `app.js` is bundled with Parcel, you can use ES6 imports, arrow functions, all the goodness.

### `src/data`

any `json` file in this directory will be available in all your pages and templates as an object with the same name as its filename. so `example.json` with a key-value pair `"foo": "bar"` can be used anywhere on your site as `<p>the value of foo is: {{example.foo}}</p>`.

### `src/views`

Files inside of the views directory will be processed by eleventy. You can write in any of the template languages mentioned in the [Eleventy docs](https://www.11ty.dev/docs/languages/).

Files in `src/views/_layouts` can be used to wrap pages in a layout. This works the same way as jekyll or other static site generators. See the [Eleventy layout docs](https://www.11ty.io/docs/layouts/) for details.

Files in `src/views/_includes` can be included as partials on any page. See the [Eleventy template docs](https://www.11ty.io/docs/languages/) for how to do this per language.

### `_site`

the site will be built into `_site`, you can host this directory as a static site anywhere

### `static`

Files in the static folder

## Development

To start the development server, run `yarn start` or `npm start`. This will watch the project, recompiling the site and processing assets as things change.

## Deployment

Running `yarn build` or `npm run build` will build the site into `dist` which can be served from any static site host.
