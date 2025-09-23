import { useState } from "react"
import formStyles from './Form.module.css'
import Input from "./Input"

function PetForm({ petData, handleSubmit, btnText }) {

    const [pet, setPet] = useState(petData || {})
   
    function handleChange(e) {
        setPet({...pet, [e.target.name]: e.target.value})
    }

    function handleSubmitForm(e) {
        e.preventDefault()
        handleSubmit(pet)
    }

    return (
        <form onSubmit={handleSubmitForm} className={formStyles.form_container}>
            <Input 
                name="Nome"
                text="Nome"
                type="text"
                placeholder="Digite o nome"
                handleOnChange={handleChange}
            />
      
            <Input 
                name="age"
                text="Idade"
                type="number"
                placeholder="Digite a idade"
                handleOnChange={handleChange}
            />

            <Input 
                name="weight"
                text="Peso"
                type="number"
                placeholder="Digite o peso"
                handleOnChange={handleChange}
            />

            <input type="submit" value={btnText} />
            
        </form>
    )
}

export default PetForm