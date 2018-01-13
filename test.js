'use strict';

const { pathExists, remove, writeFileSync } = require('fs-extra');
const execa = require('execa');

it('deletes files', async () => {
  expect.assertions(2);
  writeFileSync('1.tmp');
  writeFileSync('99.tmp');

  await execa('./cli.js', ['*.tmp', '!99.tmp']);

  await expect(pathExists('1.tmp')).resolves.toBe(false);
  await expect(pathExists('99.tmp')).resolves.toBe(true);

  await remove('99.tmp');
});

it('logs deletes files', async () => {
  expect.assertions(1);
  const res = await execa('./cli.js', ['*.mp4']);

  expect(res.stdout).not.toBe(undefined);
});
