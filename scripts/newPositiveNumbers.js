const newPositiveNumbers = (arr) => {
  for ( let i = 0; i < 5000; i++ ) {
    arr[i] = parseInt ( Math.floor ( Math.random() * 10 ) )
  }

  return arr;
}

export default newPositiveNumbers;
