#!/usr/bin/env node
'use strict';

const forceDel = require('force-del');
const meow = require('meow');
const plur = require('plur');
const updateNotifier = require('update-notifier');

const cli = meow(
  `
  Usage
    $ force-del [<path|glob> ...]

  Options
    --cwd=<dir>  Current working directory
    --verbose    List deleted files

  Examples
    $ force-del silly-faces.jpg
    $ force-del '*.jpg' '!too-cute.jpg'
    $ force-del foo --cwd=../bar
`,
  {
    flags: {
      cwd: {
        type: 'string',
      },
      verbose: {
        type: 'boolean',
      },
    },
  }
);

updateNotifier({ pkg: cli.pkg }).notify();

if (cli.input.length === 0) {
  console.error('Specify at least one path');
  process.exit(1);
}

forceDel(cli.input, cli.flags).then(files => {
  if (cli.flags.verbose) {
    console.log(files.join('\n'));
  }

  if (files.length === 0) {
    console.log('No items deleted');
  }

  if (files.length > 0) {
    console.log(`Deleted ${files.length} ${plur('item', files.length)}`);
  }
});
