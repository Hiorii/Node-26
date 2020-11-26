const os = require('os');
const fs = require('fs');

const genders = ['M','F'];
const maleNames = ['Bartek', 'Maciej', 'Wojtek', 'Kamil'];
const femaleNames = ['Alicja', 'Marta', 'Ola', 'Anna'];
const lastNames = ['Kowal', 'Janiak', 'Figiel', 'Nowak', 'Cool'];

function randChoice(arr) {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

const people = [];

for (let i = 0; i<20; i++) {
  const person = {
    gender: randChoice(genders),
    firstName: genders['M'] ? randChoice(maleNames) : randChoice(femaleNames),
    lastName: randChoice(lastNames),
    age:Math.floor(Math.random() * 78) + 18,
  }
  people.push(person);
};

let convertedPeople = JSON.stringify(people);

fs.writeFile('people.json', convertedPeople, (err) => {
  if (err) {
    throw err;
    console.log('Something went wrong');
  }
  console.log('File has been successfully generated! Check people.json');
});