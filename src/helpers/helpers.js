import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const storeUser = (data) => {
    localStorage.setItem('user', JSON.stringify({
        username: data.user.username,
        jwt: data.jwt
    }))
    console.log(data.user.username)
}

export const userData = () => {
    const stringifiedUser = localStorage.getItem('user') || '""';

    return JSON.parse(stringifiedUser || {})
}

export const Protector = ({ Component }) => {
    const navigate = useNavigate()

    const { jwt } = userData()

    useEffect(() => {
        if (!jwt) {
            navigate('/')
        }
    }, [navigate, jwt])

    return <Component />
}


export const Guest = ({ Component }) => {
    const navigate = useNavigate()

    const { jwt } = userData()

    useEffect(() => {
        if (jwt) {
            navigate('/home')
        }
    }, [navigate, jwt])

    return <Component />
}


//go to start
export const init = () => {
    window.scrollTo(0, 0);
}

