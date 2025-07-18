// src/services/addReview.js

const API_URL = 'http://localhost:3000/review'; 

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
