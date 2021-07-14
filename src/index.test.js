const addTwo = (a, b) => a + b;

it('add two numbers', () => {
  expect(addTwo(1, 2)).toBe(3);
});

const shoppingList = ['krakersy', 'chipsy', 'bulki', 'makaron', 'apple'];

it('contains healthy food', () => {
  expect(shoppingList).toContain('apple');
});

const priceCount = (price) => price + 100;

it('every price is higher than 100', () => {
  expect(priceCount(20)).toBeGreaterThan(100);
});

it('object assignment', () => {
  const data = { one: 1 };
  // eslint-disable-next-line dot-notation
  data['two'] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

it('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

it('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

const fetchData = (callback) => {};

test('the data is peanut butter', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback('peanut butter'));
});
