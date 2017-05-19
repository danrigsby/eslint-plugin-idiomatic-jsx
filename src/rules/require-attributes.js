import { getProp, getPropValue, elementType } from 'jsx-ast-utils';

export default {
  create: (context) => ({
    JSXOpeningElement: (node) => {
      const nodeType = elementType(node);
      const options = context.options[0] || {};

      Object.keys(options).forEach((attribute) => {
        const components = options[attribute] || [];

        // Only check specified elements
        if (components.indexOf(nodeType) >= 0) {
          const prop = getProp(node.attributes, attribute);
          const propValue = getPropValue(prop);

          // If prop doesnt exist or has no value, then report error
          if (!prop || propValue.value === null || propValue.value === undefined) {
            context.report({
              node,
              message: `<${nodeType}> components must have a valid "${attribute}" property.`
            });
          }
        }
      });
    }
  })
};
