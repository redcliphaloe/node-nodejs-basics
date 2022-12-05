import path from 'path';
import fsp from 'fs/promises';
import crypto from 'crypto';
import {getCurrDirPathByURL} from '../utils/files.js';

const calculateHash = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const srcFilePath = path.join(currDirPath, 'files', 'fileToCalculateHashFor.txt');
  const errorText = 'FS operation failed';

  try {
    const content = await fsp.readFile(srcFilePath, {encoding: 'utf-8'});
    const hash = crypto.createHash('sha256');
    hash.update(content);
    console.log(hash.digest('hex'));
  } catch (error) {
    throw new Error(errorText);
  }
};

await calculateHash();
