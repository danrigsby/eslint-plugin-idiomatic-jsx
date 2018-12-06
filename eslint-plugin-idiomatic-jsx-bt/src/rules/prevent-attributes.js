import { getProp, elementType } from 'jsx-ast-utils';
import shouldCheckComponent from '../shouldCheckComponent';

module.exports = {
  create: (context) => ({
    JSXOpeningElement: (node) => {
      const nodeType = elementType(node);
      const options = context.options[0] || {};
      const messageBuilder = context.options[1]
        || ((n, a) => `<${n}> components must not have a "${a}" attribute.`);

      Object.keys(options).forEach((attribute) => {
        if (shouldCheckComponent(options[attribute], nodeType)) {
          // if prop exists, report error
          if (getProp(node.attributes, attribute)) {
            context.report({
              node,
              message: messageBuilder(nodeType, attribute)
            });
          }
        }
      });
    }
  })
};
