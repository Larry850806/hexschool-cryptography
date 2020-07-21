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

let orig_str = process.argv[2]
let shift = Number(process.argv[3])
let encrypted = caesarShift(orig_str, shift)
console.log(encrypted)
