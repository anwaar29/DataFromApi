import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Bollywood from './Cmponent/Bollywood';
import Fitness from './Cmponent/Fitness';
import Home from './Cmponent/Home';
import Data from './Cmponent/Data';

function App() {
  return (
    <Data> 
   <>
   <BrowserRouter>
   <Home />
    <Routes>
      <Route path='/bollywood' element={<Bollywood/>}/>
      <Route path='/fitness' element={<Fitness/>}/>
    </Routes>
   </BrowserRouter>
   </>
   </Data>
  );
}

export default App;
