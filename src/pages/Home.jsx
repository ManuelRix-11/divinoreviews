import Header from "../components/header";
import React from 'react';

const Home = () => {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>
          Benvenuto su <strong>diVino Reviews</strong>
        </h1>
        <p style={styles.subtitle}>
          Qui troverai le recensioni più autentiche di vini selezionati.
        </p>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: 'white',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    color: '#222',
  },
  subtitle: {
    color: '#555',
    marginTop: '1rem',
  },
};

export default Home;
