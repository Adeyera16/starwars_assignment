import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from "../images/starwars_img.png"

const Film = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films');
        setFilms(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilms();
  }, []);

  
  const openingCrawlLength = (text, maxlength) => {
    if (text.length > maxlength) {
        return text.slice(0, maxlength).trim() + '...' 
    } else {
        return text;
    }
  }

  return (
    <div className='wrapper'>
      <img src={image} alt="starwars logo"  className='starwarsLogo'/>
      <div className='grid-container'>
        {films.map(film => (
          <div key={film.episode_id}  className='gridChild'>
            <h2>{film.title}</h2>
            <p className='releaseDate'>{film.release_date}</p>
            <p className='crawl'>{openingCrawlLength(film.opening_crawl, 260)}</p>
            <a href="#" className='moreInfo'>More info</a>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Film;