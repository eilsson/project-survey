import React from 'react'
import './header.css'

export const Header = (props) => {
  return (
    <header className="survey-header">
      <h1 className="survey-header-title">{props.title}</h1>
      <p className="survey-description">{props.description}</p>
      {props.children}
    </header>
  )
}