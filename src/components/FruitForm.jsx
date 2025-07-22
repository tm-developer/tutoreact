import {useState} from "react";

export default function FruitForm({handleAdd}) {
    //state
    const [nouveauFruit, setNouveauFruit] = useState('');

    //comportements
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = new Date().getTime();
        const name = nouveauFruit;
        const fruitToAdd = {id, name};
        handleAdd(fruitToAdd);
        setNouveauFruit('');
    }

    const handleChange = (e) => {
        setNouveauFruit(e.target.value);
    }
    //affichage

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input value={nouveauFruit} type="text" placeholder="ajouter un fruit" onChange={handleChange}/>
            <button type="submit">Ajouter</button>
        </form>
    );
}