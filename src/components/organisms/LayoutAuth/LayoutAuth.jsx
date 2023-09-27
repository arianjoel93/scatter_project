
//styles
import "./LayoutAuth.scss"

import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "../Footer/Footer"
import WhatsApp from "../../molecules/WhatsApp/WhatsApp"
import ScrollButton from "../../molecules/ScrollButton/ScrollButton"
import { init } from "../../../helpers/helpers"
import HeaderAuth from "../HeaderAuth/HeaderAuth"

const LayoutAuth = () => {

    useEffect(() => {
        init()
    }, [])

    return (
        <div className='LayoutAuth'>
            <HeaderAuth/>
            <main className='mainContainer'>
                <Outlet />
            </main>
            <Footer />
            <WhatsApp></WhatsApp>
            <ScrollButton></ScrollButton>
        </div>
    )
}

export default LayoutAuth