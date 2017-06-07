// I don't know if this exactly what is wanted? But it works...

console.log('hello');


var input = 0.67;

var decimalDiv = [
	quarter = 0.25,
	dime = 0.10,
	nickel = 0.05,
	penny = 0.01
];

const coinPurse =  [
	quarters = 0,
	dimes = 0,
	nickels = 0,
	pennies = 0
];

decimalDivLength = decimalDiv.length;
coinPurseLength = coinPurse.length;


for (let i = 0; i < coinPurseLength; i++) {
	coinPurse[i] = Math.floor(input/decimalDiv[i]);
	input = Math.round(input%decimalDiv[i] * 100) / 100;
};

console.log('Quarters: ', coinPurse[0],'Dines: ', coinPurse[1], 'Nickels: ', coinPurse[2],'Pennies: ', coinPurse[3]);






