import React, { useState } from "react";
import "./InstagramLogin.css";
import facebookImg from "../assets/facebook.png";
import InstaLogo from "../assets/instagram-logo.png";

function InstagramLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Kullanıcı Adı:", userName);
    console.log("Şifre:", password);
  };

  return (
    <div className="login-container">
      <div className="box-1">
        <div className="box-1-logo">
          <img src={InstaLogo} alt="#" className="instagram-logo" />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Telefon numarası, kullanıcı adı veya e-posta"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-button-box">
          <button className="login-button" onClick={handleLogin}>
            Giriş yap
          </button>
        </div>
        <div className="lines-box">
          <div className="line-1"></div>
          <div className="or-box">YA DA</div>
          <div className="line-2"></div>
        </div>
        <div className="fb-box">
          <span>
            <img src={facebookImg} alt="#" className="fb-logo" />
          </span>
          <p className="fb-link">Facebook ile Giriş Yap</p>
        </div>
        <div className="forgotten-password-box">
          <p className="forgotten-password-link">Şifreni mi unuttun?</p>
        </div>
      </div>
      <div className="box-2">
        <p>
          Hesabın yok mu? <span className="sign-up-span">Kaydol</span>
        </p>
      </div>
      <div className="get-app-box">
        <p className="get-app">Uygulamayı indir.</p>
      </div>
      <div className="app-store-google-play-box">
        <img
          src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png"
          alt="#"
          className="app-store-image"
        />
        <img
          src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png"
          alt="#"
          className="app-store-image"
        />
      </div>
    </div>
  );
}

export default InstagramLogin;
