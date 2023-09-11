import inquirer from 'inquirer';
import { calculateAge } from './calculateAge.js';

const questions = [
    {
        type: 'number',
        name: 'month',
        message: 'Enter your month of birth (1-12):',
        validate: value => (value >= 1 && value <= 12) ? true : 'Enter a valid month (1-12)'
    },
    {
        type: 'number',
        name: 'date',
        message: 'Enter your date of birth (1-31):',
        validate: value => (value >= 1 && value <= 31) ? true : 'Enter a valid date (1-31)'
    },
    {
        type: 'number',
        name: 'year',
        message: 'Enter your year of birth (1900-2023):',
        validate: value => (value >= 1900 && value <= 2023) ? true : 'Enter a valid year (1900-2023)'
    }
];

const main = async () => {
    const answers = await inquirer.prompt(questions);
    const birthDate = new Date(answers.year, answers.month - 1, answers.date);
    const age = calculateAge(birthDate);
    
    if (age >= 16) {
        console.log("You are 16 years old or older.");
    } else {
        console.log("You are not yet 16 years old.");
    }
};

main();
