import {useState} from "react";
import Fruit from "../components/Fruit.jsx";
import FruitForm from "../components/FruitForm.jsx";
import Navigation from "../components/Navigation.jsx";

const ListeDeFruits = () => {
    //state (état , données)
    const [fruits, setFruits] = useState([
        {id: 1, name: 'Abricot'},
        {id: 2, name: 'Banane'},
        {id: 3, name: 'Cerise'},
    ]);

    //comportements
    const handleDelete = (id) => {
        //copier le state
        const fruitsCopy = [...fruits];

        //manipuler le state
        const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id);

        //actualiser mon state avec le setter
        setFruits(fruitsCopyUpdated);
    }

    const handleAdd = (fruitToAdd) => {
        //copier du state
        const fruitsCopy = [...fruits];
        //manipuler la copie state
        fruitsCopy.push(fruitToAdd);
        //modifier le state avec le setter
        setFruits(fruitsCopy);
    }


    //affichage
    return (
        <div>
            <h1>liste de fruits</h1>
            <Navigation />
            <ul>
                {fruits.map(fruit => (
                    <Fruit
                        key={fruit.id}
                        fruitInfo={fruit}
                        onClick={() => handleDelete(fruit.id)}
                    />
                ))}
            </ul>
            <FruitForm handleAdd={handleAdd}/>
        </div>
    )

};

export default ListeDeFruits;