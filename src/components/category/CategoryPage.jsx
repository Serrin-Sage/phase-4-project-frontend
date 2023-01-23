import { useSelector } from "react-redux"

const CategoryPage = () => {
  const selectedCategory = useSelector((state) => state.category.value)
  const fakeData = {name: "Bud Light", 
                    alcohol_type: "Beer",
                    sub_alc_type: "",
                    distiller: "Bobbies",
                    description: "This is beer I guess",
                    abv: "5%",
                    location: "New York, NY"}
  return (
    <div className="category-page-container">
        CATEGORY: {selectedCategory.category}
    </div>
  )
}

export default CategoryPage