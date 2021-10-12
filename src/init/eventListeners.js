import animateGsap from '../utils/animation';
import { validate, validateSelect, preventSubmission } from './validate';
import { hideDiv } from '../utils/showDiv';
import showPassword from '../utils/showPass';

function introAnimations() {
  window.addEventListener(
    'load',
    animateGsap('.logo', '.title', 'label', '.info', '.show', '.register')
  );
}
// TODO buttons to reveal password
function validityCheck() {
  // cache DOM
  const form = document.querySelector('form');
  const allInputs = form.querySelectorAll('input');
  const allShowPasswordButtons = form.querySelectorAll('.show');
  const registerBtn = form.querySelector('.register');
  const successBtn = document.querySelector('.close');
  // event listeners
  allInputs.forEach((input) => input.addEventListener('input', validate));
  allShowPasswordButtons.forEach((button) =>
    button.addEventListener('click', showPassword)
  );
  registerBtn.addEventListener('click', validateSelect);
  form.addEventListener('submit', preventSubmission);
  successBtn.addEventListener('click', hideDiv);
}

export { introAnimations, validityCheck };
