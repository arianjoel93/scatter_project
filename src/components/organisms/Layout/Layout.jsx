
//styles
import "./Layout.scss"

import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import WhatsApp from "../../molecules/WhatsApp/WhatsApp"
import ScrollButton from "../../molecules/ScrollButton/ScrollButton"
import { init } from "../../../helpers/helpers"

const Layout = () => {

    useEffect(() => {
        init()
    }, [])

    return (
        <div className='Layout'>
            <Header />
            <main className='mainContainer'>
                <Outlet />
            </main>
            <Footer />
            <WhatsApp></WhatsApp>
            <ScrollButton></ScrollButton>
        </div>
    )
}

export default Layout