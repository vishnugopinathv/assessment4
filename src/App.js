import './App.css';
import Home from './pages/Home';
import Students from './pages/Students';
import Contact from './pages/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/students' element={<Students />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
