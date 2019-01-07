# Evergreen Web Component Library

## Overview
A library of simple web components built on top of [LitElement](https://github.com/Polymer/lit-element)

### Project Goals
Making development easier and providing example components to people new to Web Components.

#### Under Development
This repo and Project Evergreen itself are still young and maturing rapidly.  The Project Evergreen GitHub organization [project tracker](https://github.com/ProjectEvergreen/project-evergreen/projects) captures the high level goals and next steps, with plans to keep adding those lessons learned as features and improvements to this repo.

> 🙏 Please feel free to contribute, we are always looking forward to meeting like minded developers to collaborate with!

### Package Guidelines

Packages should be organized as follows:

```
src/
  eve-yourcomponent.js
  eve-yourcomponent.css
package.json
README.md
```

The package.json should contain:

```json
  "name": "@evergreen-wc/eve-yourcomponent",
  "version": "0.0.4",
  "description": "Your component made with lit element",
  "main": "src/eve-yourcomponent.js",
  "license": "Apache-2.0",
  "publishConfig": {
    "access": "public"
  },
```

### Publishing Packages

Make sure you commit all changes then run:

```bash
npx lerna publish
```

Select patch

### Publishing Documentation

You need [setup a git worktree](https://gist.github.com/cobyism/4730490#gistcomment-2337463) for the gh-pages branch in a folder called dist

```
git worktree add dist gh-pages
```

Documentation components are in the docs folder. This folder is built with:

```bash
npm run gh-pages
```

then commit and push to gh-pages branch with:

```bash
cd dist
git add *
git commit -m "Updated documentation: updated button component usage" -S
git push origin gh-pages
```

### License

Released under the Apache-2.0 License
