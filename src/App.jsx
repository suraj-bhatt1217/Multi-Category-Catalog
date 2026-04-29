import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import Shell from './components/Shell';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </Shell>
    </div>
  );
}
