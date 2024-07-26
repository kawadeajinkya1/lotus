import './App.css';
import NavBar from './components/NavBar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Suite from './components/Suite';
import Gallery from './components/Gallery';
import Mini from './components/Mini';
import Excutive from './components/Excutive';

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/suite" element={<Suite />} />
          <Route path="/mini" element={<Mini />} />
          <Route path="/executive" element={<Excutive />} />
         
</Routes>
      </HashRouter>
    </>
  );
}

export default App;


// import './App.css';
// import NavBar from './components/NavBar';
// import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About  from './components/About';
// import Contact from './components/Contact';
// import Booking from './components/Booking';
// import Suite from './components/Suite';
// import Gallery from './components/Gallery';
// import Mini from './components/Mini';
// import Excutive from './components/Excutive';
// function App() {
//   return (
//     <>
//     <BrowserRouter>
  
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />}/>
//       <Route path="/booking" element={<Booking />} />
//       <Route path="/contact" element={<Contact />}/>
//       <Route path="/gallery" element={<Gallery />}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;
