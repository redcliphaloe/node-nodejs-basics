import path from 'path';
import fs from 'fs';
import {getCurrDirPathByURL} from '../utils/files.js';

const write = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const dstFilePath = path.join(currDirPath, 'files', 'fileToWrite.txt');
  const ws = fs.createWriteStream(dstFilePath);

  process.stdin.on('data', (chunk) => ws.write(chunk));
};

await write();
