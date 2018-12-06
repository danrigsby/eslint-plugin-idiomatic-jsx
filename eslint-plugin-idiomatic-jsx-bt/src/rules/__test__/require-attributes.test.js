import { RuleTester } from 'eslint';
import rule from '../require-attributes';
import parserOptionsMapper from './parserOptionsMapper';

const options = [{
  id: ['a', 'button']
}];

const blackListOptions = [{
  id: {
    blacklist: true,
    components: ['div', 'span']
  }
}];

new RuleTester().run('require-attributes', rule, {
  valid: [
    {
      code: '<a id="my-id"></a>',
      options
    },
    {
      code: '<button id="my-id"></button>',
      options
    },
    {
      code: '<div></div>',
      options
    },
    {
      code: '<div></div>',
      options: blackListOptions
    }
  ].map(parserOptionsMapper),
  invalid: [
    {
      code: '<a></a>',
      options,
      errors: [
        '<a> components must have a valid "id" attribute.'
      ]
    },
    {
      code: '<button></button>',
      options,
      errors: [
        '<button> components must have a valid "id" attribute.'
      ]
    },
    {
      code: '<a id={undefined}></a>',
      options,
      errors: [
        '<a> components must have a valid "id" attribute.'
      ]
    },
    {
      code: '<a id=""></a>',
      options,
      errors: [
        '<a> components must have a valid "id" attribute.'
      ]
    },
    {
      code: '<a id={null}></a>',
      options,
      errors: [
        '<a> components must have a valid "id" attribute.'
      ]
    },
    {
      code: '<a id=""></a>',
      options: blackListOptions,
      errors: [
        '<a> components must have a valid "id" attribute.'
      ]
    },
    {
      code: '<a id=""></a>',
      options: [...blackListOptions, (n, a) => `${n} ${a}`],
      errors: [
        'a id'
      ]
    }
  ].map(parserOptionsMapper)
});
