module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(item => item.join(''));

  while (bracketsConfig.length) {
    let count = 0;

    bracketsConfig.forEach(item => {
      if (str.indexOf(item) != -1) {
        str = str.replace(item, '');
      } else {
        count += 1;
      }
    });

    if (count === bracketsConfig.length) {
      bracketsConfig.length = 0;
    }
  }

  if(str.length === 0) return true;
  else return false;
}
