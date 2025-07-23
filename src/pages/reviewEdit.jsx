import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getReview } from '../scripts/getReview';
import { editReview } from '../scripts/editReview';
import './ReviewAdd.css';
import Header from '../components/header';

const ReviewEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [review, setReview] = useState(null);
  const [tasterName, setTasterName] = useState('');
  const [tasterTwitter, setTasterTwitter] = useState('');
  const [points, setPoints] = useState('');

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await getReview(id);
        setReview(res.data);
        console.log('recensione: '+ JSON.stringify(review));
        setTasterName(res.data._taster?.taster_name || '');
        setTasterTwitter(res.data._taster?.taster_twitter_handle || '');
        setPoints(res.data._points || '');
      } catch (error) {
        alert('Errore nel recupero della recensione.');
        navigate('/review'); 
      }
    };

    fetchReview();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!points) {
      alert('Compila tutti i campi obbligatori');
      return;
    }

    const reviewData = {
      _id: review._id,
      points: parseInt(points),
      taster: {
        taster_name: tasterName,
        taster_twitter_handle: tasterTwitter || ''
      },
      wine: {
        _id: review.wine?._id || '',
        title: review._wine.title,
        variety: review._wine.variety,
        winery: review._wine.winery,
        points: 0, // richiesto dallo Swagger
        taster_name: '',
        taster_twitterID: ''
      }
    };

    try {
      await editReview(id, reviewData);
      alert('Recensione modificata con successo!');
      navigate('/review');
    } catch (error) {
      alert('Errore durante la modifica della recensione.');
    }
  };


  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="add-review-container" style={{
      marginTop:'7rem',
      maxWidth: '1000px',
      width:'40rem',
      margin: '2rem auto',
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    }}>
        <h1>Edit Review:</h1>

        <form onSubmit={handleSubmit}>
          <label>Wine</label>
          <input
            type="text"
            value={`${review._wine.title} (${review._wine.variety} - ${review._wine.winery})`}
            disabled
          />

          <label>Taster name </label>
          <input
            type="text"
            value={tasterName}
            onChange={(e) => setTasterName(e.target.value)}
            disabled
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

          <button type="submit">Save Changes</button>
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

export default ReviewEdit;
