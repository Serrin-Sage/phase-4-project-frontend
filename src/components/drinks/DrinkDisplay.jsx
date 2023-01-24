const DrinkDisplay = ({ drink }) => {
  return (
    <div className="drink-card">
      <div className="drink-info">
        {drink.name}<br/>
        {drink.description}
      </div>
      <div className="drink-info">
        {drink.distiller}<br/>
        {drink.abv}
      </div>
      <div className="drink-info">
        {drink.location}
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