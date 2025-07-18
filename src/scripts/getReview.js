// src/services/getReview.js

export const getReview = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/review/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Errore durante il recupero della recensione');
    }

    const data = await response.json();
    return { data }; // per compatibilità con il componente
  } catch (error) {
    console.error('Errore nel GET della recensione:', error);
    throw error;
  }
};
