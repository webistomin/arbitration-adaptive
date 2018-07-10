var countDownClock = function countDownClock() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'seconds';


  var d = document;
  var daysElement = d.querySelector('.days');
  var hoursElement = d.querySelector('.hours');
  var minutesElement = d.querySelector('.minutes');
  var secondsElement = d.querySelector('.seconds');
  var countdown = void 0;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case 'seconds':
        return timer(number);
      case 'minutes':
        return timer(number * 60);
      case 'hours':
        return timer(number * 60 * 60);
      case 'days':
        return timer(number * 60 * 60 * 24);
    }
  }

  function timer(seconds) {
    var now = Date.now();
    var then = now + seconds * 1000;

    countdown = setInterval(function () {
      var secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      };

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    daysElement.textContent = Math.floor(seconds / 86400);
    hoursElement.textContent = Math.floor(seconds % 86400 / 3600);
    minutesElement.textContent = Math.floor(seconds % 86400 % 3600 / 60);
    secondsElement.textContent = seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60;
  }
};

/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
countDownClock(1, 'days');
