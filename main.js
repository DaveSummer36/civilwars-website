function formatTime(date) {
  return date.toLocaleTimeString('hu-HU', { hour12: false });
}

function formatDate(date) {
  return date.toLocaleString('hu-HU');
}

function updateTimeandDate() {
  const now = new Date();
  document.getElementyById('currentTime').textContent = formatTime(now);
  document.getElementyById('currentDate').textContent = formatDate(now);
}

setInterval(updateTimeandDate, 1000);

function redirectToGithub() {
  const url = 'https://github.com/DaveSummer36/civilwars';
  window.open(url, '_blank');
}
