# force-del-cli

[![Package Version](https://img.shields.io/npm/v/force-del-cli.svg)](https://www.npmjs.com/package/force-del-cli)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/force-del-cli/master.svg)](https://travis-ci.org/luftywiranda13/force-del-cli)
[![Downloads Status](https://img.shields.io/npm/dm/force-del-cli.svg)](https://npm-stat.com/charts.html?package=force-del-cli&from=2016-04-01)

Force delete files or folders using glob patterns.

Remember that if `git` doesnʼt manage those files, `force-del` will delete them permanently (not to the trash).

## How does it work?

* First, `force-del` filters the files that should be deleted by using [globby](https://github.com/sindresorhus/globby).
* Maps those files to be included in `git rm -f` command one by one.
* If `git rm -f` fails, it means that `git` doesnʼt recognize the file. So `force-del` fallbacks to use [del](https://github.com/sindresorhus/del) to perform deletion.
* The processes above run concurrently.

## Installation

```sh
npm install --global force-del-cli
```

## Usage

```sh
$ force-del --help

  Force delete files or folders using glob patterns

  Usage
    $ force-del <path|glob> [...]

  Examples
    $ force-del silly-faces.jpg
    $ force-del '*.jpg' '!too-cute.jpg'
```

## Related

* [force-del](https://github.com/luftywiranda13/force-del) – API for this module
* [remove-lockfiles](https://github.com/luftywiranda13/remove-lockfiles) - Prevent committing lockfiles

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
