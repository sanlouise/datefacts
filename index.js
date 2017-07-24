const chalk = require('chalk');
const midnight = moment().startOf('day');
const moment = require('moment');
const now = moment();
const seconds = moment().valueOf() - moment();
const year = moment().format("YYYY");

console.log(`It is ${chalk.hex('6CA0B5')(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}.`);
console.log(`It is the ${chalk.hex('A976AF')(moment().format("DDDo"))} day of the year.`);
console.log(`It is ${chalk.hex('77B4A9')((parseInt((now - midnight) / 1000)))} seconds into the day.`);
if (moment().isDST()) console.log(`It ${chalk.hex('7BA560')('is')} during Daylight Savings Time.`);
if (!moment().isDST()) console.log(`It is ${chalk.hex('AC4242')('not')} during Daylight Savings Time.`);
if (moment([year]).isLeapYear()) console.log(`It ${chalk.hex('7BA560')('is')} a leap year.`)
if (!moment([year]).isLeapYear()) console.log(`It is ${chalk.hex('AC4242')('not')} a leap year.`)
