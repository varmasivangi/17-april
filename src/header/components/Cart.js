import React, { Component } from 'react'
import Home from './Home'

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
     cartData:this.props.addCart
     
    };
  }
  
  render() {
    console.log("sjbvsfb",this.state.cartData)
    return (
      <div className='container-fluid'>
             {/* {this.state.cartData.brand} */}
      </div>
    )
  }
}
