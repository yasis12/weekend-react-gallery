// React Imports
import React from 'react';
import {useEffect, useState} from 'react';
//Axios Import
import axios from 'axios';
//Styling
import './App.css';
//Component import
import GalleryItem from '../GalleryItem/GalleryItem'
import GalleryList from '../GalleryList/GalleryList'



function App() {
   
    const [gallery, setGallery] = useState([]);

    // Routes
    const fetchGallery = () => {
        axios.get('/gallery')
        .then((response) => {
          console.log(response.data);
          setGallery(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
      }

      useEffect( () => {
        fetchGallery();
      }, [])



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList gallery={gallery}/>

      </div>
    );
}

export default App;
