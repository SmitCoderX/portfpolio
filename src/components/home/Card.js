import React, { useState, useEffect } from 'react';
import './card.css';
import { firebaseStorage as storage } from '../../firebase'; // Adjust the path based on your project structure
import { ref, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';

function Card() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, 'anirudh.png');
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <h1>
          <span className="im-text">Im,</span>
          <span className="name-text">Anirudh</span>
          <span className="surname-text">Sharma</span>
        </h1>
        <Link
          className="email"
          onClick={() => (window.location = 'mailto: anirudh16june@gmail.com')}
        >
          anirudh16june@gmail.com
        </Link>
      </div>
      <div className="image-container">
        <div className="rounded-image-container">
          <div className="rounded-background"></div>
          <div className="progress-bar"></div>
          <div className="rounded-image">
            {imageUrl && <img src={imageUrl} alt="Fetched from Firebase" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
