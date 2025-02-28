import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex space-x-4">
      <Link to="/" className="text-white">🏠 Trang Chính</Link>
      <Link to="/your-statistic" className="text-white">📊 Thống Kê</Link>
      <Link to="/top-up-neopay" className="text-white">💰 Nạp Tiền</Link>
    </nav>
  );
}

export default Navbar;
