import React from 'react'
import './button.css'

export const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled} >
      {props.text}
    </button>
  )
}