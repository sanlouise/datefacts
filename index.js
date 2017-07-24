const moment = require('moment');
const chalk = require('chalk');

const midnight = moment().startOf('day');
const now = moment();

const seconds = moment().valueOf() - moment();
console.log(`It is ${chalk.hex('6CA0B5')(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}.`);
console.log(`It is the ${chalk.hex('A976AF')(moment().format("DDDo"))} day of the year.`);
console.log(`It is ${chalk.hex('77B4A9')((parseInt((now - midnight) / 1000)))} seconds into the day.`);
if (moment().isDST()) console.log(`It ${chalk.hex('7BA560')('is')} during Daylight Savings Time.`);
if (!moment([2017, 1, 29]).isValid()) console.log(`It is ${chalk.hex('AC4242')('not')} a leap year.`)
