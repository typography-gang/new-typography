import isArray from '../isArray/isArray';

const findAll = (obj, key, memo) => {
  let result = memo;
  if (!isArray(memo)) result = [];

  for (let i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      if (i === key) {
        result.push(obj[i]);
      } else if (isArray(obj[i]) || isObject(obj[i])) {
        deepFind(obj[i], key, result);
      }
    }
  }

  return result;
};

export default findAll;