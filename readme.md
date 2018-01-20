# force-del-cli

> Force delete files or folders using [globs](https://github.com/isaacs/minimatch#usage)

[![Package Version](https://img.shields.io/npm/v/force-del-cli.svg?style=flat-square)](https://www.npmjs.com/package/force-del-cli)
[![Downloads Status](https://img.shields.io/npm/dm/force-del-cli.svg?style=flat-square)](https://npm-stat.com/charts.html?package=force-del-cli&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/force-del-cli/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/force-del-cli)

If the matching files or folders are managed by `git`, theyʼll be deleted and marked as `deleted` in staging area. Otherwise, theyʼll be deleted permanently (not to the trash).

## How does it work?

* Filters the files that should be deleted by using [globby](https://github.com/sindresorhus/globby)
* Maps the matching paths _one-by-one_ to be included in `git rm -rf` command
* Uses [rimraf](https://github.com/isaacs/rimraf) if the matching item isnʼt managed by `git`
* These processes run concurrently

## Installation

```sh
npm install --global force-del-cli
```

## Usage

```
$ force-del --help

  Usage
    $ force-del [<path|glob> ...]

  Options
    --cwd=<dir>  Current working directory
    --verbose    List deleted files

  Examples
    $ force-del silly-faces.jpg
    $ force-del '*.jpg' '!too-cute.jpg'
    $ force-del foo --cwd=../bar
```

## Related

* [force-del](https://github.com/luftywiranda13/force-del) – API for this module
* [remove-lockfiles](https://github.com/luftywiranda13/remove-lockfiles) - Prevent committing lockfiles

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
