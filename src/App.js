
import './App.css';
import Header from './components/header/header';
import Nav  from './components/nav/nav';
import About from './components/about/about';
import Experinces from './components/Experinces/experinces';
import Contact from './components/contacts/contact';

import  Services  from './components/services/services'; 
import  Portfolio  from './components/portfolio/portfolio';
import  Testimonials  from './components/testimonials/testimonials';
import Footer from './components/footer/footer';
function App() {
  return (
    <> 
    <Header/>
    <Nav/>
    <About/>
    <Experinces/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
