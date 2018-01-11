#!/usr/bin/env node
'use strict';

const forceDel = require('force-del');
const meow = require('meow');

const cli = meow(`
  Usage
    $ force-del <path|glob> [...]

  Examples
    $ force-del silly-faces.jpg
    $ force-del '*.jpg' '!too-cute.jpg'
`);

if (cli.input.length === 0) {
  console.error('Specify at least one path');
  process.exit(1);
}

forceDel(cli.input).then(files => {
  console.log(files.join('\n'));
});
