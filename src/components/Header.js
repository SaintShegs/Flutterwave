import React from 'react'
import Daadas from "../images/Dasdas Logo 1.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="header" aria-label="Page heading">
            <div className="header__image">
                <Link to="/"><img src={Daadas} alt="logo" /></Link>
            </div>

            <div className="header__logo" aria-label="Social media icons">
                <a href="https://twitter.com/theflutterwave"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://flutterwave.com/ng/"><i className="fa fa-globe"></i></a>
                <a href="https://www.figma.com/file/9XGAZezd4zERCQGtRwbm2Z/Blog-Template-(Community)?node-id=202%3A201"><i className="fa-brands fa-figma"></i></a>
                <a href="https://github.com/SaintShegs/Flutterwave"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>


    </div>
  )
}

export default Header