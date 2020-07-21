// node caesar.js "Hello World" 3

function caesarShift(str, shift) {
  const chars = [...str].map((ch, i) => {
    let code = str.charCodeAt(i)
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65)
    }
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97)
    }
    return ch
  })
  return chars.join('')
}

let count = 0
let encrypted = process.argv[2]
for (let i = 0; i < 26; i++) {
  let original = caesarShift(encrypted, 26 - i)
  process.stdout.write(String(i).padStart(2, '0'))
  process.stdout.write(': ')
  process.stdout.write(original)
  process.stdout.write('\t  ')
  count++
  if (count % 3 == 0) {
    console.log()
  }
}
console.log()
