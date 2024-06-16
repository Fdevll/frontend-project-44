#!/usr/bin/env node
import readlineSync from 'readline-sync';

const arithmeticProgression = (n, lim) => Array.from(
  { length: Math.ceil(lim / n) },
  (_, i) => (i + 1) * n,
);

export default function brainProgression() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let emptyAnswer = 1;
  while (emptyAnswer <= 3) {
    const randomCount = arithmeticProgression(
      Math.floor(Math.random() * (20 - 10)) + 2,
      Math.floor(Math.random() * (200 - 50)) + 50,
    );
    const trueLet = randomCount[3];
    randomCount[3] = '..';
    console.log(`Question: ${randomCount.join(' ')}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (Number(userAnswer) !== Number(trueLet)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueLet}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    emptyAnswer += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
