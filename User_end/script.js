function Login(Email, Password){
    fetch('http://localhost:5000/Devlabmusic/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: Email,
    password: Password,
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if(data.user){
      window.location.href = "./app/dashboard.html"
    }
  })
  .catch(error => {
    console.log(error)
  });
}

function LoginClick(){
    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;
    Login(email, password);
}



function SignUp(User, Email, Password){
    fetch('http://localhost:5000/Devlabmusic/api/auth/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: User,
    email: Email,
    password: Password,
  }),
})
  .then(response => response.json())
  .then(data => {
        console.log(data.user);
        if(data.user){
          window.location.href = "./app/dashboard.html"
        }
       
  })
  .catch(error => {
    console.log(error)
  });
}

function SignUpClick(){
    const email = document.querySelector('#email-signUp').value;
    const password = document.querySelector('#password-signUp').value;
    const Username = document.querySelector('#username-signUp').value;

    alert(email, password, Username);
    SignUp(Username, email, password);
}