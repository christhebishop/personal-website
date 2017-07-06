# Personal Website

My personal website, christhebishop.com, built to display my work and experience.

Built using the following:

* HTML
* pugjs for HTML templating
* CSS/SCSS
* jQuery
* npm scripts to compile my SCSS, render pug templates, spin up local dev server with Browsersync, and minify production assets
Git

## Installation
Requirements:
* Node.js
* npm

Clone the repo to your local machine:
```
$ git clone https://github.com/christhebishop/personal-website
```

Install Dependencies:
```
$ npm install
```

## Usage

To compile SCSS, render pug templates, and spin up Browsersync, run the following:
```
$ npm run dev
```

To build, concatenate and minify JS, run:
```
$ npm run uglify
```
