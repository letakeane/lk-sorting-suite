require('locus')

import newPositiveNumbers from '../scripts/newPositiveNumbers'
import newPosNegNumbers from '../scripts/newPosNegNumbers'
import randomLettersArray from '../scripts/randomLettersArray'
import {assert} from 'chai'
import bubbleSort from '../scripts/bubbleSort.js'

describe('bubble sort tests', () => {
  let raddestArray = [];

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('should sort an array of 2 values', () => {
    raddestArray = [2, 1];

    bubbleSort(raddestArray);

    assert.deepEqual(raddestArray, [1, 2]);
  })

  it('should sort a set of positive integers into numeric order', () => {
    raddestArray = [];

    newPositiveNumbers(raddestArray);
    raddestArray.unshift(200);
    raddestArray.push(0);

    bubbleSort(raddestArray);

    assert.deepEqual(raddestArray[0], 0);
    assert.deepEqual(raddestArray[raddestArray.length - 1], 200);
  })

  it('should sort a set of +/- integers into numeric order', () => {
    raddestArray = [];

    newPosNegNumbers(raddestArray);
    raddestArray.unshift(200);
    raddestArray.push(-200);

    bubbleSort(raddestArray);

    assert.deepEqual(raddestArray[0], -200);
    assert.deepEqual(raddestArray[raddestArray.length - 1], 200);
  })

  it('should sort a set of letters into order', () => {
    raddestArray = [];

    randomLettersArray(raddestArray);
    raddestArray.unshift('z');
    raddestArray.push('a');

    bubbleSort(raddestArray);

    assert.deepEqual(raddestArray[0], 'a');
    assert.deepEqual(raddestArray[raddestArray.length - 1], 'z');
  })
})
