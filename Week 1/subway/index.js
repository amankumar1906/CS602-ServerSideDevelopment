import inquirer from 'inquirer';
import { calculateTotal } from './calculateTotal';
import { breadChoices, meatChoices, cheeseChoices, toppingChoices } from './prices';

const main = async () => {
    let total = 0;

    const { bread } = await inquirer.prompt({
        type: 'list',
        name: 'bread',
        message: 'Choose your type of bread:',
        choices: Object.keys(breadChoices)
    });
    total += breadChoices[bread];

    const { meat } = await inquirer.prompt({
        type: 'list',
        name: 'meat',
        message: 'Choose your meat:',
        choices: Object.keys(meatChoices)
    });
    total += meatChoices[meat];

    const { cheese } = await inquirer.prompt({
        type: 'list',
        name: 'cheese',
        message: 'Choose your cheese:',
        choices: Object.keys(cheeseChoices)
    });
    total += cheeseChoices[cheese];

    const { toppings } = await inquirer.prompt({
        type: 'checkbox',
        name: 'toppings',
        message: 'Select additional toppings:',
        choices: Object.keys(toppingChoices)
    });
    total += calculateTotal(toppingChoices, toppings);

    console.log(`Your total price is: $${total.toFixed(2)}`);
};

main();
