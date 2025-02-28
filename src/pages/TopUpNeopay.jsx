import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopUpNeopay = () => {
  const [amount, setAmount] = useState(0);
  const taxRate = 0.005; // Thuế 0.5%
  const tax = amount * taxRate;
  const total = amount + tax;

  const handleTopUp = () => {
    if (amount <= 0) {
      alert("Vui lòng nhập số tiền hợp lệ!");
      return;
    }
    alert(`Bạn đã nạp thành công $${total.toFixed(2)} vào ví Neopay!`);
    setAmount(0);
  };

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
          {[5, 10, 20, 50, 100, 150, 200, 250].map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value)}
              className={`p-3 rounded-lg ${
                amount === value ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              ${value}
            </button>
          ))}
        </div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
          className="mt-2 w-full p-2 border rounded-lg"
        />
      </div>

      {/* Confirm Top Up */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
        <button
          onClick={handleTopUp}
          className="w-full bg-green-500 text-white py-2 rounded-lg"
        >
          Top Up
        </button>
      </div>

      {/* Detail Top Up */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
        <h2 className="font-semibold mb-2">Detail Top Up</h2>
        <div className="text-gray-600">
          <p>From: Bank Transfer (BND)</p>
          <p>To: Top-Up Neopay</p>
          <p>Amount: ${amount.toFixed(2)}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default TopUpNeopay;
