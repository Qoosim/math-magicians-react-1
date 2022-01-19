import operate from '../logic/operate';

describe('Test for the operate logic', () => {
  test('tests for division by zero', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('tests for division by integer value', () => {
    expect(operate('10', '5', '÷')).toBe('2');
  });

  test('tests for addition by integer value', () => {
    expect(operate('10', '5', '+')).toBe('15');
  });

  test('tests for multiplication by integer value', () => {
    expect(operate('10', '2', 'x')).toBe('20');
  });

  test('tests for subtraction by integer value', () => {
    expect(operate('10', '5', '-')).toBe('5');
  });

  test('tests for subtraction by integer value', () => {
    expect(operate('13', '5', '%')).toBe('3');
  });

  test('tests for modulus by zero', () => {
    expect(operate('13', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
