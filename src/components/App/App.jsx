// React Imports
import React from 'react';
//Styling
import './App.css';
//Component import
import GalleryItem from '../GalleryItem/GalleryItem'
import GalleryList from '../GalleryList/GalleryList'

function App() {
    // Routes




    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryItem />
        <GalleryList />

        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
