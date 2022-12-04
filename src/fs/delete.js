import path from 'path';
import fsp from 'fs/promises';
import {getCurrDirPathByURL} from '../utils/files.js';

const remove = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const targetFilePath = path.join(currDirPath, 'files', 'fileToRemove.txt');
  const errorText = 'FS operation failed';
  
  try {
    await fsp.rm(targetFilePath);
  } catch (error) {
    throw new Error(errorText);
  }
};

await remove();
