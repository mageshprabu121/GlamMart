
import Login from './Pages/Login';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
// import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='/aboutus' element={<AboutUs/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
