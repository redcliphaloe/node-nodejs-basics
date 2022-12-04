import path from 'path';
import fsp from 'fs/promises';
import {getCurrDirPathByURL} from '../utils/files.js';

const create = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const newFilePath = path.join(currDirPath, 'files', 'fresh.txt');
  const newFileText = 'I am fresh and young';
  const errorText = 'FS operation failed';

  try {
    await fsp.writeFile(newFilePath, newFileText, {flag: 'wx'});
  } catch (error) {
    throw new Error(errorText);
  }
};

await create();
