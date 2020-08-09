// https://en.wikipedia.org/wiki/ANSI_escape_code#Colors

console.log('=========================')
console.log('8 bit:')
console.log('=========================')
console.log('\x1b[38;5;0mText\x1b[0m')
console.log('\x1b[38;5;1mText\x1b[0m')
console.log('\x1b[38;5;2mText\x1b[0m')
console.log('\x1b[38;5;3mText\x1b[0m')
console.log('\x1b[38;5;4mText\x1b[0m')
console.log('\x1b[38;5;5mText\x1b[0m')
console.log('\x1b[38;5;6mText\x1b[0m')
console.log('\x1b[38;5;7mText\x1b[0m')
console.log('\x1b[38;5;8mText\x1b[0m')
console.log('\x1b[38;5;9mText\x1b[0m')
console.log('\x1b[38;5;10mText\x1b[0m')
console.log('\x1b[38;5;11mText\x1b[0m')
console.log('\x1b[38;5;12mText\x1b[0m')
console.log('\x1b[38;5;13mText\x1b[0m')
console.log('\x1b[38;5;14mText\x1b[0m')
console.log('\x1b[38;5;15mText\x1b[0m')

console.log('=========================')
console.log('backgrounds:')
console.log('\x1b[48;5;0m       \x1b[0m')
console.log('\x1b[48;5;1m       \x1b[0m')
console.log('\x1b[48;5;2m       \x1b[0m')
console.log('\x1b[48;5;3m       \x1b[0m')
console.log('\x1b[48;5;4m       \x1b[0m')
console.log('\x1b[48;5;5m       \x1b[0m')
console.log('\x1b[48;5;6m       \x1b[0m')
console.log('\x1b[48;5;7m       \x1b[0m')
console.log('\x1b[48;5;8m       \x1b[0m')
console.log('\x1b[48;5;9m       \x1b[0m')
console.log('\x1b[48;5;10m       \x1b[0m')
console.log('\x1b[48;5;11m       \x1b[0m')
console.log('\x1b[48;5;12m       \x1b[0m')
console.log('\x1b[48;5;13m       \x1b[0m')
console.log('\x1b[48;5;14m       \x1b[0m')
console.log('\x1b[48;5;15m       \x1b[0m')


const colors = {
  black: 0,
  red: 1,
  green: 2,
  yellow: 3,
  blue: 4,
  magenta: 5,
  cyan: 6,
  white: 7,
  bBlack: 8,
  bRed: 9,
  bGreen: 10,
  bYellow: 11,
  bBlue: 12,
  bMagenta: 13,
  bCyan: 14,
  bWhite: 15,
  textColor: function (color, text) {
    return `\x1b[38;5;${this[color]}m${text}\x1b[0m`
  },
  textAndBackground: function(textColor, backgroundColor, text) {
    return `\x1b[48;5;${this[backgroundColor]}m\x1b[38;5;${this[textColor]}m${text}\x1b[0m`
  },
  backgroundColor: function (backgroundColor, width) {
    let str = ''
    return `\x1b[48;5;${this[backgroundColor]}m${str.padStart(width, ' ')}\x1b[0m`
  }
}

console.log('=========================')
console.log('examples:')

let test = colors.textColor('red', 'things')
console.log(test)

console.log(colors.backgroundColor('red', 2), colors.backgroundColor('blue', 4))

console.log(colors.textAndBackground('red', 'green', 'does this work?'))