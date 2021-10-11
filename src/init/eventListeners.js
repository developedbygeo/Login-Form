import animateGsap from '../utils/animation';
import { validate, validateSelect, preventSubmission } from './validate';

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
  const registerBtn = form.querySelector('.register');
  // event listeners
  allInputs.forEach((input) => input.addEventListener('input', validate));
  registerBtn.addEventListener('click', validateSelect);
  form.addEventListener('submit', preventSubmission);
}

export { introAnimations, validityCheck };
