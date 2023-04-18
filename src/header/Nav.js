import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'
import { signOut, getAuth } from 'firebase/auth'
import app from '../firebaseconfig'
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material'
import Button from '@mui/material/Button';

import(signOut)
const auth = getAuth()
export default class Header extends Component {

  signOut = () => {
    signOut(auth)
  }
  render() {
    return (
      <div className='row nav'>
        <div className='col-1 text-center'>
          <Link to="/" >
            <img className='logo m-2' src='https://static.vecteezy.com/system/resources/previews/015/131/880/original/flat-woman-holding-shopping-bags-cartoon-wallpaper-modern-design-for-shopping-online-website-design-png.png' alt="Logo" />
          </Link>
        </div>
        <div className='col-3 p-4'>
          <div className='input'>
            <input type='text' />

          </div>
        </div>
        <div className='col-5 p-4 text-center'>
          <Link id="1" to="/cloths">Clothing</Link>
          <Link id="2" to="/electronics">Electronics</Link>
          <Link id="3" to="/gifts&articles">Gifts&Articles</Link>
          <Link id="4" to='/signup'>Signup</Link>
          <Link to='/adddata'>Adddata</Link>
        </div>
        <div className='col-2 p-4'>


          <Button variant="contained" style={{ color: "white" }} className='btn btn-light' onClick={this.signOut}>signOut</Button>


        </div>
        <div className='col-1 p-4 d-flex'>
          <Badge badgeContent={4} color='primary'>
            <Link to="/cart">
              <ShoppingCartIcon className=' icon fs-2' />
            </Link>
          </Badge>
          <Avatar className='ms-3' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </div>
    )
  }
}

