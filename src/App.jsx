import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import YourStatistic from './pages/YourStatistic';
import TopUpNeopay from './pages/TopUpNeopay';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/your-statistic" element={<YourStatistic />} />
          <Route path="/top-up-neopay" element={<TopUpNeopay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
