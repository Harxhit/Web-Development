export function add(a, b) {
  return a + b;
}

export function subtraction(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

export default function multiplication(a, b) {
  return a * b;
}
