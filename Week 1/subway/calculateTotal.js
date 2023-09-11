export const calculateTotal = (choices, answers) => {
    let total = 0;
    for (let answer of answers) {
        total += choices[answer];
    }
    return total;
};