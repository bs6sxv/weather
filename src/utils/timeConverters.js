export const dateConverter = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + " " + date;
  return time;
};

export const sunriseConverter = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = " " + hour + ":" + min;
  return time;
};

export const sunsetConverter = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = " " + hour + ":" + min + "0";
  return time;
};

export const toRegularTime = (militaryTime) => {
  const [hours, minutes] = militaryTime.split(':');
  return `${(hours > 12) ? hours - 12 : hours}:${minutes} ${(hours >= 12) ? 'PM' : 'AM'}`;
}