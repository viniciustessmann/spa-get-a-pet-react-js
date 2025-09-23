
import { useState, useContext, React } from 'react';
import Input from './../../../components/form/Input'
import styles from '../../form/Form.module.css'
import { Context } from '../../../context/UserContext';
import { Link } from 'react-router-dom';


const Login = () => {

  const [user, setUser] = useState({})
  const {login} = useContext(Context)  

  function handleChaneg(e) {
    setUser({...user, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    login(user)
  }

  return (
    <section className={styles.form_container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          text="E-mail"
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
          handleOnChange={handleChaneg}
        />
        <Input 
          text="Senha"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          handleOnChange={handleChaneg}
        />
        <input type="submit" value="Entrar" />
      </form>
      <p>Não tem conta? <Link to="/register">Faça seu cadastro</Link></p>
    </section>
  );
};

export default Login;