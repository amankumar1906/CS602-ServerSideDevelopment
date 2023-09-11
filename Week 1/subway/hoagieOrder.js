import inquirer from 'inquirer';

const breadChoices = {
    'Wheat': 0.50,
    'White': 0.00,
    'Pita': 1.00
};

const meatChoices = {
    'Roast Beef': 2.50,
    'Ham': 1.75,
    'Turkey': 2.00,
    'Tuna': 3.00
};

const cheeseChoices = {
    'Swiss': 1.25,
    'American': 0.50,
    'Cheddar': 2.25
};

const toppingChoices = {
    'Tomato': 0.25,
    'Pickles': 0.25,
    'Onions': 0.25,
    'Mushrooms': 0.25,
    'Hot Chili\'s': 0.25,
    'Green Peppers': 0.25,
    'Olives': 0.25
};

const calculateTotal = (choices, answers) => {
    let total = 0;
    for (let answer of answers) {
        total += choices[answer];
    }
    return total;
};

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
