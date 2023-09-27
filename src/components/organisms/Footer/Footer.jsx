//astyles
import "./Footer.scss"

//assets
import logo from "../../../assets/logo.png"
import scatter from "../../../assets/ScatterDark.png"
import facebook from "../../../assets/icons/facebook.svg"
import insta from "../../../assets/icons/instagram.svg"
import twitter from "../../../assets/icons/twitter.svg"
import { Link } from "react-router-dom"


const Footer = () => {

    const social = [
        { name: facebook, url: "https://www.facebook.com/profile.php?id=61550516717822&mibextid=ZbWKwL" },
        { name: insta, url: "https://www.instagram.com/scatterscience/" },
        { name: twitter, url: "https://twitter.com/ScatterScience" },
    ]

    const optionNav = [
        { title: "Home", url: "/" },
        { title: "Services", url: "/services" },
        { title: "About us", url: "/about-us" },
    ]


    return (
        <footer className='Footer'>
            <div className="Container" style={{ display: 'flex', height: '100%', flexDirection: 'column', gap: '10px' }}>
                <div className="divLogo">
                    <div className="logos">
                        <img src={logo} />
                        <img src={scatter} />
                    </div>
                    <nav className="navBar">
                        {optionNav.map((option, index) => {
                            return (
                                <div className="option" key={index}>
                                    <Link to={option.url} key={index}>{option.title}</Link>
                                </div>
                            )
                        })}
                    </nav>
                    <div className="social">
                        {social.map((img, index) => {
                            return (
                                <Link key={index} className="icon" target="_bank" to={img?.url}>
                                    <img src={img.name} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <p>
                    Scatter 2023
                </p>
            </div>
        </footer>
    )
}

export default Footer