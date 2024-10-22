function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector('#dateTime').textContent = currentDateTime;
}

setInterval(updateDateTime, 1000);
