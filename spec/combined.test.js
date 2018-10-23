var api = require('../main'),
  testData = require('../test-data');

describe('The numberOfChars function ', () => {
  describe('counts the chars ', () => {
    test('in poem', () => {
      var result = api.numberOfChars(testData.poem);

      expect(result).toEqual(20);
    });
  });
});


describe('The numberOfCertainChars function ', () => {
  describe('counts the number of As ', () => {
    test('in poem', () => {
      var result = api.numberOfCertainChars(testData.poem, 'a');

      expect(result).toEqual(6);
    });
  });
});