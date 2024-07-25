const convertToCelsius = function(fTemp) {
  let newCTemp = (fTemp  - 32)* 5/9;

  return Math.round(newCTemp * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
  let newfTemp = (cTemp * 9/5) + 32;

  return Math.round(newfTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
