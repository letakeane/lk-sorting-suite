require('locus')

import {assert} from 'chai'
import insertionSort from '../scripts/insertionSort.js'

describe('insertion sort tests', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it.skip('should sort an array of 2 values', () => {
    let raddestArray = [2, 1];

    insertionSort(raddestArray);
    assert.deepEqual(raddestArray, [1, 2]);
  })

  it.skip('should sort a set of positive integers into numeric order', () => {
    let raddestArray = [];

    const newNumbers = arr => {
      for ( let i = 0; i < 20; i++ ) {
        arr[i] = parseInt ( Math.floor ( Math.random() * 10 ) )
      }
    }

    newNumbers(raddestArray);

    insertionSort(raddestArray);
    assert.deepEqual(raddestArray, raddestArray.sort())
  })

  it.skip('should sort a set of +/- integers into numeric order', () => {
    let raddestArray = [];

    const newNumbers = arr => {
      for ( let i = 0; i < 21; i++ ) {
        arr[i] = parseInt (
          Math.floor (
            Math.random() * (10 - (-10)) + (-10)
          )
        )
      }
    }

    newNumbers(raddestArray);

    insertionSort(raddestArray);
    assert.deepEqual(raddestArray, raddestArray.sort())
  })

  it.skip('should sort a set of letters into order', () => {
    let raddestArray = [];
    let letters = "abcdefghijklmnopqrstuvwxyz";

    const randomLettersArray = array => {
      for (let i = 0; i < 21; i++) {
        array[i] = letters.charAt(Math.floor(Math.random() * letters.length));
      }
    }

    randomLettersArray(raddestArray);
    insertionSort(raddestArray);
    assert.deepEqual(raddestArray, raddestArray.sort())
  })

  it.skip('should sort a set of letters and numbers into order', () => {
    let raddestArray = [];
    let alphanums = "0123456789abcdefghijklmnopqrstuvwxyz";

    const randomLettersArray = array => {
      for (let i = 0; i < 21; i++) {
        array[i] =
        alphanums.charAt(Math.floor(Math.random() * alphanums.length));
      }
    }

    randomLettersArray(raddestArray);
    insertionSort(raddestArray);
    assert.deepEqual(raddestArray, raddestArray.sort())
  })
})
