import { useState } from 'react'
import { Fragment } from 'react'
import './index.css'
import Header from './components/header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {

  return (
    <Fragment>
      {/* header */}
      <Header />
      {/* header ends  */}
      {/* body  */}
      <Body />
      {/* body  ends */}
      {/* Footer  */}
      <Footer />
      {/* Footer ends */}
    </Fragment>
  )
}

export default App


