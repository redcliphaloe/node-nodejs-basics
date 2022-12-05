import path from 'path';
import cp from 'child_process';
import {getCurrDirPathByURL} from '../utils/files.js';

const spawnChildProcess = async (args) => {
  const currDirPath = getCurrDirPathByURL(import.meta.url);
  const childProcFilePath = path.join(currDirPath, 'files', 'script.js');
  const childProc = cp.fork(childProcFilePath, args, {stdio: ['pipe', 'pipe', 'pipe', 'ipc']});

  childProc.stdout.on('data', chunk => process.stdout.write(`Child process answer: ${chunk.toString()}`));
  process.stdin.on('data', chunk => childProc.stdin.write(chunk.toString()));
};

spawnChildProcess([true, 2, 'three']);
