import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home';
import SeriesOne from './Components/pages/GalleryOne';
import SeriesTwo from './Components/pages/GalleryTwo';
import SeriresThree from './Components/pages/GalleryThree';
import SeriesFour from './Components/pages/GalleryFour';
import SeriesFive from './Components/pages/GalleryFive';
import Works from './Components/pages/HowItWorks';
import About from './Components/pages/AboutMe';
import SignUp from './Components/pages/SignUp';
import MayShowNavbar from './Components/MayShowNavbar';
import ScrollToTop from './Components/ScrollToTop';


function App() {


  return (
    
    
    <>
      <Router>
        <ScrollToTop />
          <MayShowNavbar>
            <Navbar />
          </MayShowNavbar>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= '/galleryOne' element={<SeriesOne/>}/>
        <Route path= '/galleryTwo' element={<SeriesTwo/>}/>
        <Route path= '/galleryThree' element={<SeriresThree/>}/>
        <Route path= '/galleryFour' element={<SeriesFour/>}/>
        <Route path= '/galleryFive' element={<SeriesFive/>}/>
        <Route path= '/HowItWorks' element={<Works/>}/>
        <Route path= '/AboutMe' element={<About/>}/>
        <Route path= '/sign-up' element={<SignUp/>}/>
       </Routes>
      </Router>
    </>
  );
}

export default App;
