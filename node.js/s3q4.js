const readline = require('readline');
const daysLeftModule = require('./days_left');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the start date (YYYY-MM-DD): ', function(startDate) {
  rl.question('Enter the end date (YYYY-MM-DD): ', function(endDate) {
    const daysDifference = daysLeftModule.calculateDaysDifference(startDate, endDate);
    console.log(`Difference in days: ${daysDifference}`);
    rl.close();
  });
});
