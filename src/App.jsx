import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import YourStatistic from './pages/YourStatistic';
import TopUpNeopay from './pages/TopUpNeopay';

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <Link to="/" className="text-white mr-4">Trang Chính</Link>
        <Link to="/your-statistic" className="text-white mr-4">Thống Kê</Link>
        <Link to="/top-up-neopay" className="text-white">Nạp Tiền</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/your-statistic" element={<YourStatistic />} />
        <Route path="/top-up-neopay" element={<TopUpNeopay />} />
      </Routes>
    </Router>
  );
}

export default App;
