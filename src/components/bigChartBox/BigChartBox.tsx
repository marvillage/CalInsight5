import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    sentimentScore: 0.75, // Represents positive sentiment (0 to 1 scale)
    conversationLength: 50, // Number of words in conversation
    engagementLevel: 3.5, // Engagement level out of 5
  },
  {
    name: "Mon",
    sentimentScore: 0.65,
    conversationLength: 40,
    engagementLevel: 4.0,
  },
  {
    name: "Tue",
    sentimentScore: 0.70,
    conversationLength: 60,
    engagementLevel: 3.8,
  },
  {
    name: "Wed",
    sentimentScore: 0.85,
    conversationLength: 55,
    engagementLevel: 4.2,
  },
  {
    name: "Thu",
    sentimentScore: 0.60,
    conversationLength: 45,
    engagementLevel: 3.6,
  },
  {
    name: "Fri",
    sentimentScore: 0.80,
    conversationLength: 65,
    engagementLevel: 4.5,
  },
  {
    name: "Sat",
    sentimentScore: 0.70,
    conversationLength: 50,
    engagementLevel: 4.0,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Conversation Sentiment Analysis</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sentimentScore"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="conversationLength"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="engagementLevel"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;

