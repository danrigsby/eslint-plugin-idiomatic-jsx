/* eslint global-require: 0 */
module.exports = {
  rules: {
    'require-attributes': require('./rules/require-attributes'),
    'prevent-attributes': require('./rules/prevent-attributes'),
    'prevent-components': require('./rules/prevent-components')
  }
};
