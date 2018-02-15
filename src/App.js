import React, { Component } from 'react';
import logo from './logo.svg';
import Accordion from 'react-tiny-accordion';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <input type="radio" id="home" value="1" name="tabs" checked/>    
          <input type="radio" id="extinguisher" value="2" name="tabs" />      
          <input type="radio" id="hydrantSystem" value="3" name="tabs" />
          <input type="radio" id="detection" value="4" name="tabs" />
          <input type="radio" id="signage" value="5" name="tabs" />
          <input type="radio" id="suit" value="6" name="tabs" />
          <input type="radio" id="protection" value="7" name="tabs" />
          <input type="radio" id="suppression" value="8" name="tabs" />
          <input type="radio" id="contact" value="9" name="tabs" />
          
          <nav>   
          <label for="home" class='fa fa-home'>Home</label>
          <label for="extinguishers" class='fa fa-fire-extinguisher'>Extinguishers</label>
          <label for="products" class='fa fa-wrench'>Hydrant System</label>
          <label for="info" class='fa fa-info'>Smoke and Fire Detection</label>
          <label for="info" class='fa fa-info'>Escape signs and Lighting</label>
          <label for="info" class='fa fa-info'>Safety Suits</label>
          <label for="info" class='fa fa-info'>Protective Equipment</label>
          <label for="info" class='fa fa-info'>Suppression System</label>

          </nav>

          <Accordion className='accordion'>
              <div data-header="Title">
                  Content
              </div>
              <div data-header="Title">
                  Content
              </div>
          </Accordion>
        </section>
      </div>
    );
  }
}

export default App;
