const parseArgs = () => {
  let tempString = '';

  process.argv.forEach((v, i) => {
    if (i >= 2) {
      if (v.indexOf('--') === 0) {
        tempString += `${v.slice(2)} is `;
      } else {
        tempString += `${v}, `;
      }
    }
  });
  console.log(tempString.slice(0, -2));
};

parseArgs();
