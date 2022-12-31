import React from "react";
import loginStyles from "./login.module.scss";
import logoImg from "../../assets/img/logo.png";
import loginIllustration from "./assets/login_illustration.png";

const Login = () => {
  return (
    <div className={loginStyles.login_container}>
      <img src={logoImg} alt="Lendsqr logo" className={loginStyles.logo} />
      <div className={loginStyles.login_body}>
        <div className={loginStyles.illustration_div}>
          <img src={loginIllustration} alt="metaphorical vector illustration of a man walking through a doorway into a world of possibilities" className={loginStyles.login_illustration} />
        </div>
        <div className={loginStyles.form_div}>
          <form className={loginStyles.login_form}>
            <div>
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>

            <div></div>
            
            <div>
              <input type="email" placeholder="Email" />
              <div className={loginStyles.password_div}>
                <input type="password" placeholder="Password" />
                <span>show</span>
              </div>
              <a href="/login">forgot password?</a>
            </div>

            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login