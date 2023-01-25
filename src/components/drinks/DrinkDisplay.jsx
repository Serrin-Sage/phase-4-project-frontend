import { useDispatch, useSelector } from "react-redux"
import { addDrink } from "../../features/drinklist"

const DrinkDisplay = ({ drink }) => {
  const dispatch = useDispatch()
  const allDrinks = useSelector((state) => state.drinklist.value)
  
  return (
    <div className="drink-card">
      <div className="drink-image-div">
        <img src={drink.image} alt={`image of ${drink.name}`} className="drink-image"/>
      </div>
      <div className="drink-info">
        <h2 className="drink-name">{drink.name}</h2><br/>
        {drink.description}
      </div>
      <div className="drink-info">
        ABV<br/>
        {drink.abv}
      </div>
      <div className="drink-info">
        <h3>Distiller:</h3> {drink.distiller} <br/>
        {drink.dist_location}
      </div>
      <div className="add-btn-container">
          <button className="add-btn" onClick={() => dispatch(addDrink(drink))}>
            Add To List
          </button>
      </div>
    </div>
  )
}

export default DrinkDisplay