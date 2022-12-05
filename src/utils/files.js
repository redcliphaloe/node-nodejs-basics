import url from 'url';
import path from 'path';

const getCurrDirPathByURL = (URLString) => {
  try {
    const fullPath = url.fileURLToPath(URLString);
    const dirName = path.dirname(fullPath);

    return dirName;
  } catch (error) {
    throw new Error('Invalid URL');
  }
};

export {getCurrDirPathByURL};
