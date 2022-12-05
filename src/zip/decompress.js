import path from 'path';
import fs from 'fs';
import zlib from 'zlib';
import {getCurrDirPathByURL} from '../utils/files.js';

const decompress = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const srcDirName = 'files';
  const srcFilePath = path.join(currDirPath, srcDirName, 'archive.gz');
  const dstFilePath = path.join(currDirPath, srcDirName, 'fileToCompress.txt');
  const rs = fs.createReadStream(srcFilePath);
  const ws = fs.createWriteStream(dstFilePath);
  const gUnzip = zlib.createGunzip();

  rs.pipe(gUnzip).pipe(ws);
};

await decompress();
