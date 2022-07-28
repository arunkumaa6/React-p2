import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import App from './App';
import Header from './Header';
import Hooks from './Hooks';
import Home from './Home';
import Login from './Login';

function Router() {
  return (
    <div>
        <BrowserRouter>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"app"}>App</Link></li>
            <li><Link to={"header"}>Header</Link></li>
            <li><Link to={"hooks"}>Hooks</Link></li>
          <li><Link to={"login"}>Login</Link></li>

        </ul>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/app" element={<App/>}></Route>
            <Route path="/header" element={<Header/>}></Route>
            <Route path="/hooks" element={<Hooks/>}></Route>
          <Route path="/login" element={<Login/>}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router