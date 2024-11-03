function validateForm(form) {
    const { email, password } = form;
    if (!email || !password) {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      return false;
    }
  
    return true;
  }
  console.log(validateForm({ email: 'test@example.com', password: 'Password1' }));
  