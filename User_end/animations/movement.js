  
  function animateToPosition(){
    const Object = this.document.querySelectorAll('.animate-object');
    Object.forEach((Object) => {
      Object.classList.add('animate');
    });
  }

  function MoveToLogin(){
    const landing = this.document.querySelector('#landing_page');
    const login = this.document.querySelector('#Login_page');
    const SignUp = this.document.querySelector('#signUp');
    login.classList.remove('hide');
    SignUp.classList.add('hide');
    landing.classList.add('hide');
    animateToPosition();
  }

  function MoveToSignUp(){
    const SignUp = this.document.querySelector('#signUp');
    const login = this.document.querySelector('#Login_page');
    SignUp.classList.remove('hide')
    login.classList.add('hide');
    animateToPosition();
  }