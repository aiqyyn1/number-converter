const languages = {
  en: require('./languages/en'),
  ru: require('./languages/ru'),
};

function numberToWords(number, options = { lang: 'en' }) {
  const { lang } = options;

  if (!languages[lang]) throw new Error(`Language ${lang} not supported`);

  const langModule = languages[lang];
  const groups = splitIntoGroups(number);
  let words = groups.map((group, index) => langModule.convertGroup(group, index));

  return words.reverse().filter(Boolean).join(' ').trim();
}

function splitIntoGroups(number) {
  let result = [];
  while (number > 0) {
    result.push(number % 1000);
    number = Math.floor(number / 1000);
  }
  return result;
}

module.exports = numberToWords;
