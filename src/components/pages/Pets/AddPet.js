import { useState, useEffect } from "react";
import styles from './AddPet.module.css'
import api from '../../../utils/api'
import useFlashMessage from "../../../hooks/useFlashMessage";
import PetForm from "../../form/PetForm";
import { useNavigate } from "react-router-dom";


const AddPet = () => {
    
    const [token] = useState(localStorage.getItem('token') || '')
    const {setFlashMessage} = useFlashMessage()
    const navigate = useNavigate();

    async function registerPet(pet) {

        try {
            const data = await api.post('/pets', pet, {
                Authorization: `Bearer ${JSON.parse(token)}`
            }).then( (response) => {
                return response.data
            }) 

            setFlashMessage('Pet cadastrado com sucesso!', 'success')
            navigate('/pets/mypets');

        } catch (err) {
            console.log(err)
        }
    }
     

    return (
        <section className={styles.addpet_header}>
        <div>
            <h1>Cadastre o Pet</h1>
        </div>
        <PetForm petData=""  handleSubmit={registerPet}  btnText="Cadastrar Pet"/>
        </section>
    );
};

export default AddPet;