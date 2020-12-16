import React from 'react'
import '../assets/styles/Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const COLOR = ['primary', 'white', 'green', 'green--outline']

export const Button = ({ children, type, onClick, buttonStyle, buttonColor }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null
  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
  )
}