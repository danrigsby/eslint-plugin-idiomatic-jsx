import { RuleTester } from 'eslint';
import rule from '../prevent-components';
import parserOptionsMapper from './parserOptionsMapper';

new RuleTester().run('prevent-components', rule, {
  valid: [
    {
      code: '<div><Foo></Foo><Bar></Bar></div>',
      options: [['input', 'button']]
    }
  ].map(parserOptionsMapper),
  invalid: [
    {
      code: '<div><input></input><button></button></div>',
      options: [['input', 'button']],
      errors: [
        '<input> components are not allowed.',
        '<button> components are not allowed.'
      ]
    }
  ].map(parserOptionsMapper)
});
