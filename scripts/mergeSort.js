const mergeThatShiz = (arr1, arr2) => {
  let mergedArray = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      mergedArray.push(arr1.shift())
    } else {
      mergedArray.push(arr2.shift())
    }
  }

  while (arr1.length) {
    mergedArray.push(arr1.shift())
  }

  while (arr2.length) {
    mergedArray.push(arr2.shift())
  }

  return mergedArray;
}

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

export default mergeThatShiz;
export default mergeSort;
