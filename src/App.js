import React, { Component } from 'react';
import logo from './logo.svg';
import {SideMenu, Item} from 'react-sidemenu';
import './App.css';

const items = [
  {divider: true, label: 'Our Products', value: 'main-nav'},
    {label: 'Fire Extinguishers', value: 'fireExtinguishers', icon: 'fa-fire-extinguisher',
      children: [
        {label: 'Powder Fire Extinguishers', value: 'powderFireExtinguishers'},
        {label: 'Clean Agent Fire Extinguishers', value: 'cleanAgentFireExtinguishers'},
        {label: 'Water Fire Extinguishers', value: 'waterFireExtinguishers'},
        {label: 'Foam Fire Extinguishers', value: 'foamFireExtinguishers'},
        {label: 'Carbon dioxide Fire Extinguishers', value: 'carbonDioxideFireExtinguishers'},
        {label: 'Water Mist Fire Extinguishers', value: 'waterMistFireExtinguishers'},
        {label: 'Backup Trolley Mount Fire Extinguishers', value: 'backupTrolleyFireExtinguishers'},
        {label: 'Automatic Fire Extinguishers', value: 'automaticFireExtinguishers'}
        ]
    },
    {label: 'Fire Hydrant System', value: 'fireHydrantSystem', icon: 'fa-automobile',
    children: [
        {label: 'Yard Fire Hydrant System', value: 'yardFireHydrantSystem'},
        {label: 'Hose Reel System', value: 'hoseReelSystem'},
        {label: 'Down Corner System', value: 'downCornerSystem'},
        {label: 'Dry Riser System', value: 'dryRiserSystem'},
        {label: 'Wet Riser System', value: 'wetRiserSystem'},
        {label: 'Automatic Sprinkler System', value: 'automaticSprinklerSystem'}
        ]
    },
    {label: 'Smoke And Fire Detection System', value: 'smokeAndFireDetectionSystem', icon: 'fa-automobile',
    children: [
        {label: 'Conventional Fire Alarm System', value: 'conventionalFireAlarmSystem'},
        {label: 'Addressable Fire Alarm System', value: 'addressableFireAlarmSystem'},
        {label: 'Stand Alone Fire Alarm System', value: 'standAloneFireAlarmSystem'}
        ]
    },
    {label: 'Escape Signs And Directional Lighting System', value: 'escapeSignsAndDirectionalLightingSystem', icon: 'fa-automobile',
    children: [
        {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
        {label: 'LED Sign Boards', value: 'ledSignBoards'},
        {label: 'Normal Sign Boards', value: 'normalSignBoards'},
        {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
    {label: 'Safety Suits', value: 'escapeSignsAndDirectionalLightingSystem', icon: 'fa-automobile',
    children: [
        {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
        {label: 'LED Sign Boards', value: 'ledSignBoards'},
        {label: 'Normal Sign Boards', value: 'normalSignBoards'},
        {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
    {label: 'Personal Protective Equipments', value: 'safetySuits', icon: 'fa-automobile',
    children: [
        {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
        {label: 'LED Sign Boards', value: 'ledSignBoards'},
        {label: 'Normal Sign Boards', value: 'normalSignBoards'},
        {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
    {label: 'Suppression Systems', value: 'escapeSignsAndDirectionalLightingSystem', icon: 'fa-automobile',
    children: [
        {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
        {label: 'LED Sign Boards', value: 'ledSignBoards'},
        {label: 'Normal Sign Boards', value: 'normalSignBoards'},
        {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
  {divider: true, label: 'Motors', value: 'motors-nav'},
    {label: 'item 3', value: 'item3', icon: 'fa-beer'}
];

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
        </section>
        <div>
          <SideMenu items={items}/>
        </div>
      </div>
    );
  }
}

export default App;
