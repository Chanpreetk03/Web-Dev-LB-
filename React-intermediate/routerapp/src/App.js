import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import NotFound from './components/Not-Found';
import Labs from './components/Labs';
import MainHeader from './components/MainHeader'
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/support">support</NavLink>
        </li>
        <li>
        <NavLink to="/about">about</NavLink>
        </li>
        <li>
        <NavLink to="/labs">labs</NavLink>
        </li>
        <li>
        <NavLink to="*">not found</NavLink>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
        <Route element={<Home/>} />
        <Route path="/support" element={<Support/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/labs" element={<Labs/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
