//styles
import "./Header.scss"

//assets
import scatter from "../../../assets/Scatter.png"
import logo from "../../../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import GeneralButton from "../../atoms/GeneralButton/GeneralButton"
import HeaderMobile from "../HeaderMobile/HeaderMobile"



const Header = () => {
    const navigate = useNavigate()
    const screen = window.screen.width
    const optionNav = [
        { title: "Home", url: "/" },
        { title: "Services", url: "/services" },
        { title: "About us", url: "/about-us" },
    ]

    return (
        <>
            {screen > 768 ? (
                <header className='Header'>
                    <div className="c_main">
                        <div className="logos" onClick={() => navigate('/')}>
                            <img className="logo1" src={logo} />
                            <img src={scatter} />
                        </div>
                        <div className="right">
                            <nav className="navBar">
                                {optionNav.map((option, index) => {
                                    return (
                                        <div key={index} className="option">
                                            <Link to={option.url} key={index}>{option.title}</Link>
                                        </div>
                                    )
                                })}
                            </nav>
                            <div className="buttons_container">
                                <GeneralButton className="logIn" text={"Contact us"} />
                                <Link to={"/auth/sign-in"}>
                                    <button className="signIn">Sign in</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
            ) : (
                <HeaderMobile />
            )}
        </>
    )
}

export default Header