const { BROWSER_DEFAULT_FONT_SIZE } = require('../../constants');

/**
 * @param {string} inPx
 * @return {number}
 */
const toEm = inPx => (
  parseFloat(inPx) / BROWSER_DEFAULT_FONT_SIZE
);

module.exports = toEm;
