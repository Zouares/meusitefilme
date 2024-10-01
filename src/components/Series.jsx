// Series.jsx
import React, { useState } from 'react';
import './Series.css';

const Series = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);

  const seriesRecomendadas = [
    { title: 'Breaking Bad', imageUrl: 'https://via.placeholder.com/300x450', description: 'Um professor de química se torna um fabricante de drogas.', releaseDate: '2008', trailerUrl: 'trailer1.mp4' },
    { title: 'Stranger Things', imageUrl: 'https://via.placeholder.com/300x450', description: 'Um grupo de amigos descobre uma realidade paralela.', releaseDate: '2016', trailerUrl: 'trailer2.mp4' },
    { title: 'The Crown', imageUrl: 'https://via.placeholder.com/300x450', description: 'A vida da Rainha Elizabeth II e os eventos que moldaram a história.', releaseDate: '2016', trailerUrl: 'trailer3.mp4' },
    { title: 'The Witcher', imageUrl: 'https://via.placeholder.com/300x450', description: 'Um caçador de monstros navega por um mundo conturbado.', releaseDate: '2019', trailerUrl: 'trailer4.mp4' },
    { title: 'The Mandalorian', imageUrl: 'https://via.placeholder.com/300x450', description: 'As aventuras de um caçador de recompensas na galáxia Star Wars.', releaseDate: '2019', trailerUrl: 'trailer5.mp4' },
  ];

  const populares = [
    { title: 'The Umbrella Academy', imageUrl: 'https://via.placeholder.com/300x450' },
    { title: 'Ozark', imageUrl: 'https://via.placeholder.com/300x450' },
    { title: 'Narcos', imageUrl: 'https://via.placeholder.com/300x450' },
    { title: 'Mindhunter', imageUrl: 'https://via.placeholder.com/300x450' },
  ];

  const handleSeriesSelect = (serie) => {
    setSelectedSeries(serie);
  };

  return (
    <div className="series-page">
      {/* Preview da Série Selecionada */}
      {selectedSeries ? (
        <div className="series-preview">
          <div className="preview-info">
            <h2>SOARESFLIX ORIGINAL</h2>
            <h1>{selectedSeries.title}</h1>
            <p>{selectedSeries.description}</p>
            <span>{selectedSeries.releaseDate} | 16+</span>
          </div>
          <div className="preview-image">
            <video className="trailer" autoPlay loop muted>
              <source src={selectedSeries.trailerUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : (
        <div className="no-selection">
          <h1>Selecione uma série para ver a pré-visualização</h1>
        </div>
      )}

      {/* Séries Recomendadas */}
      <div className="recomendadas">
        <h1>Séries Recomendadas</h1>
        <div className="recommended-series">
          {seriesRecomendadas.map((serie, index) => (
            <div key={index} className="serie-card" onClick={() => handleSeriesSelect(serie)}>
              <img src={serie.imageUrl} alt={serie.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Populares na SoaresFlix */}
      <div className="populares">
        <h1>Populares na SoaresFlix</h1>
        <div className="popular-series">
          {populares.map((serie, index) => (
            <div key={index} className="serie-card">
              <img src={serie.imageUrl} alt={serie.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
