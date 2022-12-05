import path from 'path';
import os from 'os';
import wt from 'worker_threads';
import {getCurrDirPathByURL} from '../utils/files.js';

const performCalculations = async () => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const workerFilePath = path.join(currDirPath, 'worker.js');
  const inc = 10;
  const tempArray = await Promise.allSettled(os.cpus().map((v, i) => {
    return new Promise((resolve, reject) => {
      const worker = new wt.Worker(workerFilePath, {workerData: i + inc});
      worker.on('message', resolve);
      worker.on('error', reject);
    });
  }));
  const resultArray = tempArray.map(v => {
    return Object.assign({}, {
      status: v.status === 'fulfilled' ? 'resolved' : 'error',
      data: v.status === 'fulfilled' ? v.value : null});
  });

  console.log(resultArray);
};

await performCalculations();
