import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'

export default function Navbar({size,setShow}) {
  return (
    <nav>
        <div className="nav-box">
            <span className='my-shop'>
                Shoppee
            </span>
            <div className="cart" >
                <span onClick={()=>setShow(false)}>
                    <i className='fa fa-cart-plus'></i><span><sup>{size}</sup></span>
                </span>
            </div>
        </div>
    </nav>
  )
}
