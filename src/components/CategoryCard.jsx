import { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { changeCategory } from "../features/category"
const CategoryCard = ({ category }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [hoverOver, setHoverOver] = useState(false)

    const handleClick = () => {
        dispatch(changeCategory({ category: category }))
        navigate(`/drinks/${category}`)
    }
    return (
        <div className="category-card" onClick={handleClick} onMouseOver={() => setHoverOver(true)} onMouseOut={() => setHoverOver(false)}>
            <div className="icon-container" id={`${category}-icon-div`}>
                <img src={`src/assets/images/${category}.png`} alt={`image of ${category}`} className="drink-icon" />
            </div>
            {hoverOver ? <div className="hover-text">{category}</div> : null}
        </div>
    )
}

export default CategoryCard