import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    bottom: 0,
    right: 0,
    width : "100%"
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className='text-center'>copyright &copy; Mytodoslist.com</p>
    </footer>
  )
}
