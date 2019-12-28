import { toCamelCase } from './snake-case';

describe('snake-case', () => {
  describe('toCamelCase', () => {
    test('edge', () => {
      expect(toCamelCase(undefined)).toBeUndefined();
      expect(toCamelCase(null)).toBeNull();
      expect(toCamelCase('')).toEqual('');
    });
    test('non string', () => {
      expect(toCamelCase(123)).toEqual(123);
      expect(toCamelCase(123.456)).toEqual(123.456);
      expect(toCamelCase([])).toEqual([]);
      expect(toCamelCase({})).toEqual({});
    });
    test('snake case', () => {
      expect(toCamelCase('foo_bar_baz')).toEqual('fooBarBaz');
    });
    test('camel case', () => {
      expect(toCamelCase('fooBarBaz')).toEqual('fooBarBaz');
    });
    test('pascal case', () => {
      expect(toCamelCase('FooBarBaz')).toEqual('FooBarBaz');
    });
    test('kebab case', () => {
      expect(toCamelCase('foo-bar-baz')).toEqual('foo-bar-baz');
    });
    test('cobol case', () => {
      expect(toCamelCase('FOO-BAR-BAZ')).toEqual('FOO-BAR-BAZ');
    });
    test('upper case', () => {
      expect(toCamelCase('FOO_BAR_BAZ')).toEqual('FOO_BAR_BAZ');
    });
    test('with number', () => {
      expect(toCamelCase('utf8_encoding')).toEqual('utf8Encoding');
      expect(toCamelCase('utf_8_encoding')).toEqual('utf8Encoding');
      expect(toCamelCase('8days_ago')).toEqual('8daysAgo');
      expect(toCamelCase('8_days_ago')).toEqual('8DaysAgo');
      expect(toCamelCase('image_url_2')).toEqual('imageUrl2');
      expect(toCamelCase('image_url2')).toEqual('imageUrl2');
      expect(toCamelCase('I18N')).toEqual('I18N');
    });
  });
});
