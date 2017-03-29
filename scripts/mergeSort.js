import mergeThatShiz from './mergeThatShiz.js'

const mergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }

  let midpoint = arr.length / 2;
  let endpoint = arr.length;
  let arr1 = arr.slice(0, midpoint);
  let arr2 = arr.slice(midpoint, endpoint);

  return mergeThatShiz(mergeSort(arr1), mergeSort(arr2));
}

export default mergeSort;
