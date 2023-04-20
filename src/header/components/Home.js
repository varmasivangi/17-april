import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../firebaseconfig'

export default function Home() {

  const [list, setList] = useState([])

  useEffect(() => {
    retrieve()

  }, [])

  async function retrieve() {

    const dataRef = db.collection("Products")
    const snapShot = await dataRef.get()

    setList(snapShot.docs.map((doc) => (
      {
        date: doc.data().date.toDate().toDateString(),
        brand: doc.data().brand,
        price: doc.data().price,
        discount: doc.data().discount,
        image: doc.data().image,
        idel: doc.data().idel

      }
    )))
  }
  return (
    <div className='row p-0 m-0'>

      {
        list.map((e) => (


          <div className='col-12 col-xsm-3 col-sm-4 col-md-3 col-lg-2 m-3 card'>
            <div className='row'>
              <p>{e.brand}</p>
            </div>
            <div className='row'>
              <img height="300px" src={e.image} alt="" />
            </div>
            <div className='row'>
              <div className='col-6 text-start p-2'>
                Rs.{e.price}
              </div>
              <div className='col-6 text-end p-2'>
                <button onClick={() => {
                  let addCart = e
                  console.log(addCart)
                }} className='btn' style={{ backgroundColor: "orangered", color: "white", }}>Add</button>
              </div>
            </div>


          </div>

        ))


      }
    </div>
  )
}




