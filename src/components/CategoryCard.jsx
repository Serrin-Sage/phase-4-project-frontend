import { useState } from "react"

const CategoryCard = ({ category }) => {
    const [hoverOver, setHoverOver] = useState(false)

    return (
        <div className="category-card" onClick={() => console.log(category)} onMouseOver={() => setHoverOver(true)} onMouseOut={() => setHoverOver(false)}>
            <div className="icon-container" id={`${category}-icon-div`}>
                <img src={`src/assets/images/${category}.png`} alt={`image of ${category}`} className="drink-icon" />
            </div>
            {hoverOver ? <div className="hover-text">{category}</div> : null}
        </div>
    )
}

export default CategoryCard