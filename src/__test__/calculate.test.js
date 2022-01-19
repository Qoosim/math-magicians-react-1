import calculate from '../logic/calculate';

describe('Test for calculate logic', () => {
  const operation = {
    next: null,
    total: null,
    operation: null,
  };

  test('returns empty operation when AC is pressed', () => {
    expect(calculate(operation, 'AC')).toEqual({
      next: null,
      total: null,
      operation: null,
    });
  });

  test('sets a value to the next key', () => {
    expect(calculate(operation, '2')).toEqual({
      next: '2',
      total: null,
    });
  });

  test('concatenates next value to the previous value', () => {
    Object.assign(operation, calculate(operation, '1'));
    expect(calculate(operation, '2')).toEqual({
      next: '12',
      total: null,
    });
  });

  test('performs operation on next value', () => {
    Object.assign(operation, calculate(operation, '2'));
    expect(calculate(operation, '+')).toEqual({
      next: null,
      total: '12',
      operation: '+',
    });
  });

  test('gets a value after operation button is pressed', () => {
    Object.assign(operation, calculate(operation, '+'));
    expect(calculate(operation, '6')).toEqual({
      next: '6',
      total: '12',
      operation: '+',
    });
  });

  test('adds up values', () => {
    Object.assign(operation, calculate(operation, '6'));
    expect(calculate(operation, '=')).toEqual({
      next: null,
      total: '18',
      operation: null,
    });
  });
});
