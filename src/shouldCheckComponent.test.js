import { expect } from 'chai';
import shouldCheckComponent from './shouldCheckComponent';

describe('shouldCheckComponent', () => {
  it('should return false when no values', () => {
    expect(shouldCheckComponent()).to.equal(false);
  });

  it('should return false when undefined options', () => {
    expect(shouldCheckComponent(undefined, 'Foo')).to.equal(false);
  });

  it('should return false when a string options', () => {
    expect(shouldCheckComponent('foo', 'Foo')).to.equal(false);
  });

  it('should return false when a number options', () => {
    expect(shouldCheckComponent(1, 'Foo')).to.equal(false);
  });

  it('should return false when a null options', () => {
    expect(shouldCheckComponent(null, 'Foo')).to.equal(false);
  });


  it('should return true when component is implicitly whitelisted', () => {
    expect(shouldCheckComponent(['Foo', 'Bar'], 'Foo')).to.equal(true);
  });

  it('should return false when component is not implicitly whitelisted', () => {
    expect(shouldCheckComponent(['Baz', 'Bar'], 'Foo')).to.equal(false);
  });


  it('should return true when component is explicitly blacklisted', () => {
    const result = shouldCheckComponent(
      { blacklist: false, components: ['Foo', 'Bar'] },
      'Foo'
    );
    expect(result).to.equal(true);
  });

  it('should return false when component is not explicitly blacklisted', () => {
    const result = shouldCheckComponent(
      { blacklist: false, components: ['Baz', 'Bar'] },
      'Foo'
    );
    expect(result).to.equal(false);
  });


  it('should return false when component is explicitly blacklisted', () => {
    const result = shouldCheckComponent(
      { blacklist: true, components: ['Foo', 'Bar'] },
      'Foo'
    );
    expect(result).to.equal(false);
  });

  it('should return true when component is explicitly blacklisted', () => {
    const result = shouldCheckComponent(
      { blacklist: true, components: ['Baz', 'Bar'] },
      'Foo'
    );
    expect(result).to.equal(true);
  });
});
