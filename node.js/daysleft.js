module.exports = {
    calculateDaysLeft: function(date) {
      // Convert the input date to a JavaScript Date object
      const inputDate = new Date(date);
      
      // Get the current date
      const currentDate = new Date();
      
      // Calculate the difference in milliseconds between the input date and the current date
      const timeDiff = inputDate.getTime() - currentDate.getTime();
      
      // Calculate the number of days left
      const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
      return daysLeft;
    }
  };
  