import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import { Context } from '../../context/UserContext';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    
    const {authenticated, logout } = useContext(Context)
    
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/">Adotar</Link></li>
                {authenticated ? (
                    <>
                        <li onClick={logout}>Logout</li>
                        <li><Link to="/pets/add">Cadastrar Pet</Link></li>
                        <li><Link to="/pets/mypets">Meus Pets</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Registro</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;