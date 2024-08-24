
const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
const teens = [
  'десять',
  'одиннадцать',
  'двенадцать',
  'тринадцать',
  'четырнадцать',
  'пятнадцать',
  'шестнадцать',
  'семнадцать',
  'восемнадцать',
  'девятнадцать',
];
const tens = [
  '',
  '',
  'двадцать',
  'тридцать',
  'сорок',
  'пятьдесят',
  'шестьдесят',
  'семьдесят',
  'восемьдесят',
  'девяносто',
];
const hundreds = [
  '',
  'сто',
  'двести',
  'триста',
  'четыреста',
  'пятьсот',
  'шестьсот',
  'семьсот',
  'восемьсот',
  'девятьсот',
];

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
