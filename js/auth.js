//registration
const regForm = document.querySelector('#reg-form');
if(regForm){
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
    //get user info
    const email = regForm['email'].value;
    const password = regForm['password'].value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
        
                window.alert("Error:" + errorMessage);
              });
              userCred();
    })  
}

// logout
const logout = document.querySelector('#logout');
if(logout) {
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(()=> {
            window.location = "login.html";
        });
    } )
}

//login
const loginForm = document.querySelector('#login-form');
if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
    //get user info
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(cred =>{
        loginForm.reset();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error:" + errorMessage);
          });
        }) 
        userCred();
    });
}
//get user email when user is loged in 
function userCred() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var email = user.email;
      window.location = "categories.html?email=" + email;
    } 
  });
}


