import api from '../utils/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFlashMessage from './useFlashMessage'

export default function useAuth() {

    const {setFlashMessage} =  useFlashMessage()
    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])

    let msgText = 'Cadastro realizado com sucesso!'
    let msgType = 'success'

    async function register(user) {
        try {
            const data = await api.post('/users', user).then( (response) => {

                return response.data
            })

            console.log(data)
            await authUser(data)

        } catch(err) {
            let msgText = err.response.data.message
            let msgType = 'error'
        }

        setFlashMessage(msgText, msgType)
        navigate('/');
    }


    async function authUser(data) {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
    }

    async function logout() {
        const msgText = 'Logout realizado com sucesso!'
        const msgType = 'success'

        
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined

        setAuthenticated(false)
        setFlashMessage(msgText, msgType)
        navigate('/');
    }

    async function login(user) {

        const msgText = 'Login realizado com sucesso!'
        const msgType = 'success'

        try {

            const data = await api.post('/users/login', user).then( (respnse) => {
                return respnse.data
            })

            console.log(data)

            await authUser(data)

        } catch (err) {
            console.log(err)
        }

        setFlashMessage(msgText, msgType)

    }

    return {register, logout, login, authenticated}
}