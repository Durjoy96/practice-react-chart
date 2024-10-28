/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";

const ReChart = () => {
  const visitorData = [
    {
      date: "2024-10-01",
      visitors: 120,
      avgSessionDuration: 5.2,
      bounceRate: 45,
    },
    {
      date: "2024-10-02",
      visitors: 98,
      avgSessionDuration: 4.9,
      bounceRate: 47,
    },
    {
      date: "2024-10-03",
      visitors: 132,
      avgSessionDuration: 5.6,
      bounceRate: 42,
    },
    {
      date: "2024-10-04",
      visitors: 110,
      avgSessionDuration: 5.0,
      bounceRate: 44,
    },
    {
      date: "2024-10-05",
      visitors: 150,
      avgSessionDuration: 5.7,
      bounceRate: 40,
    },
    {
      date: "2024-10-06",
      visitors: 95,
      avgSessionDuration: 4.8,
      bounceRate: 46,
    },
    {
      date: "2024-10-07",
      visitors: 160,
      avgSessionDuration: 6.0,
      bounceRate: 38,
    },
    {
      date: "2024-10-08",
      visitors: 125,
      avgSessionDuration: 5.3,
      bounceRate: 43,
    },
    {
      date: "2024-10-09",
      visitors: 135,
      avgSessionDuration: 5.5,
      bounceRate: 41,
    },
    {
      date: "2024-10-10",
      visitors: 145,
      avgSessionDuration: 5.8,
      bounceRate: 39,
    },
    {
      date: "2024-10-11",
      visitors: 115,
      avgSessionDuration: 5.1,
      bounceRate: 44,
    },
    {
      date: "2024-10-12",
      visitors: 108,
      avgSessionDuration: 4.9,
      bounceRate: 45,
    },
    {
      date: "2024-10-13",
      visitors: 102,
      avgSessionDuration: 4.7,
      bounceRate: 46,
    },
    {
      date: "2024-10-14",
      visitors: 140,
      avgSessionDuration: 5.6,
      bounceRate: 40,
    },
    {
      date: "2024-10-15",
      visitors: 128,
      avgSessionDuration: 5.4,
      bounceRate: 43,
    },
    {
      date: "2024-10-16",
      visitors: 155,
      avgSessionDuration: 5.9,
      bounceRate: 38,
    },
    {
      date: "2024-10-17",
      visitors: 134,
      avgSessionDuration: 5.5,
      bounceRate: 41,
    },
    {
      date: "2024-10-18",
      visitors: 105,
      avgSessionDuration: 5.0,
      bounceRate: 44,
    },
    {
      date: "2024-10-19",
      visitors: 112,
      avgSessionDuration: 5.2,
      bounceRate: 43,
    },
    {
      date: "2024-10-20",
      visitors: 170,
      avgSessionDuration: 6.2,
      bounceRate: 37,
    },
    {
      date: "2024-10-21",
      visitors: 122,
      avgSessionDuration: 5.3,
      bounceRate: 44,
    },
    {
      date: "2024-10-22",
      visitors: 99,
      avgSessionDuration: 4.8,
      bounceRate: 47,
    },
    {
      date: "2024-10-23",
      visitors: 140,
      avgSessionDuration: 5.5,
      bounceRate: 42,
    },
    {
      date: "2024-10-24",
      visitors: 130,
      avgSessionDuration: 5.6,
      bounceRate: 40,
    },
    {
      date: "2024-10-25",
      visitors: 143,
      avgSessionDuration: 5.8,
      bounceRate: 39,
    },
    {
      date: "2024-10-26",
      visitors: 108,
      avgSessionDuration: 5.1,
      bounceRate: 45,
    },
    {
      date: "2024-10-27",
      visitors: 95,
      avgSessionDuration: 4.9,
      bounceRate: 46,
    },
    {
      date: "2024-10-28",
      visitors: 160,
      avgSessionDuration: 6.0,
      bounceRate: 38,
    },
    {
      date: "2024-10-29",
      visitors: 120,
      avgSessionDuration: 5.4,
      bounceRate: 42,
    },
    {
      date: "2024-10-30",
      visitors: 110,
      avgSessionDuration: 5.2,
      bounceRate: 44,
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-6 rounded-2xl bg-black text-white">
          <p>
            <span className="text-orange-600 font-medium">Visitors :</span>{" "}
            {payload[0].value}
          </p>
          <p>
            <span className="text-orange-600 font-medium">Avg. Session :</span>{" "}
            {payload[1].value}
          </p>
          <p>
            <span className="text-orange-600 font-medium">Bounce Rate :</span>{" "}
            {payload[1].value}%
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={visitorData}>
          {/* <CartesianGrid strokeDasharray="5 5"></CartesianGrid> */}
          <XAxis dataKey="date"></XAxis>
          <YAxis></YAxis>
          <Tooltip content={<CustomTooltip />}></Tooltip>
          <Legend></Legend>
          <Line dataKey="visitors" stroke="#F97316"></Line>
          <Line dataKey="avgSessionDuration" stroke="#333"></Line>
          <Line dataKey="bounceRate"></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReChart;
