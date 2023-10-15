import { Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "../src/view/Home"
import Hoja from "../src/view/Hoja"

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='hoja' element={<Hoja/>} />

      </Routes>

      
    </div>
  );
}

export default App;
