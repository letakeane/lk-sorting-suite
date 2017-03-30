const mergeThatShiz = (arr1, arr2) => {
  var mergedArray = [];

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

export default mergeThatShiz;
