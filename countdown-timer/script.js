const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = '1 Jan 2021';

function countdown() {
	const newYearDate = new Date(newYear);
	const currentDate = new Date();

	const diff = (newYearDate - currentDate) / 1000;

	const days = Math.floor(diff / 3600 / 24);
	const hours = Math.floor(diff / 3600) % 24;
	const minutes = Math.floor(diff / 60) % 60;
	const seconds = Math.floor(diff % 60);

	daysEl.textContent = days;
	hoursEl.textContent = format(hours);
	minutesEl.textContent = format(minutes);
	secondsEl.textContent = format(seconds);
}

function format(time) {
	return (time<10)?`0${time}`:time;
}

// First time calling
countdown();

// calling with 1 second interval
setInterval(countdown, 1000);