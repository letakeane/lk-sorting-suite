require('locus')
import {assert} from 'chai'
import mergeSort from '../scripts/mergeSort.js'

describe('merge sort tests', () => {
  it('should be a function', () => {
    assert.isFunction(mergeSort);
  })

  it.skip('should sort an array of 2 values', () => {
    let raddestArray = [2, 1];

    mergeSort(raddestArray);
    assert.deepEqual(raddestArray, [1, 2]);
  })

  it('should sort a set of positive integers into numeric order', () => {
    let raddestArray = [];

    const newNumbers = arr => {
      for ( let i = 0; i < 21; i++ ) {
        arr[i] = parseInt ( Math.floor ( Math.random() * 10 ) )
      }
    }

    newNumbers(raddestArray);

    mergeSort(raddestArray);
    assert.deepEqual(raddestArray, raddestArray.sort())
  })

  it('should sort a set of +/- integers into numeric order', () => {
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

    mergeSort(raddestArray);
    assert.deepEqual(raddestArray, raddestArray.sort())
  })

  it('should sort a HUGE set of +/- integers into numeric order', () => {
    let raddestArray = [];

    const newNumbers = arr => {
      for ( let i = 0; i < 2000; i++ ) {
        arr[i] = parseInt (
          Math.floor (
            Math.random() * (10 - (-10)) + (-10)
          )
        )
      }
    }

    newNumbers(raddestArray);

    mergeSort(raddestArray);
    assert.deepEqual(raddestArray, raddestArray.sort())
  })

  it('should sort a set of letters into order', () => {
    let raddestArray = [];
    let letters = "abcdefghijklmnopqrstuvwxyz";

    const randomLettersArray = array => {
      for (let i = 0; i < 21; i++) {
        array[i] = letters.charAt(Math.floor(Math.random() * letters.length));
      }
    }

    randomLettersArray(raddestArray);
    mergeSort(raddestArray);
    assert.deepEqual(raddestArray, raddestArray.sort())
  })
})
