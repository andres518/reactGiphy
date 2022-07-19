import './index.css';

import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import {Count} from "./components/Pages/Count";
import {Search} from "./components/Pages/Search";
import {Tenor} from "./components/Pages/Tenor";
import { Contact} from './components/Pages/Contact';
import{Giphy} from './components/Pages/Giphy';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Count" element={<Count></Count>}/>
        <Route path="/Search" element={<Search></Search>}/>
        <Route path="/Tenor" element={<Tenor></Tenor>}/>
        <Route path="/Contact" element={<Contact></Contact>}/>
        <Route path="/Giphy" element={<Giphy></Giphy>}/>
       

      </Routes>
    </div>
    
        
  );
}

export default App;
