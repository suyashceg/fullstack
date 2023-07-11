module.exports = {
    calculateDaysDifference: function(startDate, endDate) {
      // Convert the input dates to JavaScript Date objects
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      // Calculate the time difference in milliseconds
      const timeDiff = Math.abs(end.getTime() - start.getTime());
  
      // Calculate the number of days
      const daysDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
      return daysDifference;
    }
  };
z  