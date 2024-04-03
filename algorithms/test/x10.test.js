/*
 *
 * Algorithms (Updated)
 *
 */

const x10 = require('../../index').x10;

////////////////////////////////////////////////////////////////////////////////

describe('Test algorithm functionality', () => {

  // Deterministic
  test('Test implemented x10 algorithm', () => {
    const start = Buffer.from('000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f');
    const output = Buffer.from('61d8655d2aaaded233812baafe6d6472a818246ac641882eb1134af814306071', 'hex');
    expect(x10.apply(null, [start]).length).toBe(32);
    expect(x10.apply(null, [start])).toStrictEqual(output);
  });
});
