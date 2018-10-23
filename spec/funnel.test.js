var api = require('../main.js'),
  testData = require('../test-data');

var poem = ['Mary', 'had', 'a', 'little', 'lamb'];

function add(total, n){
  return total + n;
}

function combineIt(words, word){
  return words + word
}

describe('The funnel function ', () => {
  describe('sums ', () => {
    test('simple numbers', () => {
      var result = api.funnel(testData.simpleNumbers, add, 0);

      expect(result).toEqual(6);
    });

    test('one number', () => {
      var result = api.funnel(testData.oneNumber, add, 0);

      expect(result).toEqual(-2);
    });

    test('more numbers', () => {
      var result = api.funnel(testData.moreNumbers, add, -47);

      expect(result).toEqual(0);
    });
  });
});

describe('The funnel function ', () => {
  describe('combines words ', () => {
    test('of poems', () => {
      var result = api.funnel(testData.poem, combineIt, '');

      expect(result).toEqual('Maryhadalittlelaaamb');
    });
  });
});