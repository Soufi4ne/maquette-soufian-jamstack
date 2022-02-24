// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Servicess from "./Components/Servicess/Servicess"
import Solution from "./Components/Solution/Solution"
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'




function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Servicess/>
      <Solution/>
      <Contact/>
      <Footer/>
    </div>
    
    
  );
}

export default App;
