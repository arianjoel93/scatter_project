import "./HeaderMobile.scss"

//assets
import scatter from "../../../assets/Scatter.png"
import home from "../../../assets/icons/home.svg"
import about from "../../../assets/icons/scatter.svg"
import services from "../../../assets/icons/services.svg"
import contact from "../../../assets/icons/contact.svg"

//react
import { Link } from "react-router-dom"
import { useState } from "react"
import { Sidebar } from 'primereact/sidebar';
import GeneralButton from "../../atoms/GeneralButton/GeneralButton"

const HeaderMobile = () => {
    const [visibleRight, setVisibleRight] = useState(false)
    const optionNav = [
        { title: "Home", icon: home, url: "/" },
        { title: "About us", icon: about, url: "/about-us" },
        { title: "Services", icon: services, url: "/services" },
    ]
    return (
        <header className='HeaderMobile'>
            <div className="c_main">
                <img src={scatter} />
                <button className="menu" onClick={() => setVisibleRight(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#006800" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>
            </div>
            <Sidebar className="SidebarMenu" visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <img className="logo" src={scatter} />
                <nav className="navBar">
                    {optionNav.map((option, index) => {
                        return (
                            <Link className="option" to={option.url} key={index}>
                                <img src={option.icon} />
                                <p key={index}>{option.title}</p>
                            </Link>
                        )
                    })}
                </nav>
                <Link to='https://wa.me/+5213344703129' target="_bank">
                    <GeneralButton className={"contact"} text={"Contact us"} />
                </Link>
                {/* <div className="buttons_container">
                    <GeneralButton className={"btn"} text={"Log In"} />
                    <GeneralButton className={"btn"} text={"Sing Up"} />
                </div> */}
            </Sidebar>
        </header>
    )
}

export default HeaderMobile