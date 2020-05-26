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

## Main Directories

### `src`

This contains all your main website files to be built: templates, pages, includes, assets, and data

### `src/assets`

* Write your SCSS in `styles/main.scss` - its is processed with sass and postcss, then output to `dist/assets/css/main.css`
* Write javascript in `scripts/app.js` – it is bundled with webpack so you can use all the new hotness, then output to `dist/assets/js/app.js
* `/fonts` and `/images` are copied through to the build output under `dist/assets/<DIR>`

### `src/data`

any `json` file in this directory will be available in all your pages and templates as an object with the same name as its filename. so `example.json` with a key-value pair `"foo": "bar"` can be used anywhere on your site like this: 

```html
<p>the value of foo is: {{example.foo}}</p>
```

### `src/pages`

Files inside of the pages directory will be processed by eleventy. These are preferably written in Nunjucjs, but you can write in any of the template languages mentioned in the [Eleventy docs](https://www.11ty.dev/docs/languages/).

### `src/includes`

Files in `src/includes` can are partials. This works the same way as jekyll or other static site generators.

### `src/layouts`

Holds layouts. See the [Eleventy layout docs](https://www.11ty.io/docs/layouts/) for details.

### `dist`

the site will be built into `_site`, you can host this directory as a static site anywhere

### `public`

Files in the public folder will be "dumped" into the root of the built site. This is good for favicons, robots.txt, etc.

## Development

To start the development server, run `yarn start` or `npm start`. This will watch the project, recompiling the site and processing assets as things change.

## Deployment

Running `yarn build` or `npm run build` will build the site into `dist` which can be served from any static site host.
