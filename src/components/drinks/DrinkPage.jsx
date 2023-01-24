import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import DrinkDisplay from "./DrinkDisplay"

const DrinkPage = () => {
  const selectedCategory = useSelector((state) => state.category.value)
  const [drinkList, setDrinkList] = useState([])  
 
  useEffect(() => {
    let drinkUrl = ""
    if (selectedCategory.category == "All") {
      drinkUrl = "http://localhost:8000/drinks"
    } else {
      drinkUrl = `http://localhost:8000/drinks/${selectedCategory.category}`
    }
    const fetchDrinks = async () => {
      let req = await fetch(drinkUrl)
      let res = await req.json()
      if (req.ok) {
        console.log(res)
        setDrinkList(res)
      } else {
        console.log(req)
        console.log("NO ROUTE FOUND")
      }
    }
    fetchDrinks()
  },[])       

  return (
    <div className="drink-page-container">
        <h1 className="drink-page-title">{selectedCategory.category}</h1>
        <hr/>
        <div className="drink-page-content">
          {
            drinkList.map((drink) => {
              return (
                <DrinkDisplay drink={drink}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default DrinkPage