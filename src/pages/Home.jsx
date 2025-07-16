import Header from "../components/header";
import Footer from "../components/Footer"
import React from 'react';
import bannerImage from '../assets/bannaer-vino.png'; // usa il tuo path reale
import redWine from '../assets/diVino-Rosso.png';
import whiteWine from '../assets/diVino-Bianco.png';
import roseWine from '../assets/diVino-Rose.png';
import { useNavigate } from 'react-router-dom';
import wine3 from '../assets/wine3.png';
import wine4 from '../assets/wine4.png';
import wine5 from '../assets/wine5.png';
import './Home.css'

const Home = () => {
const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault(); 
    navigate(path);
  };

  return (
    <>

      <Header />

     <div style={{ ...styles.banner, backgroundImage: `url(${bannerImage})` }}>
        <div style={styles.bannerBox}>
          <h6 style={styles.popularText}>Popular</h6>
          <h1 style={styles.bannerText}>Discover the Most Reviewed Wines</h1>
          <h6 style={styles.descText}>Real authentic reviews, comapre ratings, and find the perfect
             wine for every occasion.
          </h6>
          <button style={styles.ctaButton} onClick={(e) => handleNavigation(e, '/review')}>Drink Up!</button>
        </div>
      </div>

      {/*Sezione browse the range per i tipi di vini*/}

      <div style={styles.rangeSection}>
        <h2 style={styles.rangeTitle}>Browse the Range</h2>
        <div style={styles.cardContainer}>

          <a href="#review-red" style={{ textDecoration: 'none' }}>
            <div className="wine-card" style={styles.card}>
              <img src={redWine} alt="Red Wine" style={styles.cardImage} />
              <p style={styles.cardLabel}>Red</p>
            </div>
          </a>

          <a href="#review-white" style={{ textDecoration: 'none' }}>
            <div className="wine-card" style={styles.card}>
              <img src={whiteWine} alt="White Wine" style={styles.cardImage} />
              <p style={styles.cardLabel}>White</p>
            </div>
          </a>

          <a href="#review-rose" style={{ textDecoration: 'none' }}>
            <div className="wine-card" style={styles.card}>
              <img src={roseWine} alt="Rosé Wine" style={styles.cardImage} />
              <p style={styles.cardLabel}>Rosé</p>
            </div>
          </a>

        </div>
      </div>

      {/*COLLAGE DI IMMAGINI CON 50+ NEWEST REVIEWS*/}
      
      <div style={styles.reviewBanner}>
        
        <div style={styles.reviewTextBox}>
          <h1 style={styles.reviewTitle}>50+ of the newest amazing reviews</h1>
          <button style={styles.newestButton} onClick={(e) => handleNavigation(e, '/review')}>Explore Now</button>
        </div>

        
        <div style={styles.imageCollage}>
          {/* Top image (square, 60% height) */}
          <img src={wine5} alt="wine1" style={styles.collageTopImage} />

          {/* Bottom row (2 images, 40% height) */}
          <div style={styles.collageBottomRow}>
            <img src={wine3} alt="wine2" style={styles.collageImage} />
            <img src={wine4} alt="wine3" style={styles.collageImage} />
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};



const styles = {

  banner: {
    position: 'relative',
    top: '2rem',
    left: 0,
    width: '100vw',
    //width: '100vw',
    height: '550px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    //position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  bannerBox: {
    marginRight: '7rem',
    backgroundColor: '#F5F5F5',
    padding: '2rem',
    width: '28rem',
    height: '20rem',
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'space-between',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-start', 
    paddingTop: '1rem'
  },
  popularText: {
    marginBottom: '0.2rem',
    margin: 0,
    marginTop: '1rem',
    marginLeft: '1.5srem',
    color: '#444444',          // grigio scuro
    fontWeight: '600',
    fontSize: '1rem',
    textAlign: 'left',
    letterSpacing: '1px',
  },
  descText: {
    marginTop: '0.5rem',      // Avvicina al titolo
    marginBottom: '1rem',     // Spazio prima del bottone
    color: '#444444',
    fontWeight: '600',
    fontSize: '1rem',
    textAlign: 'left',
    letterSpacing: '0.5px',
    marginLeft: '0',          // opzionale: rimuovi lo shift a sinistra
    padding: 0,               // niente padding verticale
  },
 bannerText: {
    fontSize: '2.93rem',
    fontWeight: '750',
    color: '#8C113B',
    margin: 0,
    textAlign: 'left',    
    marginBottom: 'auto',  
    paddingTop: 0, 
  },

  newestButton: {
    backgroundColor: '#8C113B',
    color: '#F5F5F5',
    border: 'none',
    marginTop: '1.7rem',
    //padding: '1.2rem 3rem',  // bottone più corto in orizzontale
    borderRadius: '0px',
    fontSize: '1.3rem',
    cursor: 'pointer',
    alignSelf: 'flex-start',   
    fontWeight: '630',

  },

  ctaButton: {
    backgroundColor: '#8C113B',
    color: '#F5F5F5',
    border: 'none',
    padding: '1.2rem 3rem',  // bottone più corto in orizzontale
    borderRadius: '0px',
    fontSize: '1.3rem',
    cursor: 'pointer',
    alignSelf: 'flex-start',   
    fontWeight: '630',

    },
    rangeSection: {
    marginTop: '1rem', // spazio sotto il banner (dato che è fixed)
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: '#fff',
    marginBottom:'1rem'
  },

  rangeTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#222',
    marginBottom: '2rem',
  },

  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },

  card: {
    backgroundColor: 'transparent',
    borderRadius: '16px',
    padding: '1.8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',               
    height: '400px',   
    cursor: 'pointer',              
    transition: 'transform 0.3s ease, scale 0.3s ease',    
    overflow: 'hidden',             
  },

  cardImage: {
    height: '95%',
    width: '90%',
  // objectFit: 'contain',
    marginBottom: '0.5rem',
    objectFit: 'cover',             // <--- riempie lo spazio visivamente
    borderRadius: '16px',           // <--- Arrotonda anche l’immagine
  },

  cardLabel: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
  },

  reviewBanner: {
    display: 'flex',
    backgroundColor: '#f2f2f2', // grigio chiaro
    padding: '3rem 4rem',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  reviewTextBox: {
    flex: '1 1 30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  reviewTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#000',
    marginBottom: '1.5rem',
    textAlign: 'left',
  },

  imageCollage: {
    flex: '1 1 65%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '60% 40%',
    height: '400px',
    gap: '1rem',
  },

  collageTopImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px',
    aspectRatio: '1', // for square shape
  },

  collageBottomRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    height: '100%',
    gap: '1rem',
  },

  collageImage: {
    width: '100%',
    height: '60%',
    objectFit: 'cover',
    borderRadius: '12px',
  },

};

export default Home;
