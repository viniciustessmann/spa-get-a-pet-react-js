
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../utils/api";
import useFlashMessage from "../../../hooks/useFlashMessage";
import styles from './Dashboard.module.css'

const MyPets = () => {

    const [pets, setPets] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const {setFlashMessage} = useFlashMessage()

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await api.get('/pets', {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    }
                });
                setPets(response.data);
            } catch (err) {
                console.log(err, 'error API');
                setFlashMessage('Falha ao carregar os pets.', 'error');
            }
        };
        
        if (token) {
            fetchPets();
        }

    }, [token]);

  async function removePet(id) {
    await api.delete(`/pets/${id}`, {
      headers: {
          Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then( (response) => {
      const updatedPets = pets.filter((pet) => pet.id !== id)
      setPets(updatedPets)
      return response.data
    }).catch((err) => {
      const updatedPets = pets.filter((pet) => pet.id !== id)
      setPets(updatedPets)
    })
  }
  
  return (
    <section>
      <div className={styles.petlist_header}>
        <h1>MyPets</h1>
        <Link to="/pets/add">Cadastrar Pet</Link>
      </div>
      <div className={styles.petlist_container}>
       {pets.length > 0 && (
          pets.map((pet) => (
            <div key={pet.id} className={styles.petlist_row}>
              <span className="bold">{pet.name}</span>
              <div className={styles.action}>
                {pet.available ? (<p>Pet disponível</p>) : (<p>Pet já adotado</p>)}
                <button onClick={() => {
                  removePet(pet.id)
                }}>Remover</button>
              </div>
            </div>
          ))
        )}
        {pets.length === 0 && (
          <p>Não tem pets cadastrados</p>
        )}
      </div>
    </section>
  );
};

export default MyPets;