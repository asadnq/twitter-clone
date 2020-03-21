import { formatCount } from './formatCount';

test('works with 4 digits', () => {
  const result = '1,234';

  expect(result).toEqual(formatCount(1234));
});

test('works with huge number', () => {
  const result = '16,891,021,884,202';
  expect(result).toEqual(formatCount(16_891_021_884_202));
});

test('does nothing to number that has < 3 digits',() => {
  expect('10').toEqual(formatCount(10));
} )
