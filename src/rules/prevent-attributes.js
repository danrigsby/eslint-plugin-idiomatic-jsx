import { getProp, elementType } from 'jsx-ast-utils';
import shouldCheckComponent from '../shouldCheckComponent';

export default {
  create: (context) => ({
    JSXOpeningElement: (node) => {
      const nodeType = elementType(node);
      const options = context.options[0] || {};

      Object.keys(options).forEach((attribute) => {
        if (shouldCheckComponent(options[attribute], nodeType)) {
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
