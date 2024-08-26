# Number to Text Converter

This package provides a utility to convert numbers into their textual representation in English. For example, the number `123` would be converted to `one hundred twenty-three`.

## Features

- Converts integer numbers to their English textual representation.
- Handles both positive and negative numbers.
- Supports large numbers up to billions.
- Simple and intuitive API.

## Installation

To install the package, use npm:

```bash
npm install unique-number-converter
yarn add number-to-text-converter

const { numberToWords } = require('number-to-text-converter');

// Convert a number to its text representation
console.log(numberToWords(123));  // Output: 'one hundred twenty-three'

// Convert a negative number
console.log(numberToWords(456, {lang:'ru'))));  // Output: 'четыресто пятьдесят шесть'

// Convert a large number
console.log(numberToWords(789012));  // Output: 'seven hundred eighty-nine thousand twelve'

