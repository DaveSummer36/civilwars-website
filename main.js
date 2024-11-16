function formatDate(date) {
  return date.toLocaleString('hu-HU');
}

let dateElement = document.getElementById('currentDate');
let countdownElement = document.getElementById('releaseDateCountDown');

function updateTimeandDate() {
  const now = new Date();
  
  if(dateElement) {
    dateElement.textContent = formatDate(now);
  } else {
    console.error('dateElement isn\'t defined.');
  }
}

function updateCountdown() {
  const releaseDate = new Date('2026-08-26T12:00:00');
  const now = new Date();
  const timeDifference = releaseDate - now;

  if(timeDifference <= 0) {
    countdownElement.textContent = 'The release time is arrived';
    clearInterval(countdownInterval);
    return;
  }
    
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  let milliseconds = '';
  if(days <= 31) {
    const ms = timeDifference % 1000;
    milliseconds = `, ${ms} milliseconds`;
  }

  countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds}`;
}

setInterval(updateTimeandDate, 1000);
const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
updateTimeandDate();

function redirectToGithub() {
  const url = 'https://github.com/DaveSummer36/civilwars';
  window.open(url, '_blank');
}
