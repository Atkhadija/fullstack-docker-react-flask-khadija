import React, { Component } from 'react';
import List from "./List";
import logo from './logo.svg'; // si tu veux garder le logo animé

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header personnalisé */}
        <header className="App-header">
          <h1 className="App-title">Mon Projet Docker avec jenkins test rebuild 2</h1>
          <h2 className="App-subtitle">Khadija Ait Lahcen - École Supérieure de Technologie</h2>
        </header>

        {/* Section TODO */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h3 className="text-center">Liste des tâches</h3>
              <List />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

