document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      if (!check()) {
        return;
      }

      localStorage.setItem("firstName", document.getElementById("fname").value);
      localStorage.setItem("lastName",  document.getElementById("lname").value);
      localStorage.setItem("email",     document.getElementById("email").value);
      
      const sexValue = document.querySelector('input[name="sex"]:checked');
      localStorage.setItem("sex", sexValue ? sexValue.value : "");
      
      localStorage.setItem("support",   document.getElementById("supportReason").value);
  
      window.location.href = "proj_profile_Estrellan.html";
    });
  });
  
function checkIfSignedUpanddisplay() {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
  
    if (!firstName || !lastName) {
      document.getElementById("profileContent").style.display = "none";
      document.getElementById("text").innerHTML = "You have not signed up. Please go back to sign up page.";
    } else {
      document.getElementById("displayFirstName").textContent = firstName;
      document.getElementById("displayLastName").textContent = lastName;
      document.getElementById("displayEmail").textContent = localStorage.getItem("email");
      document.getElementById("displaySex").textContent = localStorage.getItem("sex");
      document.getElementById("displayReason").textContent = localStorage.getItem("support");
    }
  }
  
    document.addEventListener("DOMContentLoaded", () => {
        if (window.location.href.includes("proj_profile")) {
        checkIfSignedUpanddisplay();
        }
    });

function check() {
    let valid = true;
  
    if (document.getElementById('fname').value.trim() === "") {
      document.getElementById('fnameError').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('fnameError').style.display = 'none';
    }
  
    if (document.getElementById('lname').value.trim() === "") {
      document.getElementById('lnameError').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('lnameError').style.display = 'none';
    }
  
    let sexChecked = false;
    let options = document.getElementsByName('sex');
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        sexChecked = true;
        break;
      }
    }
    if (!sexChecked) {
      document.getElementById('sexError').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('sexError').style.display = 'none';
    }
  
    if (document.getElementById('email').value.trim() === "") {
      document.getElementById('emailError').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('emailError').style.display = 'none';
    }
  
    if (document.getElementById('pass').value.trim() === "") {
      document.getElementById('passError').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('passError').style.display = 'none';
    }
  
    if (document.getElementById('supportReason').value.trim() === "") {
      document.getElementById('supportError').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('supportError').style.display = 'none';
    }
    return valid; 
  }

  