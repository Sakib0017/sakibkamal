import { BrowserRouter } from "react-router-dom";

import {  Home, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#161616]'>
        <div className='bg-[#161616] bg-cover bg-no-repeat bg-center'>
          <Navbar />
          
        </div>
        <div className='relative z-0'>
          <Home />
          <StarsCanvas />
        </div>
        <Works />
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
