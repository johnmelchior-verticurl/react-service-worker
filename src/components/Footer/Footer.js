import React from 'react';
import "./index.scss";

const Footer = () => {
    return (
        <div className="container-fluid pt-5 footer">
            <footer style={{backgroundColor: "navbar-light"}}>
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright -
      <a className="text-dark" href="https://verticurl.com/">verticurl.com</a>
                </div>
            </footer>
        </div>

    )
}

export default Footer;