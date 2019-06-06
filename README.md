# Static Starter

This is a simple boilerplate for static sites. It tries to replicate the directory structure of generators like middleman and jekyll and layer on more recent modern perks like postcss processing, global data, and support for multiple template languages at the same time.

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

Once the files are cloned over, install dependencies with `yarn` or `npm i`

# Directory Structure

The static starter default comes with a structure that looks like this.

```
.
├── README.md
├── gulpfile.js
├── package.json
├── source
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   │       └── app.js
│   ├── data
│   │   └── example.json
│   ├── includes
│   │   └── example.html
│   ├── index.html
│   └── layouts
│       └── base.html
└── yarn.lock
```

## Main Directories

### `source`

This contains all your main website files to be built: templates, pages, includes, assets, and data

### `source/assets`

the `js`, `css`, `fonts`, and `images` directories in assets are processed by gulp and placed in `assets` in the built output

### `source/data`

any `json` file in this directory will be available in all your pages and templates as an object with the same name as its filename. so `example.json` with a key-value pair `"foo": "bar"` can be used anywhere on your site as `<p>the value of foo is: {{example.foo}}</p>`.

### `dist`

the site will be built into `dist`, you can host this directory as a static site anywhere

## Development

To start the development server, run `yarn start` or `npm start`. This will watch the `source` directory, recompiling the site and processing assets as things change.

### Building Pages

any file not insite of `assets`, `data`, `layouts`, or `includes` will be processed by `eleventy` as templates. You can use a wide variety of template languages and it will understand them all. See the [eleventy template docs](https://www.11ty.io/docs/languages/) for the full list.

### Using Layouts and Partials

Files in `source/layouts` can be used to wrap pages in a layout. This works the same way as jekyll or other static site generators. See the [eleventy layout docs](https://www.11ty.io/docs/layouts/) for details.

Files in `source/includes` can be included as partials on any page. See the [eleventy template docs](https://www.11ty.io/docs/languages/) for how to do this per language.

### Building Assets

css files in `assets/css` are processed by `postcss`. You can use anything from [this list](https://preset-env.cssdb.org/features) in your css files.

javascript, images, and fonts are copied over as-is. in the future there will be an option to process javascript with webpack and images with imagemin.

## Deployment

Running `yarn build` or `npm run build` will build the site into `dist` which can be served from any static site host.
