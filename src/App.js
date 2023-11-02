import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Events from './Pages/Events/Events';
import Error from './Components/404/404';
import Projects from './Pages/Projects/Projects';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Nominees from './Pages/Nominees/Nominees';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import Voted from './Pages/Voted/Voted';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route exact path='/nominees' element={<Nominees/>} />
      <Route path='/nominees/nominee/:id' element={<Voted/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/dashboard' element={<UserDashboard/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
