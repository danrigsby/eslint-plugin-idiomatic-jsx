import { getProp, elementType } from 'jsx-ast-utils';

export default {
  create: (context) => ({
    JSXOpeningElement: (node) => {
      const nodeType = elementType(node);
      const options = context.options[0] || {};

      Object.keys(options).forEach((attribute) => {
        const components = options[attribute] || [];

        // Only check specified elements
        if (components.indexOf(nodeType) >= 0) {
          // if prop exists, report error
          if (getProp(node.attributes, attribute)) {
            context.report({
              node,
              message: `<${nodeType}> components must not have a "${attribute}" property.`
            });
          }
        }
      });
    }
  })
};
