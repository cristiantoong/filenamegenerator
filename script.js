let accountNumber = document.querySelector('.acct')
let applicant = document.querySelector('.applicant')
let submitBtn = document.querySelector('.submit')
let result = document.querySelector('.result')
let error1 = document.querySelector('.error1')
let error2 = document.querySelector('.error2')


submitBtn.addEventListener('click', function(){
  let applicantValue = applicant.value;
  //let trimmedApplicantValue = applicantValue.replace(/\s+/g, '');
  let trimmedApplicantValue = applicantValue.replace(/\W+/g, '').toUpperCase();

  if((accountNumber.value.length !== 0) && applicant.value.length !== 0){
    result.innerHTML = `${accountNumber.value}_${trimmedApplicantValue}_V617179MISC`;

    //reset input
    accountNumber.value = '';
    applicant.value = '';
    accountNumber.style.border = "1px solid black";
    applicant.style.border = "1px solid black";
    error1.innerHTML = '';
    error2.innerHTML = '';
    
  } else if(accountNumber.value.length == 0){
    accountNumber.style.border = "1px solid red";
    error1.innerHTML = 'fields cannot be blank';
  } else if(applicant.value.length == 0){
    applicant.style.border = "1px solid red";
    error2.innerHTML = 'fields cannot be blank';
  } else {
    accountNumber.style.border = "1px solid red";
    applicant.style.border = "1px solid red";
    error1.innerHTML = 'fields cannot be blank';
    error2.innerHTML = 'fields cannot be blank';
  }



})