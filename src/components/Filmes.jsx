// Filmes.jsx
import React, { useState } from 'react';
import './Filmes.css';
import laCasaDePapelImg from '../assets/filmes/LA CASA DE PAPEL.png';
import LIMAREAGIU2 from '../assets/filmes/2.png';

const Filmes = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const filmesRecomendados = [
    { title: 'Money Heist', imageUrl: laCasaDePapelImg, description: 'Uma série sobre um grupo de ladrões que planejam o maior roubo da história.', releaseDate: '2017', trailerUrl: 'trailer1.mp4' },
    { title: 'The Mother', imageUrl: 'https://via.placeholder.com/300x450', description: 'Uma mãe luta para proteger sua filha de perigos ocultos.', releaseDate: '2023', trailerUrl: 'trailer2.mp4' },
    { title: 'Blockbuster', imageUrl: 'https://via.placeholder.com/300x450', description: 'Uma comédia sobre os desafios de uma locadora de filmes.', releaseDate: '2022', trailerUrl: 'trailer3.mp4' },
    { title: 'Extraction', imageUrl: 'https://via.placeholder.com/300x450', description: 'Um mercenário deve resgatar um menino sequestrado.', releaseDate: '2020', trailerUrl: 'trailer4.mp4' },
    { title: 'Red Notice', imageUrl: 'https://via.placeholder.com/300x450', description: 'Um agente da Interpol persegue um ladrão de arte.', releaseDate: '2021', trailerUrl: 'trailer5.mp4' },
  ];

  const populares = [
    { title: 'LIMA REAGIU 2', imageUrl: LIMAREAGIU2 },
    { title: 'Bridgerton', imageUrl: 'https://via.placeholder.com/300x450' },
    { title: 'The Crown', imageUrl: 'https://via.placeholder.com/300x450' },
    { title: 'Stranger Things', imageUrl: 'https://via.placeholder.com/300x450' },
  ];

  const handleFilmSelect = (film) => {
    setSelectedFilm(film);
  };

  return (
    <div className="filmes-page">
      {/* Preview do Filme Selecionado */}
      {selectedFilm ? (
        <div className="film-preview">
          <div className="preview-info">
            <h2>SOARESFLIX ORIGINAL</h2>
            <h1>{selectedFilm.title}</h1>
            <p>{selectedFilm.description}</p>
            <span>{selectedFilm.releaseDate} | 16+</span>
          </div>
          <div className="preview-image">
            <video className="trailer" autoPlay loop muted>
              <source src={selectedFilm.trailerUrl} type="video/mp4" />
              Seu navegador não suporta o vídeo.
            </video>
          </div>
        </div>
      ) : (
        <div className="no-selection">
          <h1>Selecione um filme para ver a pré-visualização</h1>
        </div>
      )}

      {/* Filmes Recomendados */}
      <h2>Filmes Recomendados</h2>
      <div className="recommended-films">
        {filmesRecomendados.map((film) => (
          <div key={film.title} className="film-card" onClick={() => handleFilmSelect(film)}>
            <img src={film.imageUrl} alt={film.title} />
          </div>
        ))}
      </div>

      {/* Populares na SoaresFlix */}
      <h2>Chegando Em Breve </h2>
      <div className="popular-films">
        {populares.map((film) => (
          <div key={film.title} className="film-card" onClick={() => handleFilmSelect(film)}>
            <img src={film.imageUrl} alt={film.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filmes;
