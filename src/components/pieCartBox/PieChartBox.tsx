import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Call Received", value: 40, color: "#0088FE" },   // Example value for call received
  { name: "Issue Resolved", value: 30, color: "#00C49F" },  // Example value for issue resolved
  { name: "Issue Pending", value: 20, color: "#FFBB28" },   // Example value for issue pending
  { name: "Call Made", value: 10, color: "#FF8042" },       // Example value for call made
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Employee Perfomance </h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
