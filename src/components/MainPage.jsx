import CategoryCard from "./category/CategoryCard"

const MainPage = () => {
    const categories = ["all", "beer", "brandy", "gin", "rum", "tequila", "vodka", "whiskey", "wine", "other"]

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