var api = require('../main.js'),
  testData = require('../test-data');

function isEven(num){
  return num % 2 === 0;
}

function isOdd(num){
  return !isEven(num);
}

function containsA(word){
  return word.indexOf('a') > -1;
}

describe('The distill function ', () => {
  describe('filters ', () => {
    test('even simple numbers', () => {
      var result = api.distill(testData.simpleNumbers, isEven);

      expect(result).toEqual([2]);
    });

    test('odd one number', () => {
      var result = api.distill(testData.oneNumber, isOdd);

      expect(result).toEqual([]);
    });

    test('more odd numbers', () => {
      var result = api.distill(testData.moreNumbers, isOdd);

      expect(result).toEqual([31, -11, 27]);
    });
  });
});

describe('The distill function ', () => {
  describe('finds words ', () => {
    test('with As', () => {
      var result = api.distill(testData.poem, containsA);

      expect(result).toEqual(['Mary', 'had', 'a', 'laaamb']);
    });
  });
});