import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopUpNeopay = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center p-4 bg-white rounded-xl shadow-md">
        <Link to="/your-statistic" className="text-gray-600">
          <FaArrowLeft size={20} />
        </Link>
        <h1 className="text-lg font-semibold ml-4">Top Up Neopay</h1>
      </div>
      
      {/* Top Up Methods */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
        <h2 className="font-semibold mb-2">Top Up Methods</h2>
        <div className="flex items-center justify-between border p-3 rounded-lg">
          <span>🏦 Bank Transfer (BND)</span>
          <span className="text-gray-500">**** 5324</span>
        </div>
      </div>

      {/* Top Up Amount */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
        <h2 className="font-semibold mb-2">Top Up Amount</h2>
        <div className="grid grid-cols-3 gap-2">
          {[5, 10, 20, 50, 100, 150, 200, 250].map((amount) => (
            <button key={amount} className="bg-gray-200 p-3 rounded-lg">${amount}</button>
          ))}
        </div>
        <input
          type="number"
          placeholder="Enter amount"
          className="mt-2 w-full p-2 border rounded-lg"
        />
      </div>

      {/* Confirm Top Up */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
        <button className="w-full bg-green-500 text-white py-2 rounded-lg">Top Up</button>
      </div>

      {/* Detail Top Up */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
        <h2 className="font-semibold mb-2">Detail Top Up</h2>
        <div className="text-gray-600">
          <p>From: Bank Transfer (BND)</p>
          <p>To: Top-Up Neopay</p>
          <p>Amount: $200.00</p>
          <p>Tax: $1.00</p>
          <p className="font-bold">Total: $201.00</p>
        </div>
      </div>
    </div>
  );
};

export default TopUpNeopay;