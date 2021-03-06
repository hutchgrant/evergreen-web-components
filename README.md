# Evergreen Web Component Library
[![GitHub release](https://img.shields.io/github/tag/hutchgrant/evergreen-web-components.svg)](https://github.com/hutchgrant/evergreen-web-components/tags)
![CircleCI branch](https://img.shields.io/circleci/project/github/hutchgrant/evergreen-web-components/master.svg?style=plastic)
[![GitHub issues](https://img.shields.io/github/issues-raw/hutchgrant/evergreen-web-components.svg)](https://github.com/hutchgrant/evergreen-web-components/issues)
[![GitHub pulls](https://img.shields.io/github/issues-pr-raw/hutchgrant/evergreen-web-components.svg)](https://github.com/hutchgrant/evergreen-web-components/pulls)
[![GitHub license](https://img.shields.io/badge/license-apache-blue.svg)](https://raw.githubusercontent.com/hutchgrant/evergreen-web-components/master/LICENSE)

## Overview
A library of simple web components built on top of [Litr](https://github.com/lit/lit/)

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
