import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element=""/>
      </Routes>     
    </div>
  );
}

export default App;
