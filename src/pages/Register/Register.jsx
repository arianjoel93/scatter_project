import "./Register.scss"

//assets
import logo from "../../assets/logo.png"
import scatter from "../../assets/ScatterDark.png"

//react
import { useState } from "react"
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import GeneralButton from "../../components/atoms/GeneralButton/GeneralButton"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import Errors from "../../components/atoms/Errors/Errors"
import { Button } from 'primereact/button';

const initialUser = { email: "", password: "", username: "" }

const Register = () => {

    const [user, setUser] = useState(initialUser)
    const [validate, setValidate] = useState(null)
    const [passwordR, setPasswordR] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({})

    const handleUserChange = ({ target }) => {
        const { name, value } = target

        setUser((currentUser) => ({
            ...currentUser,
            [name]: value
        }))
    }


    const signUp = async (e) => {
        e.preventDefault()
        const url = "http://localhost:1337/api/auth/local/register"
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setLoading(true)

        if (!user.email || !user.password || !user.username || !passwordR) {
            setValidate(true)
            setError({
                msg: 'All fields are required',
                error: true
            })
            setLoading(false)
            return
        }
        if (!emailRegex.test(user.email)) {
            setError({
                msg: 'The email is not correct',
                error: true
            })
            setValidate(true)
            setLoading(false)
            return
        }

        if (user.password !== passwordR) {
            setValidate(true)
            setError({
                msg: 'Passwords do not match',
                error: true
            })
            setLoading(false)
            return
        } else {
            if (user.password.length < 6) {
                setValidate(true)
                setError({
                    msg: 'The password must be at least 6 characters',
                    error: true
                })
                setLoading(false)
                return
            }
        }

        try {
            const res = await axios.post(url, user)
            if (res) {
                setUser(initialUser)
                navigate('/auth/sign-in')
            }
        } catch (error) {
            if (error.response.status == 400) {
                setError({
                    msg: 'The email is already associated with another account',
                    error: true
                })
                console.log(error)
            } else {
                console.log(error)
            }
        }
        setLoading(false)

    }

    const { msg } = error

    return (
        <div className='Register'>
            <div className="boxRegister">
                <Link className="logo" to="/">
                    <img className="logo1" src={logo} />
                    <img src={scatter} />
                </Link>
                <h2>Sign up for Scatter</h2>
                <div className="errors">
                    {msg && <Errors error={error} />}
                </div>
                <form onSubmit={signUp} className="user">
                    <InputText name="username" className={validate && user.username == "" && "p-invalid"} value={user.username} onChange={handleUserChange} placeholder="Username" />
                    <InputText name="email" className={validate && user.email == "" && "p-invalid"} value={user.email} onChange={handleUserChange} placeholder="Email" />
                    <div className="passwords">
                        <Password toggleMask feedback={false} name="password" type="password" className={validate && user.password == "" && "p-invalid"} value={user.password} onChange={handleUserChange} placeholder="Password" />
                        <Password toggleMask feedback={false} name="passwordR" type="password" className={validate && passwordR == "" && "p-invalid"} value={passwordR} onChange={(e) => setPasswordR(e.target.value)} placeholder="Repeat password" />
                    </div>
                    <Button className="signIn" label="Sign up" icon="pi pi-check" loading={loading} type="submit" />
                </form>
                <div className="optionRegister">
                    <p>Have an account?</p>
                    <Link to="/auth/sign-in">
                        <button>Log in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register