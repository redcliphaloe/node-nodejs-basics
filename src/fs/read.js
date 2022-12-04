import path from 'path';
import fsp from 'fs/promises';
import {getCurrDirPathByURL} from '../utils/files.js';

const read = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const srcFilePath = path.join(currDirPath, 'files', 'fileToRead.txt');
  const errorText = 'FS operation failed';

  try {
    const content = await fsp.readFile(srcFilePath, {encoding: 'utf-8'});
    console.log(content);
  } catch (error) {
    throw new Error(errorText);
  }
};

await read();
