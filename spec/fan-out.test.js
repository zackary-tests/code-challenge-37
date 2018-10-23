var api = require('../main.js'),
  testData = require('../test-data');

function square(input){
  return input * input;
}

function splitIt(word){
  return word.split('');
}

describe('The fanOut function ', () => {
  describe('squares ', () => {
    test('simple numbers', () => {
      var result = api.fanOut(testData.simpleNumbers, square);

      expect(result).toEqual([1, 4, 9]);
    });

    test('one number', () => {
      var result = api.fanOut(testData.oneNumber, square);

      expect(result).toEqual([4]);
    });

    test('more numbers', () => {
      var result = api.fanOut(testData.moreNumbers, square);

      expect(result).toEqual([961, 121, 729]);
    });
  });
});

describe('The fanOut function ', () => {
  describe('splits strings ', () => {
    test('into char arrays', () => {
      var result = api.fanOut(testData.poem, splitIt);

      expect(result).toEqual([
        ['M', 'a', 'r', 'y'],
        ['h', 'a', 'd'],
        ['a'],
        ['l', 'i', 't', 't', 'l', 'e'],
        ['l', 'a', 'a', 'a', 'm', 'b']
      ]);
    });
  });
});