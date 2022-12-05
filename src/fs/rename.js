import path from 'path';
import fs, {promises as fsp} from 'fs';
import {getCurrDirPathByURL} from '../utils/files.js';

const rename = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const srcDirName = 'files';
  const oldFilePath = path.join(currDirPath, srcDirName, 'wrongFilename.txt');
  const newFilePath = path.join(currDirPath, srcDirName, 'properFilename.md');
  const errorText = 'FS operation failed';

  fs.access(newFilePath, async (err) => {
    if (err) {
      try {
        await fsp.rename(oldFilePath, newFilePath);
      } catch (error) {
        throw new Error(errorText);
      }
    } else {
      throw new Error(errorText);
    }
  });
};

await rename();
