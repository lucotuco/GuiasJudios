import React from 'react';
import {Link} from './Link';

export default function HomePage(){
    return(
      <div className="App">
        <header className="App-header">
        <h1>Jewish Guides</h1>
        <h3>Around the world</h3>
        <h2 className='magenpapiii'>We love to connect jewish travellers with local jewish host/guides and learn together about history, heritage and local jewish life </h2>
        <br></br>
        <h2>Please select</h2>
        <div className='row'>
        <Link to='/BuscoGuia' className="sas"> Looking a guide?</Link>
        <Link to='/SoyGuia' className="sas"> I am a guide</Link>
        </div>
        </header>
      </div>
    );
  }