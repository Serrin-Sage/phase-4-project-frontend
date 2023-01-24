import { useSelector } from "react-redux"
import DrinkDisplay from "./DrinkDisplay"
const DrinkPage = () => {
  const selectedCategory = useSelector((state) => state.category.value)
  const fakeData = [{name: "Bud Light", 
                    alcohol_type: "Beer",
                    sub_alc_type: "",
                    distiller: "Bobbies",
                    description: "This is beer I guess",
                    abv: "5%",
                    location: "New York, NY"},
                    {
                      name: "Bud Light",
                      alcohol_type: "Beer",
                      sub_alc_type: "",
                      distiller: "Bobbies",
                      description: "This is beer I guess",
                      abv: "5%",
                      location: "New York, NY"
                    }]
                    
  return (
    <div className="drink-page-container">
        {
          fakeData.map((drink) => {
            return (
              <DrinkDisplay drink={drink}/>
            )
          })
        }
    </div>
  )
}

export default DrinkPage