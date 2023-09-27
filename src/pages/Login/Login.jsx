import "./Login.scss"

//assets
import logo from "../../assets/logo.png"
import scatter from "../../assets/ScatterDark.png"

//react
import GoogleLogin from "react-google-login"
import { gapi } from "gapi-script"
import { useEffect, useState } from "react"
import { InputText } from 'primereact/inputtext';
import GeneralButton from "../../components/atoms/GeneralButton/GeneralButton"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { storeUser } from "../../helpers/helpers"
import Errors from "../../components/atoms/Errors/Errors"
import { Button } from 'primereact/button';

const initialUser = { password: "", identifier: "" }

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(initialUser)
    const [validate, setValidate] = useState(null)
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false);


    const hadnleChange = ({ target }) => {
        const { name, value } = target
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const url = "http://localhost:1337/api/auth/local"
        setLoading(true)
        if (!user.identifier || !user.password) {
            setValidate(true)
            setError({
                msg: 'All fields are required',
                error: true
            })
            setLoading(false)
            return
        }
        if (!emailRegex.test(user.identifier)) {
            setError({
                msg: 'The email is not correct',
                error: true
            })
            setValidate(true)
            setLoading(false)
            return
        }

        try {
            if (user.identifier && user.password) {
                const { data } = await axios.post(url, user)
                if (data.jwt) {
                    storeUser(data)
                }
                setUser(initialUser)
                navigate('/home')
            }
            setError({})
        } catch (error) {
            if (error.response.status == 400) {
                setError({
                    msg: 'Incorrect credentials',
                    error: true
                })
            } else {
                console.log(error.response)
            }
        }
        setLoading(false)

    }

    const { msg } = error

    return (
        <div className='Login'>
            <div className="boxLogin">
                <Link className="logo" to="/">
                    <img className="logo1" src={logo} />
                    <img src={scatter} />
                </Link>
                <div className="errors">
                    {msg && <Errors error={error} />}
                </div>
                <form onSubmit={handleSubmit} className="email">
                    <InputText name="identifier" type="email" className={validate && user.identifier == "" && "p-invalid"} value={user.identifier} onChange={hadnleChange} placeholder="Email or username" />
                    <InputText name="password" type="password" className={validate && user.password == "" && "p-invalid"} value={user.password} onChange={hadnleChange} placeholder="Password" />
                    <Button className="signIn" label="Sign in" icon="pi pi-check" loading={loading} type="submit" />
                </form>
                <div className="optionRegister">
                    <p>Don't have an account?</p>
                    <Link to="/auth/sign-in/create-user">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login