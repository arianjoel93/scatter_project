//styles
import "./HeaderAuth.scss"

//assets
import scatter from "../../../assets/Scatter.png"
import logo from "../../../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import HeaderMobile from "../HeaderMobile/HeaderMobile"
import { Avatar } from 'primereact/avatar';
import { useEffect, useRef, useState } from "react"
import { OverlayPanel } from 'primereact/overlaypanel';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';



const HeaderAuth = () => {
    const op = useRef(null);
    const navigate = useNavigate()
    const screen = window.screen.width
    const optionNav = [
        { title: "Home", url: "/home" },
        { title: "Services", url: "/auth/services" },
    ]
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const [user, setUser] = useState()

    const accept = () => {
        localStorage.setItem("user", "")
        navigate("/")
    }

    useEffect(() => {
        const getUser = async () => {
            const data = await localStorage.getItem('user')

            try {
                const userData = JSON.parse(data)
                setUser(userData.username.slice(0, 1).toUpperCase());
            } catch (error) {
                console.error('Error al analizar JSON:', error);
            }

        }
        getUser()
    }, [])


    return (
        <>
            {screen > 768 ? (
                <header className='HeaderAuth'>
                    <div className="c_main">
                        <div className="logos" onClick={() => navigate('/home')}>
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
                                <Avatar label={`${user}`} size="xlarge" shape="circle" onClick={(e) => op.current.toggle(e)} />
                                <OverlayPanel ref={op}>
                                    <div className="optionProfile top">
                                        <p>My requests</p>
                                    </div>
                                    <div className="optionProfile">
                                        <p>My account</p>
                                    </div>
                                    <ConfirmDialog className="Confirmation" visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to go out?"
                                        header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} />
                                    <div className="optionProfile button" onClick={() => setVisible(true)}>
                                        <p>Log out</p>
                                    </div>
                                </OverlayPanel>
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

export default HeaderAuth