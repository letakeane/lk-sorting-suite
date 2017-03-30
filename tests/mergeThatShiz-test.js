require('locus')

import {assert} from 'chai'
import mergeThatShiz from '../scripts/mergeThatShiz.js'

describe('mergeThatShiz sort tests', () => {
  var radArray = [];
  var raddestArray = [];
  var mergedArray = [];

  it('should be a function', () => {
    assert.isFunction(mergeThatShiz);
  })

  it('should merge two arrays of equal lengths', () => {
    radArray = [1, 3, 5];
    raddestArray = [2, 4, 6];

    mergedArray = mergeThatShiz(radArray, raddestArray);

    assert.deepEqual(mergedArray, [1, 2, 3, 4, 5, 6]);
  })

  it('should merge two arrays of different lengths', () => {
    radArray = [1, 3, 5, 7];
    raddestArray = [2, 4, 6];

    mergedArray = mergeThatShiz(radArray, raddestArray);

    assert.deepEqual(mergedArray, [1, 2, 3, 4, 5, 6, 7]);
  })

  it('should merge two sorted arrays of pos/neg integers', () => {
    radArray = [-5, -1, 3, 7];
    raddestArray = [-4, 2, 6];

    mergedArray = mergeThatShiz(radArray, raddestArray);

    assert.deepEqual(mergedArray, [-5, -4, -1, 2, 3, 6, 7]);
  })

  it('should merge two sorted arrays of letters', () => {
    radArray = ['a', 'c', 'e', 'g', 'i'];
    raddestArray = ['b', 'd', 'f', 'h'];

    mergedArray = mergeThatShiz(radArray, raddestArray);

    assert.deepEqual(mergedArray,
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
  })
})
