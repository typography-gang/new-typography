const { isNumeric } = require('../../../helpers');
const { HAS_AT } = require('../../../constants/regexes');

/**
 * Check the line for matching the specified pattern.
 * @param {string} ratio
 */
const ratioHasAt = ratio => {
  let result = null;

  try {
    if (HAS_AT.test(ratio)) {
      result = true;
    } else {
      result = false;
      throw new Error(
        `
        ${ratio} is incorrect value. The string must have a positive or negative integer, 
        or a floating-point number in units of px or em,a space, a word at, a space, 
        a positive or negative floating point number without units of measure.
        `,
      );
    }
  } catch (err) {
    console.warn(err.message);
  }
  return result;
};

/**
 * Validation ratio
 * @param {any} ratio
 * @return {boolean}
 */
const isValidRatio = ratio => {
  try {
    switch (typeof ratio) {
      case 'number':
        return isNumeric(ratio);
      case 'string':
        return ratioHasAt(ratio);
      default:
        throw new Error('Typeof ratio must be string or number');
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

/**
 * @param {array<any>} checkRatios
 * @return {boolean}
 */
const isValidRatios = checkRatios =>
  checkRatios.every(ratio => isValidRatio(ratio));

module.exports = {
  ratioHasAt,
  isValidRatio,
  isValidRatios,
};
