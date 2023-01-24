import CategoryCard from "./CategoryCard"

const MainPage = () => {
    const categories = ["All", "Beer", "Brandy", "Gin", "Rum", "Tequila", "Vodka", "Whiskey", "Wine", "Other"]

    return (
        <div className="main-page-container">
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