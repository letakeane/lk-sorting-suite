const randomLettersArray = array => {
  let letters = "bcdefghijklmnopqrstuvwxy";

  for (let i = 0; i < 5000; i++) {
    array[i] = letters.charAt(Math.floor(Math.random() * letters.length));
  }
}

export default randomLettersArray;
