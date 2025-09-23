import api from '../utils/api'
//import { useState, useEffect } from 'react'
//#import { useHistory } from 'react-router-dom'
import useFlashMessage from './useFlashMessage'

export default function useAuth() {

    const {setFlashMessage} =  useFlashMessage()

    let msgText = 'Cadastro realizado com sucesso!'
    let msgType = 'success'

    async function register(user) {
        try {
            const data = await api.post('/users', user).then( (response) => {

                console.log(response)

                return response.data
            })

            console.log(data)

        } catch(err) {
            //let msgText = err.response.data.message
            //let msgType = 'error'
        }

        setFlashMessage(msgText, msgType)
    }


    return {register}
}