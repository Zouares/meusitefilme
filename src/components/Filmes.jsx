import React, { useState } from 'react';
import './Filmes.css';
import laCasaDePapelImg from '../assets/filmes/LA CASA DE PAPEL.png';

const Filmes = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const filmesRecomendados = [
    { title: 'Money Heist', imageUrl: laCasaDePapelImg, description: 'Uma série sobre um grupo de ladrões que planejam o maior roubo da história.', releaseDate: '2017' },
    { title: 'The Mother', imageUrl: laCasaDePapelImg, description: 'Uma mãe luta para proteger sua filha de perigos ocultos.', releaseDate: '2023' },
    { title: 'Blockbuster', imageUrl: laCasaDePapelImg, description: 'Uma comédia sobre os desafios de uma locadora de filmes.', releaseDate: '2022' },
    { title: 'Extraction', imageUrl: laCasaDePapelImg, description: 'Um mercenário deve resgatar um menino sequestrado.', releaseDate: '2020' },
    { title: 'Red Notice', imageUrl: laCasaDePapelImg, description: 'Um agente da Interpol persegue um ladrão de arte.', releaseDate: '2021' },
  ];

  const populares = [
    { title: 'The Witcher', imageUrl: laCasaDePapelImg },
    { title: 'Bridgerton', imageUrl: laCasaDePapelImg },
    { title: 'The Crown', imageUrl: laCasaDePapelImg },
    { title: 'Stranger Things', imageUrl: laCasaDePapelImg },
    { title: 'Stranger Things', imageUrl: laCasaDePapelImg },
    
  ];

  const handleFilmSelect = (film) => {
    setSelectedFilm(film);
  };

  return (
    <div className="filmes-page">
      {/* Hero Section com Filme Selecionado */}
      {selectedFilm ? (
        <div className="film-preview" style={{ backgroundImage: `url(${selectedFilm.imageUrl})` }}>
          <div className="preview-overlay">
            <div className="preview-info">
              <h2>SOARESFLIX ORIGINAL</h2>
              <h1>{selectedFilm.title}</h1>
              <p>{selectedFilm.description}</p>
              <span>{selectedFilm.releaseDate}</span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Seção de Filmes Recomendados */}
      <div className="film-category">
        <h2>Recomendados para Você</h2>
        <div className="film-row">
          {filmesRecomendados.map((film, index) => (
            <div key={index} className="film-card" onClick={() => handleFilmSelect(film)}>
              <img src={film.imageUrl} alt={film.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Filmes Populares */}
      <div className="film-category">
        <h2>Populares no SoaresFlix</h2>
        <div className="film-row">
          {populares.map((film, index) => (
            <div key={index} className="film-card" onClick={() => handleFilmSelect(film)}>
              <img src={film.imageUrl} alt={film.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filmes;
