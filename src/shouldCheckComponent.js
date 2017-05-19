export default (optionValue = [], componentType) => {
  /* eslint no-nested-ternary: 0 */
  const components = Array.isArray(optionValue) ? optionValue :
    (optionValue && typeof optionValue === 'object')
      ? optionValue.components || [] : [];

  const blacklist = (optionValue || {}).blacklist || false;

  // Only check specified elements
  return !blacklist
    ? (components.indexOf(componentType) >= 0)
    : (components.indexOf(componentType) < 0);
};
