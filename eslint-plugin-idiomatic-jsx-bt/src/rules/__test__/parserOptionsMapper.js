const defaultParserOptions = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true,
  },
};

module.exports = function parserOptionsMapper({
  code,
  errors,
  options,
  parserOptions = {},
}) {
  return {
    code,
    errors,
    options,
    parserOptions: {
      ...defaultParserOptions,
      ...parserOptions,
    },
  };
};
