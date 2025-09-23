
import Input from '../../form/Input'
import styles from '../../form/Form.module.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'


import { Context } from '../../../context/UserContext'

function Register() {

    const [user, setUser] = useState({})
    const { register } = useContext(Context) 


    function handleChange(e) {
      setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        register(user)
        e.preventDefault()
    }

    return (
        <section className={styles.form_container}>
            <h1>Register</h1>
           <form onSubmit={handleSubmit}>
                <Input 
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    handleOnChange={handleChange}
                />

                <Input 
                    text="E-mail"
                    type="text"
                    name="email"
                    placeholder="Digite seu e-mail"
                    handleOnChange={handleChange}
                />

                <Input 
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    handleOnChange={handleChange}
                />

                <input type="submit" value="Cadastrar" />
           </form>
           <p>Já tem conta? <Link to="/login">Logar</Link></p>
        </section>
    )
}

export default Register