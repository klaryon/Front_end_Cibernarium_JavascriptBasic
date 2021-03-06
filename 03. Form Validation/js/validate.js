//these variables will be used in the event listener to apply or remove input's invalid color
const form = document.getElementById('myFormId');
const form2 = document.getElementById('myFormId2');
const form3 = document.getElementById('myFormId3');

//search function
function searchValidate() {
  let acumErrores = 0;
	
  form.classList.remove('is-invalid'); //removes indicated classes. Removing a non-existing class doesn't cause error.
  form_event(form); //.addEventListener function
  
  // let inputSearch = document.getElementById('inputSearch'); 
  let inputSearch = document.forms["myForm"]["inputSearch"];

  if(inputSearch.value == "") {
		inputSearch.classList.add("is-invalid"); //adds atributes to existing class. It is only for lecture. 
		document.getElementById("errorSearch").textContent = "Required field"; //.textContent returns text of the specified node
		acumErrores ++; //adds accumulated errors
	}else if(inputSearch.value.length < 3) { 
    inputSearch.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "Enter at least 3 characters"; 
		acumErrores ++;
  }

  if (acumErrores > 0){
    return false;
    }else{
    return true;
  }
}

//sign in function
function signinValidate() {
  let acumErrores = 0;
	
  form2.classList.remove('is-invalid');
  form_event(form2);
  
  // let inputEmail = document.getElementById('inputEmail');
  // let inputPassword = document.getElementById('inputPassword');

  let inputEmail = document.forms["myForm2"]["inputEmail"];
	let inputPassword = document.forms["myForm2"]["inputPassword"];

  if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Required field";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Please enter a valid email address";
		acumErrores ++;
	}

  if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Required field";
		acumErrores ++;
	}else if(inputPassword.value.length < 8) { 
    inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Password must be al least 8 characters";
		acumErrores ++;
  }

  if (acumErrores > 0){
    return false;
    }else{
    return true;
  }
}

//create account function
function registerValidate() {
	let acumErrores = 0;
	
  form3.classList.remove('is-invalid');
  form_event(form3);
	
  // let inputEmail2 = document.getElementById('inputEmail2');
  // let inputPassword2 = document.getElementById('inputPassword2');
  // let inputRepeatPassword = document.getElementById('inputRepeatPassword');
  // let inputAddress = document.getElementById('inputAddress');
  // let inputProvince = document.getElementById('inputProvince');
  // let inputCity = document.getElementById('inputCity');
  // let inputZip = document.getElementById('inputZip');
  // let gridCheck = document.getElementById('gridCheck');
  
  let inputEmail2 = document.forms["myForm3"]["inputEmail2"];
  let inputPassword2 = document.forms["myForm3"]["inputPassword2"];
  let inputRepeatPassword = document.forms["myForm3"]["inputRepeatPassword"];
	let inputAddress = document.forms["myForm3"]["inputAddress"];
	let inputProvince = document.forms["myForm3"]["inputProvince"];
	let inputCity = document.forms["myForm3"]["inputCity"];
	let inputZip = document.forms["myForm3"]["inputZip"];
	let gridCheck = document.forms["myForm3"]["gridCheck"];

  if(inputEmail2.value == "") {
		inputEmail2.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "Required field";
        acumErrores ++;
    }else if(!validar_email(inputEmail2.value)){
		inputEmail2.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "Please enter a valid email address";
		acumErrores ++;
	}

  if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Required field";
		acumErrores ++;
	}else if(inputPassword2.value.length < 8) { 
    inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Password must be al least 8 characters";
		acumErrores ++;
  }

  if(inputRepeatPassword.value == "") {
		inputRepeatPassword.classList.add("is-invalid");
		document.getElementById("errorRepeatPassword").textContent = "Required field";
		acumErrores ++;
  }else if(inputRepeatPassword.value != inputPassword.value) { 
    inputRepeatPassword.classList.add("is-invalid");
		document.getElementById("errorRepeatPassword").textContent = "Both passwords must be equal";
		acumErrores ++;
  }
  
  if(inputAddress.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "Required field";
		acumErrores ++;
	}

  if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Required province";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Required City";
		acumErrores ++;
	}
	
	if(inputZip.value == "") {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "Required field";
		acumErrores ++;
  } else if(inputZip.value.length != 5) { 
    inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "Please enter a valid zip code";
    acumErrores ++;
  }
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "";
		acumErrores ++;
	}

  if (acumErrores > 0){
        return false;
  }else{
		return true;
	}
}

//Removes invalid color from input when valid
function form_event(formEvent) {
  formEvent.addEventListener('blur', (event) => {
    console.log(event);
    if(event.target.value!='') event.target.classList.remove('is-invalid');
  }, true);
}

//Validates email characters
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}