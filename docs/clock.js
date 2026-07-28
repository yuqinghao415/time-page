function updateBeijingClock() {
  const clock = document.getElementById('clock');

  if (!clock) {
    return;
  }

  clock.textContent = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());
}

updateBeijingClock();
setInterval(updateBeijingClock, 1000);
