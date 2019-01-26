var a = "Guess a number between 1-10."

function guessNumber(z) {
  var b = "Too high! Try again."
  var c = "Too low! Try again."
  var d = "This is not a correct number. Remember, 1-10."
  var e = "This is not a number."
  var randomNumber = Math.floor(Math.random() * 10) +1
  passNumber(z)
  function passNumber(z) {
    var guess = prompt(z)
    check ()

    function check() {
      if (guess > 10 || guess < 1)
          passNumber(d)
        else if (guess > randomNumber) {
          passNumber(b)
        }
        else if (guess < randomNumber) {
          passNumber(c)
        }
        else if (guess == randomNumber)
        return alert('Congratulations! You got it!')
        else {
          passNumber(e)
        }
  }
}
}
