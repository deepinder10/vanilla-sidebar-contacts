/**
 * create a Set to store invlalid values
 */
let formValidSet = new Set();
formValidSet.add('name');
formValidSet.add('email');

/**
 * Rules to validate the inputs, regex are given for email and name(1 character long atleast)
 */
function validationRules() {
  return {
    name: (inputProps) => {
      const usernameValidationRule = /[A-Za-z0-9]{1,}/;
      const inputValue = inputProps.value;
      const inputName = inputProps.name;
      const isInputValid = usernameValidationRule.test(inputValue);

      isInputValid ? formValidSet.delete(inputName) : formValidSet.add(inputName);

      return true;
    },
    email: (inputProps) => {
      const emailValidationRule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const inputValue = inputProps.value;
      const inputName = inputProps.name;
      const isInputValid = emailValidationRule.test(inputValue);

      isInputValid ? formValidSet.delete(inputName) : formValidSet.add(inputName);

      return true;
    }

  }
}

/**
 * check whether the form is valid, and set disabled attribute on nextbtn reference.
 * @param {*} nextBtn 
 */
function checkFormValid(nextBtn) {
  if (formValidSet.size) {
    nextBtn.setAttribute('disabled', true);
  } else {
    nextBtn.removeAttribute('disabled');
  }
}

/**
 * Function called on each keyup event which checks the values
 * @param {*} inputProps 
 */
function validateForm(inputProps) {
  const inputName = inputProps.name;
  const verifyInputName = {
    'name': validationRules().name,
    'email': validationRules().email
  };

  return verifyInputName[inputName](inputProps)
}

/**
 * keyup event listener attached to form
 * @param {*} contactForm 
 * @param {*} nextBtn 
 */
function attachKeyUpEvent(contactForm, nextBtn) {
  contactForm.addEventListener('keyup', function (event) {
    const nodeName = event.target.nodeName;
    const inputProps = event.target;

    if (nodeName === 'INPUT') {
      validateForm(inputProps);
    }
    checkFormValid(nextBtn);
  });
}

function formValidationInit(form, nextBtn) {
  attachKeyUpEvent(form, nextBtn);
}

export default formValidationInit;