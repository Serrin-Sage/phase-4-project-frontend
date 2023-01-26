import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Stats = ({allDrinksList}) => {
    let beerTotal = 0

    const sampleData = [
        { name: "Beer", value: 1, fill: "#0088FE" },
        { name: "Wine", value: 4, fill: "#00C49F" },
        { name: "Whiskey", value: 2, fill: "#FFBB28" },
    ]

    let renderLabel = (entry) => {
        return entry.name
    }

    const colorArray = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <div>
            <PieChart width={400} height={400}>
                <div>
                    hi
                </div>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={sampleData}
                    cx={200}
                    cy={200}
                    outerRadius={100}
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