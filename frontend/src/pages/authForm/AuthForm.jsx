import {Link} from "react-router"
import InputBox from "../../components/inputBox/InputBox";
import google_logo from "../../assets/google.png"
import './authForm.css'


function AuthForm({type}) {
  

  return (
    <div className="authForm_wrapper">
      <form className="authForm">
        <h1 className="authForm_title">
          {type == "sign-in" ? "Welcome back" : "Join us today"}
        </h1>
        <div className="authForm_fields">
        {
          type == "sign-up" && (
            <div className="authForm_field">
              <InputBox type="text" placeholder="Your full name" id="fullname" name="fullname" icon="user" />
            </div>
          )
        }
          <div className="authForm_field">
            <InputBox type="text" placeholder="Your email address" icon="envelope" name="email" id="email" />
          </div>
          <div className="authForm_field">
            <InputBox 
              type="password" 
              placeholder={type =="sign-in" ? "Your password" : "A strong password"}
              icon="key" 
              name="password" 
              id="password" />
          </div>
        </div>
        <button className="authForm_btn" type="submit">
          {type.replace("-", " ")}
        </button>
        <div className="divider">
          <hr/>
          <span>
            Or 
          </span> 
          <hr/>
        </div>
        <div>
          <button className="authForm_btn google-btn" type="submit">
              <img src={google_logo} alt="Google logo" width="20" height="20"/>
              Continue with Google
          </button>
          <p className="authForm_indication">
            {
              type == "sign-in" ? "Don't have an account ?" : "Already a membre ?" 
            }
            {
              type == "sign-in" ? (<Link to="/signup">Join us to day</Link>) : (<Link to="/signin">Sign in here</Link>)
            }
          </p>
        </div>
      </form>
    </div>
  )
}

export default AuthForm
