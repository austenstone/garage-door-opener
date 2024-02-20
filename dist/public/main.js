window.onload = () => {
  const openButton = document.getElementById('open');
  openButton.addEventListener('click', async () => {
    const response = await fetch('/garage/open', { method: 'POST' });
    const data = await response.json();
    
    alert('Opening!')
  });
}

