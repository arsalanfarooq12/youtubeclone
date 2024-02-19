import React from 'react'
import Navbar from './Components/Navbar';
import Head from './Components/Head';
import './App.css'
import Contentsection from './Contentsection';




function App() {
  return (
    <>

      <div className="whole">
        <Navbar />

        <div className="middle">

          <Head />
          <Contentsection />
        </div>


      </div>
    </>

  );
}

export default App;
