import Header from '../components/header';
//import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllReviews } from '../scripts/getAllReviews';
import ReviewCard from '../components/reviewCard';

const Review = () => {
  const navigate = useNavigate(); 
  console.debug("sono arrivato nelle reccensioni ");
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  const loadReviews = async (pageNumber) => {
    console.debug("sto per chiamare la getallreviews");
    const data = await getAllReviews(pageNumber, 15);
    setReviews(data);
    console.debug(JSON.stringify(data));
  };

  useEffect(() => {
    loadReviews(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage !== page) {
      setPage(newPage);
    }
  };

   const handleDelete = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  return ( 
    <>
    <Header/>
    <div style={styles.wrapper}>
      <div style={styles.gridContainer}>
        {
        reviews.map((review) => (
          <ReviewCard key={review.id} review={review} onDelete={handleDelete}/>
        ))
        }
      </div>
      <div style={styles.pagination}>
        {Array.from({ length: 10 }, (_, i) => {
          const isActive = i + 1 === page;
          return (
            <button
              key={i}
              style={{
                ...styles.paginationButton,
                ...(isActive ? styles.activeButton : {}),
              }}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* Bottone fluttuante per aggiungere una nuova review */}
      <img
        src="https://img.icons8.com/?size=100&id=24717&format=png&color=000000"
        alt="Add Review"
        style={styles.floatingButton}
        onClick={() => navigate('/add-review')} // <-- Cambia path se diverso
      />

    </div>
    </>
  );
};

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '64px',
    height: '64px',
    cursor: 'pointer',
    zIndex: 999, // sopra tutto
    transition: 'transform 0.2s ease-in-out',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    backgroundColor: 'trasparent',
    padding: '0.5rem',
    objectFit: 'contain',
  },
  wrapper: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
  },
  gridContainer: {
    marginTop:'4rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  paginationButton: {
    margin: '0 4px',
    padding: '8px 12px',
    border: 'none',
    backgroundColor: '#eee',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  activeButton: {
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
  },
};


export default Review;


