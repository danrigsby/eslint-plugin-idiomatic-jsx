import { getProp, getPropValue, elementType } from 'jsx-ast-utils';
import shouldCheckComponent from '../shouldCheckComponent';

export default {
  create: (context) => ({
    JSXOpeningElement: (node) => {
      const nodeType = elementType(node);
      const options = context.options[0] || {};
      const messageBuilder = context.options[1] ||
        ((n, a) => `<${n}> components must have a valid "${a}" attribute.`);

      Object.keys(options).forEach((attribute) => {
        if (shouldCheckComponent(options[attribute], nodeType)) {
          const prop = getProp(node.attributes, attribute);
          const propValue = getPropValue(prop);

          // If prop doesnt exist or has no value, then report error
          if (!prop || !propValue) {
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
