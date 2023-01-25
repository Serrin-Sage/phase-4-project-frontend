const DrinkDisplay = ({ drink }) => {
  return (
    <div className="drink-card">
      <div className="drink-image-div">
        <img src={drink.image} alt={`image of ${drink.name}`} />
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
          <button className="add-btn">
            +
          </button>
      </div>
    </div>
  )
}

export default DrinkDisplay