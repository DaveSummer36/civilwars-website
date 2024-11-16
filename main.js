function formatTime(date) {
  return date.toLocaleTimeString('hu-HU', { hour12: false });
}

function formatDate(date) {
  return date.toLocaleString('hu-HU');
}

let timerElement = document.getElementyById('currentTime');
let dateElement = document.getElementyById('currentDate');

function updateTimeandDate() {
  const now = new Date();

  if(timerElement) {
    timerElement.textContent = formatTime(now);
  } else {
    console.error('timerElement isn\'t defined.');
  }

  if(dateElement) {
    dateElement.textContent = formatDate(now);
  } else {
    console.error('dateElement isn\'t defined.');
  }
}

setInterval(updateTimeandDate, 1000);

updateTimeandDate();

function redirectToGithub() {
  const url = 'https://github.com/DaveSummer36/civilwars';
  window.open(url, '_blank');
}
