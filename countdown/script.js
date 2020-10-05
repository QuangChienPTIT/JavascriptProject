const newYear = "1 Jan 2021";
const secondsEle = document.querySelector(".seconds p");
const minutesEle = document.querySelector(".minutes p");
const hoursEle = document.querySelector(".hours p");
const daysEle = document.querySelector(".days p");
function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  secondsEle.innerHTML = dateSupport.getSeconds(currentDate, newYearDate);
  hoursEle.innerHTML = dateSupport.getHours(currentDate, newYearDate) - 1;
  minutesEle.innerHTML = dateSupport.getMinutes(currentDate, newYearDate) - 1;
  daysEle.innerHTML = dateSupport.getDays(currentDate, newYearDate);
}

var dateSupport = {
  getDays: (d1, d2) => {
    var t2 = d2.getTime();
    var t1 = d1.getTime();
    return parseInt((t2 - t1) / (24 * 3600 * 1000));
  },
  getMonths: (d1, d2) => {
    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();
    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  },
  getHours: (d1, d2) => {
    var d1H = d1.getHours();
    var d2H = d2.getHours();
    return Math.abs(d2H - d1H + 24);
  },
  getMinutes: (d1, d2) => {
    var d1H = d1.getMinutes();
    var d2H = d2.getMinutes();
    return d2H - d1H + 60;
  },
  getSeconds: (d1, d2) => {
    var d1H = d1.getSeconds();
    var d2H = d2.getSeconds();
    return d2H - d1H + 60;
  },
  getDaysInMoth: (month, year) => {
    return new Date(year, month, 0).getDate();
  },
};
countdown();
setInterval(countdown, 1000);
