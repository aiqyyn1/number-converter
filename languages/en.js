// languages/en.js
const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

function convertGroup(number) {
  let word = '';

  if (number > 99) {
    word += hundreds[Math.floor(number / 100)] + ' ';
    number = number % 100;
  }
  if (number > 19) {
    word += tens[Math.floor(number / 10)] + ' ';
    number = number % 10;
  }
  if (number > 9) {
    word += teens[number - 10] + ' ';
  } else {
    word += units[number] + ' ';
  }

  return word.trim();
}

module.exports = { convertGroup };
