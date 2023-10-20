import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Events from './Pages/Events/Events';
import Error from './Components/404/404';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
