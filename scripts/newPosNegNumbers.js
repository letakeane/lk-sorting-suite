const newPosNegNumbers = arr => {
  for ( let i = 0; i < 5000; i++ ) {
    arr[i] = parseInt (
      Math.floor (
        Math.random() * (10 - (-10)) + (-10)
      )
    )
  }
}

export default newPosNegNumbers;
