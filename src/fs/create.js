import path from 'path';
import fsp from 'fs/promises';
import {getCurrentDirNameByURL} from '../utils/files.js';

const create = async () => {
  const dirName = getCurrentDirNameByURL(import.meta.url);
  const subDirName = 'files';
  const fileName = 'fresh.txt';
  const filePath = path.join(dirName, subDirName, fileName);
  const fileText = 'I am fresh and young';
  const errorText = 'FS operation failed';

  try {
    await fsp.writeFile(filePath, fileText, {flag: 'wx'});
  } catch (error) {
    throw new Error(errorText);
  }
};

await create();
