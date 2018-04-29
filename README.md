# Static Starter

Project starter when spinning up a static site wihout a js framework

The scaffold includes:

* [Eleventy][1] static site generator – a new, template language agnostic generator built with javascript
* a Gulp-based asset pipeline:
  * postcss with [cssnext] and [imports]
  * simple js concatenation
  * processing images with [imagemin]
* live reloading and mobile mirroring with [browsersync]

## Instructions

1.  Clone the repo

    `git clone <REPO URL> <YOUR PROJECT DIRECTORY>`

2.  Install dependencies

    `npm install`

3.  Start the development server and look at your site on http://localhost:3000

    `npm start`

4.  To build the project

    `npm run build`

## Structure

```
.
├── README.md
├── _dist
├── assets
│   ├── css
│   ├── fonts
│   ├── img
│   └── js
├── gulpfile.js
├── netlify.toml
├── package-lock.json
├── package.json
└── site
    ├── _data
    ├── _includes
    ├── index.pug
    └── page-2.pug
```

* Built output lives in `_dist`, ready to deploy to wherever you host your static files. I suggest [netlify] or Zeit's [now].
* Views and any json data files live in `site/` where they will be compiled by the static site generator.
* CSS, JS, images, and fonts live in `assets/` where they will be processed by gulp and placed lovingly into the root of `_dist`.

[1]: https://github.com/11ty/eleventy#configuration-optional
[cssnext]: http://cssnext.io/
[imports]: https://github.com/postcss/postcss-import
[imagemin]: https://github.com/sindresorhus/gulp-imagemin
[browsersync]: https://browsersync.io/docs
[netlify]: https://www.netlify.com/
[now]: https://zeit.co/now
