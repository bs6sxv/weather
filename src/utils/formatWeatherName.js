const formatWeatherName = (weatherName) =>
  JSON.stringify(weatherName, undefined, 4).replace(/^"(.*)"$/, "$1");

export default formatWeatherName;
