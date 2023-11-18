import React from 'react'
import "../components/HomeStyle.css"

const Header = (props) => {
  return (
    <div>
      <div className='logo'>
        <h1 className='Header'>Welcome BACK Home BRO</h1>
      </div>
      <div className='navbar'>
        <ul>
            <li className= {this.props.className}>{this.props.nav}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
