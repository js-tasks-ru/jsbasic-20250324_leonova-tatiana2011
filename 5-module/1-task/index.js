function hideSelf() {
  const button = document.querySelector('.hide-self-button');
  
  button.addEventListener('click', (event) => {
    button.hidden = true;
  },{ once: true });
  // ваш код...
}
