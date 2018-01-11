'use strict';

const { existsSync, removeSync, writeFileSync } = require('fs-extra');
const execa = require('execa');

beforeEach(() => {
  writeFileSync('1.tmp');
  writeFileSync('99.tmp');
});

afterEach(() => {
  removeSync('99.tmp');
});

it('deletes files', async () => {
  await execa('./cli.js', ['*.tmp', '!99.tmp']);

  expect(existsSync('1.tmp')).toBe(false);
  expect(existsSync('99.tmp')).toBe(true);
});
