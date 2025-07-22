export default function Fruit({fruitInfo, onClick}) {
    //state
    // const fruitInfo = props.fruit
    // const actionClick = props.handleDelete
    // const {fruitInfo, actionClick} = props;

    //comportements

    //affichage (render)
    return(
        <li>
            {fruitInfo.name}{""}
            <button onClick={onClick}>X</button>
        </li>
    )
}