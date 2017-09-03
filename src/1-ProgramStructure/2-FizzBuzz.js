/*
Print numbers 1 - 100
Numbers % 3 === 0 -> 'Fizz'
Numbers % 5 === 0 && Numbers % 3 !== 0 -> 'Buzz'
*/

const NUMBERS = 16;
const FIZZ = 3;
const BUZZ = 5;

export const divisible = (number, divisor) => ((number % divisor) === 0);

const isFizz = number => (divisible(number, FIZZ));

const isBuzz = number => (divisible(number, BUZZ));

export const fizzBuzz = () => {
  let number;
  for (number = 0; number < NUMBERS; number += 1) {
    console.log('Number: ', number);
    if (isFizz(number) && isBuzz(number)) {
      console.log('FizzBuzz');
    }
    if (isFizz(number)) {
      console.log('Fizz');
    } else if (isBuzz(number)) {
      console.log('Buzz');
    }
  }
  return true;
};
