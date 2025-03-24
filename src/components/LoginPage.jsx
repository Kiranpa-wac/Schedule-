import React from "react";
import useAuthentication from "../hooks/useAuthentication";
import { GoogleLogin } from "@react-oauth/google";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FaFacebook } from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
  const { handleGoogleLogin, handleFbLogin } = useAuthentication();
  return (
    <div className="full-screen-container">
      <div className="card">
        <h1 className="title">Welcome to</h1>
        <p className="description">Sign in with Google to continue</p>
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log("Login Failed")}
        />
        <LoginSocialFacebook
          appId="1037624625053971"
          onResolve={handleFbLogin}
          onReject={(error) => console.log("Login Failed")}
        >
          <button className="facebook-button">
            <FaFacebook className="facebook-icon" />
            <span className="facebook-text">Login with Facebook</span>
          </button>
        </LoginSocialFacebook>
        <p className="terms">
          By signing in, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
