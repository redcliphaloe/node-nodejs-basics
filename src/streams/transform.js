import stream from 'stream';

const transform = async () => {
  const errorText = 'FS operation failed';
  const ts = new stream.Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${chunk.toString().split('').reverse().join('')}\n`);
    },
  });

  stream.pipeline(process.stdin, ts, process.stdout, () => {throw new Error(errorText)});
};

await transform();
