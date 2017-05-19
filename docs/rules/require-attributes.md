# require-attributes

Require specified `attributes` on specified `components` from being used.. This is useful for things such as:
- Requiring a `id` attribute on things used by automated tests
- Requiring attributs needed for SEO or a11y concerns

## Usage

This rule takes one object argument of type object that defines an associative array of `attributes` that that should be required on the defined array of `components`.

```
{
  "rules": {
    "idiomatic-jsx/require-attributes": [ 2, {
      "id": [ "a", "button", "input" ]
    }]
  }
}
```

### Succeed
```jsx
<a id='my-id'></a>                  <!-- Good: id is provided-->
<input id='my-id'></input>          <!-- Good: id is provided-->
```

### Fail

```jsx
<a></a>                             <!-- Bad: id is missing-->
<button></button>                   <!-- Bad: id is missing-->
```

By default, the attributes are required on any item in the defined array.  This is "whitelisting" those components.  If you would like to instead use the list as a "backlist" and other components should require those attributes, there is an alternative syntax to turn on blacklisting.

```
{
  "rules": {
    "idiomatic-jsx/require-attributes": [ 2, {
      "id": {
        blacklist: true,
        components: [ "Foo", "Bar" ]
      }
    }]
  }
}
```

### Succeed
```jsx
<a id='my-id'></a>                  <!-- Good: id is provided-->
<input id='my-id'></input>          <!-- Good: id is provided-->
<Foo></Foo>                         <!-- Good: id is not required-->
<Bar></Bar>                         <!-- Good: id is not required-->
<Foo id='my-id'></Foo>              <!-- Good: id is not required, but ok if it is there-->
<Bar id='my-id'></Bar>              <!-- Good: id is not required, but ok if it is there-->
```

### Fail

```jsx
<a></a>                             <!-- Bad: id is missing-->
<button></button>                   <!-- Bad: id is missing-->
```
