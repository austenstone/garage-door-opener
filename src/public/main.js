window.onload = () => {
  addEventListeners();
}

const addEventListeners = () => {
  const openButton = document.getElementById('open');
  openButton.addEventListener('click', async () => {
    await fetch('/garage/open', {
      method: 'POST'
    });
    alert('Opening!')
  });

  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', () => {
    alert('Closing!')
  });
}
