import React, { useState, useEffect } from 'react';
import './Series.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Series = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [recomendadas, setRecomendadas] = useState([]);
  const [populares, setPopulares] = useState([]);
  const [scrollX, setScrollX] = useState({ recomendadas: 0, populares: 0 });

  const apiKey = 'd3e522e85ffa26dc7c6df36e1467ecfa'; 

  useEffect(() => {
    const fetchSeries = async (endpoint, setter) => {
      const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}&language=pt-BR&page=1`);
      const data = await response.json();
      setter(data.results);
    };

    fetchSeries('tv/popular', setRecomendadas);
    fetchSeries('tv/top_rated', setPopulares);
  }, []);

  const handleSeriesSelect = (series) => {
    setSelectedSeries(series);
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
    <div className="series-page">
      {/* Hero Section com Série Selecionada */}
      {selectedSeries ? (
        <div className="series-preview" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${selectedSeries.poster_path})` }}>
          <div className="preview-overlay">
            <div className="preview-info">
              <h2>SOARESFLIX ORIGINAL</h2>
              <h1>{selectedSeries.name}</h1>
              <p>{selectedSeries.overview}</p>
              <span>{selectedSeries.first_air_date}</span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Seção de Séries Recomendadas */}
      <div className="series-category">
        <h2>Recomendados para Você</h2>
        <div className="series-row-wrapper">
          <FaChevronLeft className="series-row-arrow left" onClick={() => handleLeftArrow('recomendadas')} />
          <div className="series-row" style={{ marginLeft: scrollX.recomendadas, width: recomendadas.length * 300 }}>
            {recomendadas.map((series) => (
              <div key={series.id} className="series-card" onClick={() => handleSeriesSelect(series)}>
                <img src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} alt={series.name} />
              </div>
            ))}
          </div>
          <FaChevronRight className="series-row-arrow right" onClick={() => handleRightArrow('recomendadas', recomendadas)} />
        </div>
      </div>

      {/* Seção de Séries Populares */}
      <div className="series-category">
        <h2>Populares</h2>
        <div className="series-row-wrapper">
          <FaChevronLeft className="series-row-arrow left" onClick={() => handleLeftArrow('populares')} />
          <div className="series-row" style={{ marginLeft: scrollX.populares, width: populares.length * 300 }}>
            {populares.map((series) => (
              <div key={series.id} className="series-card" onClick={() => handleSeriesSelect(series)}>
                <img src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} alt={series.name} />
              </div>
            ))}
          </div>
          <FaChevronRight className="series-row-arrow right" onClick={() => handleRightArrow('populares', populares)} />
        </div>
      </div>
    </div>
  );
};

export default Series;
