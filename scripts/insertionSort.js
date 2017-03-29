const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {

        [arr[j], arr[j + 1]] = [temp, arr[j]]
      }
    }
  }
};

export default insertionSort;
