// import React, { Component } from 'react'
// import { db } from '../../firebaseconfig'
// import firebase from 'firebase/compat/app'


// export default class Adddata extends Component {

//     constructor() {
//         super()
//         this.state = {
//             todo: ""
//         }
//         this.store = this.store.bind(this)
//     }

//     senddata = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//     async store() {
//         console.log(this.state.todo)
//         let date = firebase.firestore.Timestamp.now()

//         const response = await db.collection("time").add({
//             date: date,
//             todoMsg: this.state.todo
//         })

//         this.setState({
//             todo: ""
//         })

//     }
//     render() {
//         return (
//             <div>
//                 <div>
//                     <center className='mt-5'>
//                         <p>
//                             <input onChange={this.senddata} name="todo" type='text' placeholder='Name' />
//                         </p>
//                         <p>

//                         </p>
//                         <button onClick={this.store}>store</button>
//                     </center>

//                 </div>
//             </div>
//         )
//     }
// }
import React, { useState } from 'react'
import { db } from '../../firebaseconfig'
import firebase from 'firebase/compat/app'


export default function Adddata() {

    const [products, setProducts] = useState([{ brand: "", price: "", imgurl: "", discount: "", idel: "" }])

    async function store() {

        let date = firebase.firestore.Timestamp.now()
        const response = await db.collection("Products").add({
            date: date,
            brand: products.brand,
            price: products.price,
            image: products.imgurl,
            discount: products.discount,
            idel: products.idel
        })
    }
    const getData = (e) => {
        setProducts({ ...products, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div>
                <center className='mt-5'>
                    <p>

                        <input
                            onChange={getData}
                            name="brand"
                            type='text'
                            placeholder='brand name' />
                        <input
                            onChange={getData}
                            name="imgurl"
                            type='text'
                            placeholder='imgurl' />
                        <input
                            onChange={getData}
                            name="price"
                            type='text'
                            placeholder='price' />
                        <input
                            onChange={getData}
                            name="discount"
                            type='text'
                            placeholder='discount' />
                        <input
                            onChange={getData}
                            name="idel"
                            type='text'
                            placeholder='idel' />
                    </p>
                    <button onClick={store}>store</button>
                </center>
            </div>
        </div>
    )
}
