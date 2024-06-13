import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Carosel from './components/Carosel.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import ManageProfile from './components/ManageProfile.js';
import Explore from './components/Explore.js';
import Listing from './components/Listing.js';
import ListingTest from './components/ListingTest.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
        <NavBar/>
      <Routes> 
        <Route path='/' element={<Carosel/>}/> 
        <Route path='/' element={<About/>}/> 
        <Route path='/' element={<Footer/>}/>
        <Route path='/explores' element={<Explore/>}/> 
        <Route path='/listing-property' element={<Listing/>}/>
        <Route path='/listing' element={<ListingTest/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<ManageProfile/>}/>
      </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
