function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

function multiplication(a, b) {
  return a * b;
}

module.exports = {
  add,
  subtraction,
  multiplication,
};
