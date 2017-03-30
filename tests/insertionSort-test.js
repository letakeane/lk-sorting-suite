require('locus')

import newPositiveNumbers from '../scripts/newPositiveNumbers'
import newPosNegNumbers from '../scripts/newPosNegNumbers'
import randomLettersArray from '../scripts/randomLettersArray'
import {assert} from 'chai'
import insertionSort from '../scripts/insertionSort.js'

describe('insertion sort tests', () => {
  var raddestArray = [];

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should sort an array of 2 values', () => {
    raddestArray = [2, 1];

    insertionSort(raddestArray);

    assert.deepEqual(raddestArray, [1, 2]);
  })

  it('should sort a set of positive integers into numeric order', () => {
    raddestArray = [];

    newPositiveNumbers(raddestArray);

    raddestArray.unshift(200);
    raddestArray.push(0);

    insertionSort(raddestArray);

    assert.deepEqual(raddestArray[raddestArray.length - 1], 200);
    assert.deepEqual(raddestArray[0], 0);
  })

  it('should sort a set of +/- integers into numeric order', () => {
    raddestArray = [];

    newPosNegNumbers(raddestArray);
    raddestArray.unshift(200);
    raddestArray.push(-200);

    insertionSort(raddestArray);

    assert.deepEqual(raddestArray[0], -200)
    assert.deepEqual(raddestArray[raddestArray.length - 1], 200);
  })

  it('should sort a set of letters into order', () => {
    raddestArray = [];

    randomLettersArray(raddestArray);
    raddestArray.unshift('z');
    raddestArray.push('a');

    insertionSort(raddestArray);

    assert.deepEqual(raddestArray[0], 'a')
    assert.deepEqual(raddestArray[raddestArray.length - 1], 'z');
  })
})
