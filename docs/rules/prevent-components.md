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
