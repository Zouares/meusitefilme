import React, { useState, useEffect } from 'react';
import './Filmes.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Filmes = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [recomendados, setRecomendados] = useState([]);
  const [populares, setPopulares] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [scrollX, setScrollX] = useState({
    recomendados: 0,
    populares: 0,
    topRated: 0
  });

  const apiKey = 'd3e522e85ffa26dc7c6df36e1467ecfa'; 

  
  useEffect(() => {
    const fetchMovies = async (endpoint, setter) => {
      const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}&language=pt-BR&page=1`);
      const data = await response.json();
      setter(data.results);
    };

    fetchMovies('movie/popular', setRecomendados);
    fetchMovies('tv/popular', setPopulares);
    fetchMovies('movie/top_rated', setTopRated);
  }, []);

  const handleFilmSelect = (film) => {
    setSelectedFilm(film);
  };

  const handleLeftArrow = (category) => {
    let x = scrollX[category] + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX((prevState) => ({ ...prevState, [category]: x }));
  };

  const handleRightArrow = (category, items) => {
    let x = scrollX[category] - Math.round(window.innerWidth / 2);
    const listWidth = items.length * 300; 
  
    
    if (listWidth < window.innerWidth) {
      x = 0; 
    } else if ((window.innerWidth - listWidth) > x) {
      x = window.innerWidth - listWidth - 60; 
    }
    setScrollX((prevState) => ({ ...prevState, [category]: x }));
  };
  

  return (
    <div className="filmes-page">
      {/* Hero Section com Filme Selecionado */}
      {selectedFilm ? (
        <div className="film-preview" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${selectedFilm.poster_path})` }}>
          <div className="preview-overlay">
            <div className="preview-info">
              <h2>SOARESFLIX ORIGINAL</h2>
              <h1>{selectedFilm.title || selectedFilm.name}</h1>
              <p>{selectedFilm.overview}</p>
              <span>{selectedFilm.release_date || selectedFilm.first_air_date}</span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Seção de Filmes Recomendados */}
      <div className="film-category">
        <h2>Recomendados para Você</h2>
        <div className="film-row-wrapper">
          <FaChevronLeft className="film-row-arrow left" onClick={() => handleLeftArrow('recomendados')} />
          <div className="film-row" style={{ marginLeft: scrollX.recomendados, width: recomendados.length * 300 }}>
            {recomendados.map((film) => (
              <div key={film.id} className="film-card" onClick={() => handleFilmSelect(film)}>
                <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                
              </div>
            ))}
          </div>
          <FaChevronRight className="film-row-arrow right" onClick={() => handleRightArrow('recomendados', recomendados)} />
        </div>
      </div>

      {/* Seção de Filmes Populares */}
      <div className="film-category">
        <h2>Populares</h2>
        <div className="film-row-wrapper">
          <FaChevronLeft className="film-row-arrow left" onClick={() => handleLeftArrow('populares')} />
          <div className="film-row" style={{ marginLeft: scrollX.populares, width: populares.length * 300 }}>
            {populares.map((film) => (
              <div key={film.id} className="film-card" onClick={() => handleFilmSelect(film)}>
                <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.name} />
                
              </div>
            ))}
          </div>
          <FaChevronRight className="film-row-arrow right" onClick={() => handleRightArrow('populares', populares)} />
        </div>
      </div>

      {/* Seção de Filmes Top Rated */}
      <div className="film-category">
        <h2>Melhor Avaliados</h2>
        <div className="film-row-wrapper">
          <FaChevronLeft className="film-row-arrow left" onClick={() => handleLeftArrow('topRated')} />
          <div className="film-row" style={{ marginLeft: scrollX.topRated, width: topRated.length * 300 }}>
            {topRated.map((film) => (
              <div key={film.id} className="film-card" onClick={() => handleFilmSelect(film)}>
                <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                
              </div>
            ))}
          </div>
          <FaChevronRight className="film-row-arrow right" onClick={() => handleRightArrow('topRated', topRated)} />
        </div>
      </div>
    </div>
  );
};

export default Filmes;
