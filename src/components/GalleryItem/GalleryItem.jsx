import React, { useState } from 'react';

function GalleryItem ({item}) {
    const [showImage, setShowImage] = useState(true);
    const [likes, setLikes] = useState(item.likes); 

    const toggleImageDescription = () => {
        setShowImage(!showImage);
    };

    const increaseLikes = (event) => {
        console.log('Like button clicked');
        event.stopPropagation(); 
        setLikes(likes + 1); // Increment 'likes' by 1.
    };


   return (
    <div className="gallery-item" onClick={toggleImageDescription}>
        {showImage ? (
            <img src={item.path} alt={item.description} />
        ) : (
            <p>{item.description}</p>
        )}
        <p>Likes: {likes}
        <button onClick={increaseLikes}>like</button>
        </p>

    </div>
   )

}

export default GalleryItem