const parseEnv = () => {  
  const object = process.env;
  let tempString = '';

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (key.indexOf('RSS_') === 0) {
        tempString += `${key}=${object[key]}; `;
      }
    }
  }
  console.log(tempString.slice(0, -2));
};

parseEnv();
