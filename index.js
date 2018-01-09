// Code your solutions in this file

function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array;
}

function tailsNeverFails() {
  let i = 0;
  function maybeTrue () {
    return Math.random() >= 0.5;
  }
  while (maybeTrue()) {
    i++
  }
  return `You got ${i} tails in a row!`
}
