import './css/App.css'
//import Card from './components/Card.jsx';
import Home from './components/Home.jsx';
import Favorite from './components/Favorite.jsx'
import Nav from './components/Nav.jsx'
import{Routes, Route} from 'react-router-dom';
import {MovieProvider} from './contexts/MovieContext.jsx';


function App() {

  return (
    <MovieProvider>
      <Nav/>
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={< Favorite/>}/>
        </Routes>
      </main>
    </MovieProvider>
  );
      
}


export default App
