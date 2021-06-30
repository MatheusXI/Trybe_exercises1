const assert = require('assert');




const sum = (...param) => param.reduce((acc, val) => acc + val, 0);



assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
assert.strictEqual(sum(1, 2, 3, 4, 5), 15)