const path = require('path');
const replace = require('replace-in-file');
const execSync = require('child_process').execSync;
const version = require(path.resolve(__dirname, '../package.json')).version;

// Replace versions
const replaceFiles = ['src/utilities/index.ts', 'README.md'];
const versionRegexp = /[\d]+\.[\d]+\.[\d]+/g;
replaceFiles.forEach((filepath) => {
  try {
    const result = replace.sync({
      files: filepath,
      from: versionRegexp,
      to: version,
    });
    console.log('Replacement version result: ', result);
  } catch (error) {
    console.error('Replacement error: ', error);
  }
});
execSync(`git add ${replaceFiles.join(' ')}`);
