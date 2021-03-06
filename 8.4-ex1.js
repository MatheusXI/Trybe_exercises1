const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let array = arrays.reduce((acumulador, valorAtual)=> acumulador.concat(valorAtual));
  return array
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);