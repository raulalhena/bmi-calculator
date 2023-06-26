//import readlineSync from 'readline-sync';

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output, argv } from 'node:process';

const rl = readline.createInterface({ input, output });

interface Bmi {
    category: string;
    min: number;
    max: number;
}

const underweigh1 = {
    category: "Underweight (Severe thinness)",
    min: 0,
    max: 15.9
};

const underweigh2 = {
    category: "Underweight (Moderate thinness)",
    min: 16,
    max: 16.9
};

const underweigh3 = {
    category: "Underweight (Mild thinness)",
    min: 17,
    max: 18.4
};

const normal = {
    category: "Normal range",
    min: 18.5,
    max: 24.9
};

const preobese = {
    category: "Overweigh (Pre-obese)",
    min: 25,
    max: 29.9
};

const obese1 = {
    category: "Normal range",
    min: 30,
    max: 34.9
};

const obese2 = {
    category: "Normal range",
    min: 35,
    max: 39.9
};

const obese3 = {
    category: "Normal range",
    min: 40,
    max: Infinity
};

const categories = [underweigh1, underweigh2, underweigh3, normal, preobese, obese1, obese2, obese3];


export const calculateBmi = (height: number, weight: number) => {
    let bmi: number = weight / Math.pow((height / 100), 2);

    const result = categories.filter((category) => bmi >= category.min && bmi <= category.max);
    return result[0].category;
}


// const height = parseInt(readlineSync.question('Give your height '));
// const weight = parseInt(readlineSync.question('Give your weight '));


//console.log(+process.argv[2], +process.argv[3]);

// console.log(`Your category is: ${calculateBmi(height, weight)}`);

(async () => {
    const height = await rl.question('Give your height: ');
    const weight = await rl.question('Give your weight: ');

    const result = calculateBmi(+height, +weight);

    console.log(result);
})();