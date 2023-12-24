import React from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import FullStack from './FullStack';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Navbar from './Navbar';
import All from './All';
import Career from './Career';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<All/>}/>
        <Route path='/All' element={<All/>}/>
        <Route path='/FullStack' element={<FullStack/>}/>
        <Route path='/Datascience' element={<DataScience/>}/>
        <Route path='./CyberSecurity' element={<CyberSecurity/>}/>
        <Route path='./Career' element={<Career/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;