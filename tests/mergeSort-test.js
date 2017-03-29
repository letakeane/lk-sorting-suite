require('locus')

import newPositiveNumbers from '../scripts/newPositiveNumbers'
import newPosNegNumbers from '../scripts/newPosNegNumbers'
import randomLettersArray from '../scripts/randomLettersArray'
import {assert} from 'chai'
import mergeSort from '../scripts/mergeSort.js'

describe('merge sort tests', () => {
  let raddestArray = [];
  let sortedArray = [];

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  })

  it('should sort an array of 2 values', () => {
    raddestArray = [2, 1];
    sortedArray = [];

    sortedArray = mergeSort(raddestArray);

    assert.deepEqual(sortedArray, [1, 2]);
  })

  it('should sort a set of positive integers into numeric order', () => {
    raddestArray = [];
    sortedArray = [];

    newPositiveNumbers(raddestArray);

    raddestArray.unshift(200);
    raddestArray.push(0);

    sortedArray = mergeSort(raddestArray);


    assert.deepEqual(sortedArray[0], 0);
    assert.deepEqual(sortedArray[sortedArray.length - 1], 200);
  })

  it('should sort a set of +/- integers into numeric order', () => {
    raddestArray = [];
    sortedArray = [];

    newPosNegNumbers(raddestArray);
    raddestArray.unshift(200);
    raddestArray.push(-200);

    sortedArray = mergeSort(raddestArray);

    assert.deepEqual(sortedArray[0], -200)
    assert.deepEqual(sortedArray[sortedArray.length - 1], 200);
  })

  it('should sort a set of letters into order', () => {
    raddestArray = [];
    sortedArray = [];

    randomLettersArray(raddestArray);
    raddestArray.unshift('z');
    raddestArray.push('a');

    sortedArray = mergeSort(raddestArray);

    assert.deepEqual(sortedArray[0], 'a')
    assert.deepEqual(sortedArray[sortedArray.length - 1], 'z');
  })
})
