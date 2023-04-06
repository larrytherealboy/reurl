// generate 5 letters
function generateUrl() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const originReurl = 'https://reurl.cc/'

  let collection = lowerCaseLetters + upperCaseLetters + numbers
  collection = collection.split('')

  let reurlLetters = ''
  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    singleLetter = collection[randomIndex]
    reurlLetters += singleLetter
  }

  const reurl = originReurl + reurlLetters
  return reurl
}

module.exports = generateUrl 