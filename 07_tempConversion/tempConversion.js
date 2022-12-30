const convertToCelsius = function(temperature) {
  let celsiusTemp = Math.round(((temperature - 32) * (5/9)) * 10) / 10;
  return celsiusTemp;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheitTemp = Math.round(((temperature * 1.8) + 32) * 10) / 10;
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
