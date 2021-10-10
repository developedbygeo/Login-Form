import regexInfo from '../utils/regex.json';

function getRegex(field) {
  const regexObj = regexInfo.filter((obj) => obj.id === field);
  const { regex } = regexObj[0];
  return regex;
}

function validate() {
  const state = this.validity;
  console.log(state);
  console.log(getRegex(this.name));

  if (state.valueMissing) {
    this.setCustomValidity('Please fill-in this field.');
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
    console.log(regularExpression);
    if (regularExpression.test(this.value) === false) {
      switch (this.name) {
        case 'firstName':
        case 'lastName':
          this.setCustomValidity('Please provide a valid first name.');
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
            'Your password should contain 7-15 characters, including one numeric digit and a special character'
          );
          this.reportValidity();
          break;
        default:
          this.setCustomValidity('');
          break;
      }
    }
  }
}
function validateSelect() {
  if (this.value === 'Select your Country') {
    this.setCustomValidity('Please select your country');
  } else {
    this.setCustomValidity('');
  }
  this.reportValidity();
}

export { validate, validateSelect };
