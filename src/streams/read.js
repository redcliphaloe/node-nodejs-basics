import path from 'path';
import fs from 'fs';
import {getCurrDirPathByURL} from '../utils/files.js';

const read = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const srcFilePath = path.join(currDirPath, 'files', 'fileToRead.txt');
  const errorText = 'FS operation failed';
  let content = '';
  const rs = fs.createReadStream(srcFilePath, {encoding: 'utf-8'});

  rs.on('data', chunk => content += chunk);
  rs.on('end', () => process.stdout.write(`${content}\n`));
  rs.on('error', () => {throw new Error(errorText)});
};

await read();
