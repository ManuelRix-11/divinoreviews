// src/scripts/editReview.js

const API_URL = 'http://localhost:3000/review';

export const editReview = async (id, reviewData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    });

    if (!response.ok) {
      throw new Error('Errore durante la modifica della recensione');
    }

    return await response.json();
  } catch (error) {
    console.error('Errore nel PUT della recensione:', error);
    throw error;
  }
};
