'use strict';

const dayy = document.getElementById('day');
const hourr = document.getElementById('hour');
const minutee = document.getElementById('minute');
const secondd = document.getElementById('second');

const countDown = function () {
  const countDate = new Date('April 22, 2022 00:00:00');
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  /// calculate

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  dayy.innerHTML = `${textDay}`;
  hourr.innerHTML = `${textHour}`;
  minutee.innerHTML = `${textMinute}`;
  secondd.innerHTML = `${textSecond}`;
};

setInterval(countDown, 1000);
