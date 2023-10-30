import { Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "../src/view/Home"
import Blog from "./view/Blog"

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Blog' element={<Blog/>} />

      </Routes>

      
    </div>
  );
}

export default App;
