import React, { useState } from 'react';
import './Series.css';
import laCasaDePapelImg from '../assets/filmes/LA CASA DE PAPEL.png';

const Series = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);

  const seriesRecomendadas = [
    { title: 'Money Heist', imageUrl: laCasaDePapelImg, description: 'Uma série sobre um grupo de ladrões que planejam o maior roubo da história.', releaseDate: '2017' },
    { title: 'The Crown', imageUrl: laCasaDePapelImg, description: 'A vida da Rainha Elizabeth II e os eventos históricos de seu reinado.', releaseDate: '2016' },
    { title: 'Stranger Things', imageUrl: laCasaDePapelImg, description: 'Um grupo de amigos enfrenta criaturas sobrenaturais em uma pequena cidade.', releaseDate: '2016' },
    { title: 'The Witcher', imageUrl: laCasaDePapelImg, description: 'Geralt de Rívia, um caçador de monstros, luta contra seu destino.', releaseDate: '2019' },
    { title: 'Bridgerton', imageUrl: laCasaDePapelImg, description: 'Uma série sobre a alta sociedade londrina durante o período da Regência.', releaseDate: '2020' },
  ];

  const populares = [
    { title: 'Money Heist', imageUrl: laCasaDePapelImg },
    { title: 'The Crown', imageUrl: laCasaDePapelImg },
    { title: 'Stranger Things', imageUrl: laCasaDePapelImg },
    { title: 'The Witcher', imageUrl: laCasaDePapelImg },
    { title: 'Bridgerton', imageUrl: laCasaDePapelImg },
  ];

  const handleSeriesSelect = (series) => {
    setSelectedSeries(series);
  };

  return (
    <div className="series-page">
      {/* Hero Section com Série Selecionada */}
      {selectedSeries ? (
        <div className="series-preview" style={{ backgroundImage: `url(${selectedSeries.imageUrl})` }}>
          <div className="preview-overlay">
            <div className="preview-info">
              <h2>SOARESFLIX ORIGINAL</h2>
              <h1>{selectedSeries.title}</h1>
              <p>{selectedSeries.description}</p>
              <span>{selectedSeries.releaseDate}</span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Seção de Séries Recomendadas */}
      <div className="series-category">
        <h2>Recomendados para Você</h2>
        <div className="series-row">
          {seriesRecomendadas.map((series) => (
            <div key={series.title} className="series-card" onClick={() => handleSeriesSelect(series)}>
              <img src={series.imageUrl} alt={series.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Séries Populares */}
      <div className="series-category">
        <h2>Populares na SoaresFlix</h2>
        <div className="series-row">
          {populares.map((series) => (
            <div key={series.title} className="series-card" onClick={() => handleSeriesSelect(series)}>
              <img src={series.imageUrl} alt={series.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
