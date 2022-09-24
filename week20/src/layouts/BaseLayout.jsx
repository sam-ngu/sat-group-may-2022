import React from 'react'
import Navbar from './nav/Navbar'

export default function BaseLayout(props) {
  return (
    <main>

      {/* header */}
      <Navbar/>

      {/* content */}
      {props.children}


      {/* footer */}
      


    </main>
  )
}
