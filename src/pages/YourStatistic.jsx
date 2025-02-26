import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const YourStatistic = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md">
      <Link to="/home" className="text-gray-500">
        <FaArrowLeft size={24} />
        </Link>

        <h1 className="text-lg font-semibold">Your Statistic</h1>
        <button onClick={() => navigate('/home')} className="text-gray-500">
  <FaArrowLeft size={24} />
</button>

      </div>
      
      {/* Expense Summary */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold text-red-500">-$127.96</h2>
        <p className="text-gray-500">Total Expense</p>
        <div className="flex justify-between mt-4">
          <span className="text-green-500">Income: +$494.54</span>
          <span className="text-red-500">Expense: -$127.96</span>
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
        <h3 className="font-semibold">Recent Transactions</h3>
        <div className="mt-2">
          <div className="flex justify-between border-b py-2">
            <span>Transfer For Jason</span>
            <span className="text-green-500">+$230</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Payment Figma Pro</span>
            <span className="text-red-500">-$50</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Payment Apple Music</span>
            <span className="text-red-500">-$12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourStatistic;