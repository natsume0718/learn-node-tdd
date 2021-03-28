export function add() {
  if (30 < arguments.length) {
    throw new Error('over limit argument');
  }
  let sum = Array.from(arguments).reduce((previous, current) => {
    if (typeof current !== 'number') {
      throw new Error('error only accept number');
    }
    return previous + current;
  });

  if (1000 < sum) {
    return 'too big';
  }
  return sum;
}

export function multiply() {
  if (30 < arguments.length) {
    throw new Error('over limit argument');
  }

  let multiply = Array.from(arguments).reduce((previous, current) => {
    if (typeof current !== 'number') {
      throw new Error('error only accept number');
    }
    return previous * current;
  });

  if (1000 < multiply) {
    return 'big big number';
  }

  return multiply;
}

export function subtract() {
  if (30 < arguments.length) {
    throw new Error('over limit argument');
  }
  let subtract = Array.from(arguments).reduce((previous, current) => {
    if (typeof current !== 'number') {
      throw new Error('error only accept number');
    }
    return previous - current;
  });
  if (subtract < 0) {
    return 'negative number';
  }
  return subtract;
}

export function divide() {
  if (30 < arguments.length) {
    throw new Error('over limit argument');
  }
}
