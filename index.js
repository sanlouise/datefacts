const moment = require('moment');
const chalk = require('chalk');

console.log(`It is ${chalk.hex('6CA0B5')(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}.`);
console.log(`It is the ${chalk.hex('A976AF')(moment().format("DDDo"))} day of the year.`);
if (moment().isDST()) console.log(`It ${chalk.hex('7BA560')('is')} during Daylight Savings Time.`);
if (!moment([2017, 1, 29]).isValid()) console.log(`It is ${chalk.hex('AC4242')('not')} a leap year.`)
