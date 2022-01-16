import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import CardDetail from './pages/cardDetail/CardDetail'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cards/:cardId" element={<CardDetail />} />
      </Routes>     
    </div>
  );
}

export default App;
