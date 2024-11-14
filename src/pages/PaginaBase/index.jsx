import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/container'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

function PageBase() {
  return (
    <main>
        <Header/>
        <Container>
            <Outlet/>
        </Container>
        <Footer/>   
    </main>
  )
}

export default PageBase
