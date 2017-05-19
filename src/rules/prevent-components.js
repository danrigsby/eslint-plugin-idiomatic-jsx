import { elementType } from 'jsx-ast-utils';

export default {
  create: (context) => ({
    JSXOpeningElement: (node) => {
      const components = context.options[0] || [];
      const nodeType = elementType(node);

      // Only check specified components
      if (components.indexOf(nodeType) === -1) {
        return;
      }

      context.report({
        node,
        message: `<${nodeType}> components are not allowed.`
      });
    }
  })
};
