import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import NotFound from './components/Not-Found';
import Labs from './components/Labs';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/support">support</Link>
        </li>
        <li>
        <Link to="/about">about</Link>
        </li>
        <li>
        <Link to="/labs">labs</Link>
        </li>
        <li>
        <Link to="*">not found</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/labs" element={<Labs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
