function showDiv(target, classList) {
  const targetElement = document.querySelector(`.${target}`);
  targetElement.classList.add(`${classList}`);
}
function hideDiv() {
  const targetElement = document.querySelector('.register-success');
  targetElement.classList.remove('register-success-active');
}
export { showDiv, hideDiv };
