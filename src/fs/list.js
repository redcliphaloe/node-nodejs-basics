import path from 'path';
import fsp from 'fs/promises';
import {getCurrDirPathByURL} from '../utils/files.js';

const list = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const srcDirPath = path.join(currDirPath, 'files');
  const errorText = 'FS operation failed';

  try {
    const list = await fsp.readdir(srcDirPath, {withFileTypes: true});
    list.forEach(item => {
      if (item.isFile()) {
        console.log(item.name);
      }
    });
  } catch (error) {
    throw new Error(errorText);
  }
};

await list();
