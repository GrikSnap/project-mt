import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.js';
import Cell from './Cell.js';

const el = [[ "bonjour", "https://images.ecosia.org/RyAiNN1opKDmewSIMUlqCbFrpdE=/0x390/smart/http%3A%2F%2Ffindicons.com%2Ffiles%2Ficons%2F286%2Flegendora%2F128%2Fele_forest.png"],
[ "aurevoir", "https://images.ecosia.org/RyAiNN1opKDmewSIMUlqCbFrpdE=/0x390/smart/http%3A%2F%2Ffindicons.com%2Ffiles%2Ficons%2F286%2Flegendora%2F128%2Fele_forest.png"],
[ "Salut", "https://images.ecosia.org/RyAiNN1opKDmewSIMUlqCbFrpdE=/0x390/smart/http%3A%2F%2Ffindicons.com%2Ffiles%2Ficons%2F286%2Flegendora%2F128%2Fele_forest.png"],
[ "Salon", "https://images.ecosia.org/RyAiNN1opKDmewSIMUlqCbFrpdE=/0x390/smart/http%3A%2F%2Ffindicons.com%2Ffiles%2Ficons%2F286%2Flegendora%2F128%2Fele_forest.png"],
[ "Ongle", "https://images.ecosia.org/RyAiNN1opKDmewSIMUlqCbFrpdE=/0x390/smart/http%3A%2F%2Ffindicons.com%2Ffiles%2Ficons%2F286%2Flegendora%2F128%2Fele_forest.png"],
[ "Onze", "https://images.ecosia.org/RyAiNN1opKDmewSIMUlqCbFrpdE=/0x390/smart/http%3A%2F%2Ffindicons.com%2Ffiles%2Ficons%2F286%2Flegendora%2F128%2Fele_forest.png"],
]

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <b>Team'UP</b>
        </header>   
        <div className="row">
          <div className="App-nav container col-sm">
            <input type="text" placeholder="recherche" className="Nav-search form-control"/>
            <div className="container App-list">
             {el.map(line => (
              <Cell title={line[0]} picture={line[1]} key={line[0]} />
              ))}
            </div>
          </div>
          <div className="App-maps container-fluid col-9 Maps">
          <MapContainer></MapContainer>
          </div>
        </div>
       </div>
    );
  }
}

export default App;
