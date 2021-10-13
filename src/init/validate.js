import regexInfo from '../utils/regex.json';
import { showDiv } from '../utils/showDiv';
import throwConfetti from '../utils/confetti';

function getRegex(field) {
  const regexObj = regexInfo.filter((obj) => obj.id === field);
  const { regex } = regexObj[0];
  return regex;
}
function validatePassword() {
  const originalPassword = document.querySelector('#password').value;
  return `${originalPassword}`;
}
// TODO on form submission, bind this to the form itself
function validate() {
  const state = this.validity;
  if (state.valueMissing) {
    this.setCustomValidity('Please fill this field.');
  } else if (state.rangeUnderflow) {
    this.setCustomValidity('Invalid value (too low).');
  } else if (state.rangeOverflow) {
    this.setCustomValidity('Invalid value (too high).');
  } else if (state.badInput) {
    this.setCustomValidity('Please provide a valid value.');
  } else if (state.patternMismatch) {
    this.setCustomValidity('Please provide the correct details.');
  } else {
    this.setCustomValidity('');
  }
  const validity = this.checkValidity();
  if (validity) {
    const regularExpression = new RegExp(getRegex(this.name));
    if (regularExpression.test(this.value) === false) {
      switch (this.name) {
        case 'firstName':
        case 'lastName':
          this.setCustomValidity(
            `Please provide a valid ${this.name.split('N')[0]} name.`
          );
          this.reportValidity();
          break;
        case 'email':
          this.setCustomValidity(
            'Please provide a valid email, containing "@" and a valid domain.'
          );
          this.reportValidity();
          break;
        case 'zip':
          this.setCustomValidity('Please provide a numeric-only zip code.');
          break;
        case 'password':
          this.setCustomValidity(
            'Your password should contain 7-15 characters, including one numeric digit and a special character.'
          );
          this.reportValidity();
          break;
        default:
          this.setCustomValidity('');
          break;
      }
    }
    if (this.name === 'passwordConfirm') {
      if (this.value !== validatePassword()) {
        this.setCustomValidity(
          'Please confirm your password, so it matches 100% the one previously provided.'
        );
        this.reportValidity();
      }
    }
  }
  return true;
}

function validateSelect() {
  const countrySelect = document.querySelector('#country');
  const fieldValue = countrySelect.value;
  if (fieldValue === 'default') {
    countrySelect.setCustomValidity('Please select your country.');
    countrySelect.reportValidity();
  } else {
    countrySelect.setCustomValidity('');
  }
}
function preventSubmission(e) {
  e.preventDefault();
  this.reset();
  showDiv('register-success', 'register-success-active');
  throwConfetti();
}

export { validate, validateSelect, preventSubmission };
