module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a string with only the time
  format_time: date => {
    return date.toString().split(' GMT')[0];
  }
};
