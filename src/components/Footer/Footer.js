import React from 'react';
import "./index.scss";

const Footer = () => {
    return (
        <div class="container-fluid pt-5 footer">
            <footer style={{backgroundColor: "navbar-light"}}>
                <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright -
      <a class="text-dark" href="https://verticurl.com/">verticurl.com</a>
                </div>
            </footer>
        </div>

    )
}

export default Footer;