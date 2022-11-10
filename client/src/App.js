import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
