import React, { useState } from 'react';
import './AuthLogin.css'; // Assuming you have a CSS file for styling

const AuthLogin = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div className='authFormContainer'>
    <section className={`wrapper ${isLoginActive ? 'active' : ''}`}>
      <div className="form signup">
        <header onClick={toggleForm}>Forget Password</header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <input type="submit" value="Update Password" className='slide' />
        </form>
      </div>
      <div className="form login">
        <header onClick={toggleForm}>Login</header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <input type="submit" value="Login"/>
        </form>
      </div>
    </section>
    </div>
  );
};

export default AuthLogin;
