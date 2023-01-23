import CategoryCard from "./CategoryCard"
import { useSelector } from "react-redux"

const MainPage = () => {
    const selectedCategory = useSelector((state) => state.category.value)
    const categories = ["all", "beer", "brandy", "gin", "rum", "tequila", "vodka", "whiskey", "wine", "other"]

    return (
        <div className="main-page-container">
            <h1>{selectedCategory.category}</h1>
            <div className="main-content">
                {
                    categories.map((category) => {
                        return (
                            <CategoryCard key={category} category={category} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainPage