import React from 'react'
import Daadas from "../images/Dasdas Logo 1.png"
import Twitter from "../images/Twitter.png"
import Git from "../images/Git Vector.png"

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="header__image">
                <img src={Daadas} alt="logo" />
            </div>

            <div className="header__logo">
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa fa-globe"></i></a>
                <a href=""><i className="fa-brands fa-figma"></i></a>
                <a href=""><i className="fa-brands fa-github"></i></a>
            </div>
        </div>


    </div>
  )
}

export default Header