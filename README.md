# eslint-plugin-idiomatic-jsx [![CircleCI](https://circleci.com/gh/danrigsby/eslint-plugin-idiomatic-jsx.svg?style=svg)](https://circleci.com/gh/danrigsby/eslint-plugin-idiomatic-jsx)
ESLint jsx plugin to bring more idiomatic control over JSX elements.

These rules allow you to create idiomatic styling over JSX in your projects.  For instance, enforcing or preventing certain attributes on JSX elements.  The goal is to extend the rule sets provided by [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) to give you more control over how JSX is used.

**Some Possible Use Cases**
- Require `id` tags on components like `a` and `input` for easier automated tests
- Prevent `onClick` being used on `div` or `span` components
- Prevent use of `button` components in favor of a custom `Button` components

## Installation
You'll first need to install ESLint:

``` sh
# npm
npm install eslint --save-dev

# yarn
yarn add eslint --dev
```
Next, install eslint-plugin-idiomatic-jsx:

``` sh
# npm
npm install eslint-plugin-idiomatic-jsx --save-dev

# yarn
yarn add eslint-plugin-idiomatic-jsx --dev
```

Note: If you installed ESLint globally then you must also install eslint-plugin-idiomatic-jsx globally.

## Configuration
Add `idiomatic-jsx` to the plugins section of your `.eslintrc` configuration file. _You can omit the `eslint-plugin-` prefix_

```javascript
{
  "plugins": [
    "idiomatic-jsx"
  ]
}
```

Configure the rules you want to use under the rules section.

```javascript
{
  "rules": {
    "idiomatic-jsx/rule-name": [ 2, {
      // options
    } ]
  }
}
```

## List of Supported Rules
- [prevent-attributes](docs/rules/prevent-attributes.md): Prevent specified `attributes` on specified `components` from being used.
- [prevent-components](docs/rules/prevent-components.md): Prevent specified `components` from being used.
- [require-attributes](docs/rules/require-attributes.md): Require specified `attributes` on specified `components` to be defined.

## License

`eslint-plugin-idiomatic-jsx` is licensed under the [MIT License](LICENSE).
