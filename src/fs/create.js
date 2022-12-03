import path from 'path';
import fsp from 'fs/promises';
import {getCurrDirPathByURL} from '../utils/files.js';

const create = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const subDirName = 'files';
  const fileName = 'fresh.txt';
  const filePath = path.join(currDirPath, subDirName, fileName);
  const fileText = 'I am fresh and young';
  const errorText = 'FS operation failed';

  try {
    await fsp.writeFile(filePath, fileText, {flag: 'wx'});
  } catch (error) {
    throw new Error(errorText);
  }
};

await create();
