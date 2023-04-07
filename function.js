// generate 5 letters
function generateLetters() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = lowerCaseLetters + upperCaseLetters + numbers
  collection = collection.split('')

  let letters = ''
  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    singleLetter = collection[randomIndex]
    letters += singleLetter
  }

  return letters
}

module.exports = generateLetters 