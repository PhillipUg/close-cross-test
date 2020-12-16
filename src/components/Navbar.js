import React from 'react'
import '../assets/styles/Navbar.css'
import logo from '../assets/images/icon.svg'
import { Button } from './Button'
import { navBtnFive, navBtnFour, navBtnOne, navBtnSix, navBtnThree, navBtnTwo } from './Data'
import { FiSearch } from 'react-icons/fi'
import { BsStar } from 'react-icons/bs'
import { IconContext } from 'react-icons'

function Navbar() {
  return (
    <IconContext.Provider value={{
      color: 'var(--font-grey)', size: 24 }}>
      <div className="navbar">
        <div>
          <img src={logo} alt="logo" />
          <div className="double-btn">
            <a href="#!">Training Mode</a>
            <a href="#!">Live Mode</a>
          </div>
        </div>
        <div>
          <Button {...navBtnOne} />
          <Button {...navBtnTwo} />
          <Button {...navBtnThree} />
          <Button {...navBtnFour} />
          <Button {...navBtnFive} />
          <Button {...navBtnSix} />
        </div>
        <div>
          <FiSearch />
          <BsStar />
          <BsStar />
          <div className="user">
            <span>12</span>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Navbar
