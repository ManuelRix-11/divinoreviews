// src/services/addReview.js

const API_URL = 'http://localhost:3000/review'; // Modifica con l’URL corretto se diverso

export const addReview = async (reviewData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    });

    if (!response.ok) {
      throw new Error('Errore durante l\'aggiunta della recensione');
    }

    return await response.json();
  } catch (error) {
    console.error('Errore nel POST della recensione:', error);
    throw error;
  }
};
