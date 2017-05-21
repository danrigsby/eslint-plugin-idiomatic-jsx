# prevent-attributes

Prevent specified `attributes` on specified `components` from being used. This is useful for things such as:
- Preventing the use of `onClick` on `div` tags
- Preventing custom styles on certain components by preventing `className` or `style`

## Usage

This rule takes one object argument of type object that defines an associative array of `attributes` that that should be prevented on the defined array of `components`.

```
{
  "rules": {
    "idiomatic-jsx/prevent-attributes": [ 2, {
      "onClick": [ "div", "span" ],
      "onBlur": [ "div", "span" ]
    }]
  }
}
```

### Succeed
```jsx
<div></div>                         <!-- Good: onClick is not on div -->
<span></span>                       <!-- Good: onBlur is on span -->
<Foo onClick={onclick}></Foo>       <!-- Good: onClick is no an allowed component -->
<Foo onBlur={onBlur}></Foo>         <!-- Good: onBlur is no an allowed component -->
```

### Fail

```jsx
<div onClick={onclick}></div>       <!-- Bad: onClick is on div -->
<div onBlur={onBlur}></div>         <!-- Bad: onBlur is on div -->
<span onClick={onclick}></span>     <!-- Bad: onClick is on span -->
<span onBlur={onBlur}></span>       <!-- Bad: onBlur is on span -->
```

By default, the attributes are prevents on any item in the defined array.  This is "whitelisting" those components.  If you would like to instead use the list as a "backlist" and other components should not use those attributes, there is an alternative syntax to turn on blacklisting.

```
{
  "rules": {
    "idiomatic-jsx/prevent-attributes": [ 2, {
      "onClick": {
        blacklist: true,
        components: [ "a", "button" ]
      },
      "onBlur": {
        blacklist: true,
        components: [ "a", "button" ]
      }
    }]
  }
}
```

### Succeed
```jsx
<div></div>                         <!-- Good: onClick is not on div -->
<span></span>                       <!-- Good: onBlur is on span -->
<a onClick={onclick}></a>           <!-- Good: onClick is no an allowed component -->
<button onBlur={onBlur}></button>   <!-- Good: onBlur is no an allowed component -->
```

### Fail

```jsx
<div onClick={onclick}></div>       <!-- Bad: onClick is on div -->
<div onBlur={onBlur}></div>         <!-- Bad: onBlur is on div -->
<span onClick={onclick}></span>     <!-- Bad: onClick is on span -->
<span onBlur={onBlur}></span>       <!-- Bad: onBlur is on span -->
<Foo onClick={onclick}></Foo>     <!-- Bad: onClick is on Foo -->
```

You may also pass in a 3rd option to change the default message that is output on error.  This can be handy if you want to explain "why" this rule is being used in your project or organization.  This option is a `function` that takes in the `nodeType` and `attribute` name and returns a `string`.

```
{
  "rules": {
    "idiomatic-jsx/require-attributes": [ 2, [ "Foo", "Bar" ],
      (nodeType, attribute) => `<${n}> components must not have a "${a}" attribute. This breaks accessibility.`
    }]
  }
}
```
