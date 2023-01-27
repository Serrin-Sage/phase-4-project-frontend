import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Stats = ({allDrinksList}) => {
    let beerTotal = 0
    let brandyTotal = 0
    let ginTotal = 0
    let rumTotal = 0
    let tequilaTotal = 0
    let vodkaTotal = 0
    let whiskeyTotal = 0
    let wineTotal = 0
    let otherTotal = 0

    allDrinksList.forEach(drink => {
        if (drink.alcohol_type === "Beer") beerTotal++;
        else if (drink.alcohol_type === "Brandy") brandyTotal++;
        else if (drink.alcohol_type === "Gin") ginTotal++;
        else if (drink.alcohol_type === "Rum") rumTotal++;
        else if (drink.alcohol_type === "Tequila") tequilaTotal++;
        else if (drink.alcohol_type === "Vodka") vodkaTotal++;
        else if (drink.alcohol_type === "Whiskey") whiskeyTotal++;
        else if (drink.alcohol_type === "Wine") wineTotal++;
        else if (drink.alcohol_type === "Other") otherTotal++;

    })
    
    const sampleData = [
        { name: "Beer", value: beerTotal, fill: "#0088FE" },
        { name: "Brandy", value: brandyTotal, fill: "#00C49F" },
        { name: "Gin", value: ginTotal, fill: "#FFBB28" },
        { name: "Rum", value: rumTotal, fill: "#FFBB28" },
        { name: "Tequila", value: tequilaTotal, fill: "#FFBB28" },
        { name: "Vodka", value: vodkaTotal, fill: "#FFBB28" },
        { name: "Whiskey", value: whiskeyTotal, fill: "#FFBB28" },
        { name: "Wine", value: wineTotal, fill: "#FFBB28" },
        { name: "Other", value: otherTotal, fill: "#FFBB28" },
    ]

    let renderLabel = (entry) => {
        if (entry.value === 0) return
        return entry.name
    }

    const colorArray = ["#02B2DA", "#0068BD", "#7B1E90", "#18CB5D", "#E6721A", "#B51F1F", "#C13CBC", "#D8D80C"];
    return (
        <div className="stats-container">
            <PieChart width={800} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={sampleData}
                    cx={300}
                    cy={200}
                    outerRadius={150}
                    fill="#8884d8"
                    label={renderLabel}
                >
                {sampleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colorArray[index % colorArray.length]} />
                ))}
                </Pie>
                <Tooltip />
            </PieChart>

        </div>
    )
}
 
export default Stats