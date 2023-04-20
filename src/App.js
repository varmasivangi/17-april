import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './header/components/Home';
import Header from './header/Nav'
import Clothing from './header/components/Clothing';
import Electronics from './header/components/Electronics';
import Gifts_Articles from './header/components/Gifts&Articles';
import Login from './Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { Component } from 'react'
import app from './firebaseconfig'
import Cart from './header/components/Cart'
import Signup from './header/Signup';
import Adddata from './header/components/Adddata'
import Navigationbar from'./header/Nav'
import { db } from './firebaseconfig';

const auth = getAuth()

export default class App extends Component {

  state = {
    user: ""
  }
  componentDidMount() {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ user: user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }
  render() {
    return (
        <div className="App">
          {
            this.state.user ? (
              <BrowserRouter>
                <div>
                  <Header />
                </div>
              
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cloths' element={<Clothing />} />
                    <Route path='/electronics' element={<Electronics />} />
                    <Route path='/gifts&articles' element={<Gifts_Articles />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/adddata' element={<Adddata />} />
                  </Routes>
                
              </BrowserRouter>) : <Login />}

        </div>
    )
  }
}





