import path from 'path';
import fsp from 'fs/promises';
import {getCurrDirPathByURL} from '../utils/files.js';

const copy = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const srcDirPath = path.join(currDirPath, 'files');
  const dstDirPath = path.join(currDirPath, 'files_copy');
  const errorText = 'FS operation failed';

  try {
    await fsp.cp(srcDirPath, dstDirPath, {errorOnExist: true, force: false, recursive: true});
  } catch (error) {
    throw new Error(errorText);
  }
};

copy();
