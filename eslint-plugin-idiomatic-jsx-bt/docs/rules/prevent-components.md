# prevent-components

Prevent specified `components` from being used. This is useful for things such as:
- You have a custom version of a component and want to prevent the built in implementation (such as a custom `Input` or `Button` component)
- You want to deprecate components in a library

## Usage

This rule takes one array argument of type object that defines the list of components to prevent.

```
{
  "rules": {
    "idiomatic-jsx/prevent-components": [ 2, [ 'input', 'button' ]
  }
}
```

### Succeed
```jsx
<Input></Input>           <!-- Good: component is not prevented -->
<Button></Button>         <!-- Good: component is not prevented -->
```

### Fail

```jsx
<input></input>           <!-- Bad: component is prevented -->
<button></button>         <!-- Bad: component is prevented -->
```

You may also pass in a 3rd option to change the default message that is output on error.  This can be handy if you want to explain "why" this rule is being used in your project or organization.  This option is a `function` that takes in the `nodeType` and returns a `string`.

```
{
  "rules": {
    "idiomatic-jsx/require-attributes": [ 2, [ "Foo", "Bar" ],
      (nodeType, attribute) => `<${nodeType}> components are not allowed.  Use our custom component instead.`
    }]
  }
}
```
