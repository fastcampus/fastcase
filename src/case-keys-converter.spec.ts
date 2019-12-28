import { createCaseKeysConverter } from './case-keys-converter';

describe('case-keys-converter', () => {
  describe('createCaseKeysConverter', () => {
    const toUpperCaseKeys = createCaseKeysConverter((s: string) => s.toUpperCase());
    test('edge', () => {
      expect(toUpperCaseKeys(undefined)).toBeUndefined();
      expect(toUpperCaseKeys(null)).toBeNull();
      expect(toUpperCaseKeys([])).toEqual([]);
      expect(toUpperCaseKeys({})).toEqual({});
      expect(toUpperCaseKeys(new Date())).toEqual({});
    });
    test('non object', () => {
      expect(toUpperCaseKeys('')).toEqual('');
      expect(toUpperCaseKeys('fooBarBaz')).toEqual('fooBarBaz');
      expect(toUpperCaseKeys('foo_bar_baz')).toEqual('foo_bar_baz');
      expect(toUpperCaseKeys(123)).toEqual(123);
      expect(toUpperCaseKeys(123.456)).toEqual(123.456);
      expect(toUpperCaseKeys(true)).toEqual(true);
      expect(toUpperCaseKeys(false)).toEqual(false);
    });
    test('object', () => {
      expect(
        toUpperCaseKeys({
          foo_bar_baz: 'foo_bar_baz',
        })
      ).toEqual({
        FOO_BAR_BAZ: 'foo_bar_baz',
      });
    });
    test('object with dup keys', () => {
      expect(
        toUpperCaseKeys({
          foo_bar_baz: 'foo_bar_baz',
          FOO_BAR_BAZ: 'fooBarBaz',
        })
      ).toEqual({
        FOO_BAR_BAZ: 'fooBarBaz',
      });
    });
    test('array', () => {
      expect(
        toUpperCaseKeys([
          {
            foo_bar_baz: 'foo_bar_baz',
          },
        ])
      ).toEqual([{ FOO_BAR_BAZ: 'foo_bar_baz' }]);
    });
  });
});
