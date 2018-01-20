'use strict';

const { join } = require('path');
const { pathExists } = require('fs-extra');
const execa = require('execa');
const fixtures = require('fixturez');

const f = fixtures(__dirname);

const realCWD = process.cwd();
let tmpPath;

beforeEach(() => {
  tmpPath = f.copy('fixtures');
});

it('deletes files', async () => {
  expect.assertions(4);

  const folders = [
    join(tmpPath, 'foo'),
    join(tmpPath, 'bar'),
    join(tmpPath, 'nested'),
  ];

  await execa(join(realCWD, 'cli.js'), folders.concat(`--cwd=${tmpPath}`));

  folders.forEach(async x => {
    await expect(pathExists(x)).resolves.toBe(false);
  });

  // The parent isn't in the patterns,
  // So it shouldn't get deleted
  await expect(pathExists(tmpPath)).resolves.toBe(true);
});

it('logs deleted files', async () => {
  expect.assertions(1);

  const folders = [
    join(tmpPath, 'foo'),
    join(tmpPath, 'bar'),
    join(tmpPath, 'nested'),
  ];

  const res = await execa(
    join(realCWD, 'cli.js'),
    folders.concat(`--cwd=${tmpPath}`)
  );

  expect(res.stdout.search('Deleted')).not.toBe(-1);
});
