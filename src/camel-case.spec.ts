import { toSnakeCase } from './camel-case';

describe('camel-case', () => {
  describe('toSnakeCase', () => {
    test('edge', () => {
      expect(toSnakeCase(undefined)).toBeUndefined();
      expect(toSnakeCase(null)).toBeNull();
      expect(toSnakeCase('')).toEqual('');
    });
    test('non string', () => {
      expect(toSnakeCase(123)).toEqual(123);
      expect(toSnakeCase(123.456)).toEqual(123.456);
      expect(toSnakeCase([])).toEqual([]);
      expect(toSnakeCase({})).toEqual({});
    });
    test('camel case', () => {
      expect(toSnakeCase('fooBarBaz')).toEqual('foo_bar_baz');
    });
    test('snake case', () => {
      expect(toSnakeCase('foo_bar_baz')).toEqual('foo_bar_baz');
    });
    test.skip('FIXME: pascal case', () => {
      // FIXME: expect(toSnakeCase('FooBarBaz')).toEqual( 'FooBarBaz');
      expect(toSnakeCase('FooBarBaz')).toEqual('foo_bar_baz');
    });
    test('kebab case', () => {
      expect(toSnakeCase('foo-bar-baz')).toEqual('foo-bar-baz');
    });
    test('cobol case', () => {
      expect(toSnakeCase('FOO-BAR-BAZ')).toEqual('FOO-BAR-BAZ');
    });
    test('upper case', () => {
      expect(toSnakeCase('FOO_BAR_BAZ')).toEqual('FOO_BAR_BAZ');
    });
    test('with number', () => {
      expect(toSnakeCase('utf8Encoding')).toEqual('utf8_encoding');
      expect(toSnakeCase('8daysAgo')).toEqual('8days_ago');
      expect(toSnakeCase('8DaysAgo')).toEqual('8_days_ago');
      expect(toSnakeCase('imageUrl2')).toEqual('image_url2');
      expect(toSnakeCase('I18N')).toEqual('I18N');
    });
  });
});
