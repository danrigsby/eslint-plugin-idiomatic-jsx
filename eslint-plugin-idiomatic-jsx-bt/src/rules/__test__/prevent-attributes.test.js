import { RuleTester } from 'eslint';
import rule from '../prevent-attributes';
import parserOptionsMapper from './parserOptionsMapper';

const options = [{
  onClick: ['div', 'span']
}];

const blackListOptions = [{
  onClick: {
    blacklist: true,
    components: ['a', 'button']
  }
}];

new RuleTester().run('prevent-attributes', rule, {
  valid: [
    {
      code: '<div></div>',
      options
    },
    {
      code: '<div><span style={{ color: \'red\' }}></span></div>',
      options
    },
    {
      code: '<a onClick={myFunction}></a>',
      options
    },
    {
      code: '<a onClick={myFunction}></a>',
      options: blackListOptions
    }
  ].map(parserOptionsMapper),
  invalid: [
    {
      code: '<div onClick={null}></div>',
      options,
      errors: [
        '<div> components must not have a "onClick" attribute.'
      ]
    },
    {
      code: '<div onClick={myFunction}></div>',
      options,
      errors: [
        '<div> components must not have a "onClick" attribute.'
      ]
    },
    {
      code: '<span onClick={myFunction}></span>',
      options,
      errors: [
        '<span> components must not have a "onClick" attribute.'
      ]
    },
    {
      code: '<div onClick={myFunction}></div>',
      options: blackListOptions,
      errors: [
        '<div> components must not have a "onClick" attribute.'
      ]
    },
    {
      code: '<div onClick={myFunction}></div>',
      options: [...blackListOptions, (n, a) => `${n} ${a}`],
      errors: [
        'div onClick'
      ]
    }
  ].map(parserOptionsMapper)
});
