import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
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
        setDrinkList(res)
      } else {
        console.log("NO ROUTE FOUND")
      }
    }
    fetchDrinks()
  },[])       

  return (
    <div className="drink-page-container">
      <div className="drink-title-container">
        <div>
          <Link to="/" className="arrow left"></Link>
        </div>
        <div>
          <h1 className="drink-page-title">{selectedCategory.category}</h1>
        </div>
        <div className="empty-div">

        </div>
      </div>
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