// src/services/getAllWines.js


export const getAllWines = async () => {
  try {
    const response = await fetch(`http://localhost:3000/wines`);
    if (!response.ok) {
      throw new Error('Errore nel recupero dei vini');
    }
    const data = await response.json();
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Errore nella fetch dei vini:', error);
    return [];
  }
};
