import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="#">
          <img className="logo" src="../../pictures/logo.png" alt="currency convertor logo" />
        </a>
      </div>
      <p className="header-title">Currency Converter</p>
    </header>
  );
}

export default Header;
