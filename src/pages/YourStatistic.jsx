import React, { useState } from "react";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const weeklyData = [
  { day: "Mon", expense: 50 },
  { day: "Tue", expense: 80 },
  { day: "Wed", expense: 30 },
  { day: "Thu", expense: 127, fill: "#BEF264" }, // Highlighted
  { day: "Fri", expense: 45 },
  { day: "Sat", expense: 70 },
  { day: "Sun", expense: 60 },
];

const monthlyData = [
  { day: "Week 1", expense: 300 },
  { day: "Week 2", expense: 450 },
  { day: "Week 3", expense: 275 },
  { day: "Week 4", expense: 500, fill: "#BEF264" },
];

const transactions = [
  { id: 1, name: "Transfer For Jason", amount: "+$230", date: "March 18, 2024", icon: "👤", type: "income" },
  { id: 2, name: "Payment Figma Pro", amount: "-$50", date: "March 17, 2024", icon: "🎨", type: "expense" },
  { id: 3, name: "Payment Apple Music", amount: "-$12", date: "March 17, 2024", icon: "🍏", type: "expense" },
];

const YourStatistic = () => {
  const [timeRange, setTimeRange] = useState("Weekly");
  const chartData = timeRange === "Weekly" ? weeklyData : monthlyData;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md">
        <Link to="/home" className="text-gray-500">
          <FaArrowLeft size={24} />
        </Link>
        <h1 className="text-lg font-semibold">Your Statistic</h1>
        <FaEllipsisV size={20} className="text-gray-500" />
      </div>

      {/* Expense Summary */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md text-center">
        <p className="text-gray-500">Total Expense</p>
        <h2 className="text-3xl font-bold text-red-500">-$127.96</h2>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="mt-2 text-sm border rounded p-1 cursor-pointer"
        >
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={chartData}>
            <XAxis dataKey="day" tick={{ fill: "gray" }} />
            <Tooltip />
            <Bar dataKey="expense" radius={[5, 5, 0, 0]} fill="#E5E7EB" />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span className="text-green-500">Income: +$494.54</span>
          <span className="text-red-500">Expense: -$127.96</span>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Recent Transactions</h3>
          <button className="text-blue-500 text-sm hover:underline">Show More</button>
        </div>
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between py-3 border-b last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-xl">
                {tx.icon}
              </div>
              <div>
                <p className="font-medium">{tx.name}</p>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
            </div>
            <span className={tx.type === "income" ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourStatistic;
