import path from 'path';
import fs from 'fs';
import zlib from 'zlib';
import {getCurrDirPathByURL} from '../utils/files.js';

const compress = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const srcDirName = 'files';
  const srcFilePath = path.join(currDirPath, srcDirName, 'fileToCompress.txt');
  const dstFilePath = path.join(currDirPath, srcDirName, 'archive.gz');
  const rs = fs.createReadStream(srcFilePath);
  const ws = fs.createWriteStream(dstFilePath);
  const gZip = zlib.createGzip();

  rs.pipe(gZip).pipe(ws);
};

await compress();
