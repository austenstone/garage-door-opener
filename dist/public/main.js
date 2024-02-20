window.onload = () => {
  const openButton = document.getElementById('open');
  openButton.addEventListener('click', async () => {
    await fetch('/garage/open', { method: 'POST' });
    alert('Opening!')
  });
}

