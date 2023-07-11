const readline = require('readline');
const daysLeftModule = require('./daysleft');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a date (YYYY-MM-DD): ', function(date) {
  const remainingDays = daysLeftModule.calculateDaysLeft(date);
  console.log(`Remaining days: ${remainingDays}`);
  rl.close();
});
