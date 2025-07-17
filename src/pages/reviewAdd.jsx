// src/pages/ReviewAdd.jsx
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getAllWines } from '../scripts/getAllWines';
import { addReview } from '../scripts/addReview';
import './ReviewAdd.css';

const ReviewAdd = () => {

  const navigate = useNavigate();
  const [wines, setWines] = useState([]);
  const [selectedWineId, setSelectedWineId] = useState('');
  const [tasterName, setTasterName] = useState('');
  const [tasterTwitter, setTasterTwitter] = useState('');
  const [points, setPoints] = useState('');

  useEffect(() => {
    const loadWines = async () => {
      const winesData = await getAllWines();
      setWines(winesData.data);
    };
    loadWines();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!selectedWineId || !points || !tasterName) {
    alert('Compila tutti i campi obbligatori');
    return;
  }

  const selectedWine = wines.find(wine => wine._id === selectedWineId);

  if (!selectedWine) {
    alert('Vino selezionato non valido');
    return;
  }

  const reviewData = {
    points: parseInt(points),
    taster: {
      taster_name: tasterName,
      taster_twitter_handle: tasterTwitter || ''
    },
    wine: {
      title: selectedWine.title,
      variety: selectedWine.variety,
      winery: selectedWine.winery
    }
  };

  try {
    await addReview(reviewData);
    alert('Recensione aggiunta con successo!');
    setSelectedWineId('');
    setTasterName('');
    setTasterTwitter('');
    setPoints('');
  } catch (error) {
    alert('Errore durante l\'aggiunta della recensione.');
  }
};

  return (
    <>
    
    <div className="add-review-container">
      <h1>Add a new review</h1>

      <form onSubmit={handleSubmit}>
        <label>Wine *</label>
        <select value={selectedWineId} onChange={(e) => setSelectedWineId(e.target.value)} required>
          <option value="">-- choose a wine --</option>
          {wines.map(wine => (
            <option key={wine._id} value={wine._id}>
              {wine.title} ({wine.variety} - {wine.winery})
            </option>
          ))}
        </select>

        <label>Taster name *</label>
        <input
          type="text"
          value={tasterName}
          onChange={(e) => setTasterName(e.target.value)}
          required
        />

        <label>Twitter Handle (optional)</label>
        <input
          type="text"
          value={tasterTwitter}
          onChange={(e) => setTasterTwitter(e.target.value)}
          placeholder="@username"
        />

        <label>Points *</label>
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          min={1}
          max={100}
          required
        />

        <button type="submit"> Add Review</button>
      </form>
    </div>
    
    <img
    src="https://img.icons8.com/?size=100&id=114107&format=png&color=000000"
    alt="Back"
    onClick={() => navigate('/review')}
    style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '64px',
        height: '64px',
        cursor: 'pointer',
        zIndex: 999,
        transition: 'transform 0.2s ease-in-out',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        padding: '0.5rem',
        objectFit: 'contain',
    }}
    />

    </>
  );
};

export default ReviewAdd;
