import React from "react";
import { FaHome, FaBell, FaCog, FaUser, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md transition-all hover:shadow-lg">
        <h1 className="text-lg font-semibold">Neo Cash Main Balance</h1>
        <button className="text-gray-500 transition-transform transform hover:scale-110">👁</button>
      </div>
      
      {/* Balance Section */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md text-center transition-all hover:shadow-lg hover:scale-105">
        <h2 className="text-3xl font-bold text-green-600">$1,459.70</h2>
        <p className="text-gray-500">**** 5324 | 320 Points</p>
        <div className="flex gap-4 mt-4">
          <button className="flex-1 bg-green-500 text-white py-2 rounded-lg transition-all hover:bg-green-600 hover:scale-105">Transfer</button>
          <button className="flex-1 bg-green-500 text-white py-2 rounded-lg transition-all hover:bg-green-600 hover:scale-105">Withdraw</button>
        </div>
      </div>
      
      {/* Services */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md flex justify-around transition-all hover:shadow-lg">
        <span className="hover:text-blue-500 cursor-pointer">💰 Crypto</span>
        <span className="hover:text-blue-500 cursor-pointer">📶 Internet</span>
        <span className="hover:text-blue-500 cursor-pointer">🛍 Shopping</span>
        <span className="hover:text-blue-500 cursor-pointer">🎟 Ticket</span>
        <span className="hover:text-blue-500 cursor-pointer">➕ Other</span>
      </div>
      
      {/* Recent Transactions */}
      <div className="mt-4 p-4 bg-white rounded-xl shadow-md transition-all hover:shadow-lg">
        <h3 className="font-semibold">Recent Transactions</h3>
        <div className="mt-2">
          <div className="flex justify-between border-b py-2 hover:bg-gray-100 cursor-pointer transition-all">
            <span>Transfer For Jason</span>
            <span className="text-green-500">+$230</span>
          </div>
          <div className="flex justify-between border-b py-2 hover:bg-gray-100 cursor-pointer transition-all">
            <span>Payment Figma Pro</span>
            <span className="text-red-500">-$50</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-black text-white py-3 flex justify-around rounded-t-xl shadow-md">
        <Link to="/home" className="hover:text-yellow-300 transition-all"><FaHome size={24} /></Link>
        <Link to="/your-statistic" className="hover:text-yellow-300 transition-all"><FaBell size={24} /></Link>
        <Link to="/top-up" className="hover:text-yellow-300 transition-all"><FaCog size={24} /></Link>
        <FaUser size={24} className="hover:text-yellow-300 transition-all cursor-pointer" />
      </div>
    </div>
  );
};

export default Home;
