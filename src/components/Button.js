import React from 'react'
import '../assets/styles/Button.css'

const STYLES = ['btn--primary', 'btn--outline']

// const SIZES = ['btn--medium', 'btn--large', 'btn--mobile']

const COLOR = ['primary', 'white', 'red', 'green']

export const Button = ({ children, type, onClick, buttonStyle, buttonColor }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  // const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null
  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
  )
}