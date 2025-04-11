function toggleText() {
  const button = document.querySelector('.toggle-text-button'); 
  const text = document.getElementById('text');
  
  button.addEventListener('click', (event) => { 
    text.hidden = !text.hidden;
  // ваш код...
});
  // ваш код...
}
