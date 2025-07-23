import React from 'react';
import { deleteReview } from '../scripts/deleteReview';
import { useNavigate } from 'react-router-dom';

const getColorStyles = (variety) => {
  switch (variety?.toLowerCase()) {
    case 'white':
      return {
        primary: '#C7B066',   // giallo
        secondary: '#fff8dc',
        footerBg: '#d4af37',
        footerText: '#000',
        avatarText: '#d4af37',
        avatarBg: '#fff',
      };
    case 'rose':
      return {
        primary: '#D16C7D',   // rosa chiaro
        secondary: '#fff0f5',
        footerBg: '#ff69b4',
        footerText: '#fff',
        avatarText: '#ff69b4',
        avatarBg: '#fff',
      };
    default:
      return {
        primary: '#a10044',             // default
        secondary: '#f4e9ee',
        footerBg: '#7b003b',
        footerText: '#fff',
        avatarText: '#7b003b',
        avatarBg: '#fff',
      };
  }
};


const ReviewCard = ({ review, onDelete , variety }) => {
  const navigate = useNavigate();
  const wine = review.wine || {};
  const taster = review.taster || {};
  const initials = taster?.taster_name
    ? taster.taster_name.split(' ').map((n) => n[0]).join('').toUpperCase()
    : 'NA';
  const colorStyles = getColorStyles(variety);


  const handleDelete = async () => {
    onDelete(review.id);
    deleteReview(review.id)
  }
  
   return (
    <div style={styles.card}>
      <div style={styles.content}>

        <div style={styles.iconsWrapper}>
          <div style={styles.iconBox} onClick={() =>  navigate(`/reviewEdit/${review.id}`)}>
            <img
              src="https://img.icons8.com/?size=100&id=zqRKVWtC1VeY&format=png&color=000000"
              alt="edit"
              style={styles.icon}
            />
          </div>

          <div style={styles.iconBox} onClick={handleDelete}>
            <img
              src="https://img.icons8.com/?size=100&id=G5tVUZwFOBWx&format=png&color=000000"
              alt="delete"
              style={styles.icon}
            />
          </div>
        </div>

        <div style={styles.rating}>
          <span style={{...styles.stars, color: colorStyles.primary}}>★★★★☆</span>
          <strong>{review.points || 'N/A'}pt</strong>
        </div>
        <div style={styles.wineTitle}>{wine.title || 'Title not available'}</div>
        
        <div style={styles.wineDetails}>
          {wine.variety || 'Variety not available'} – {wine.winery || 'Winery not available'}<br />
          {wine.country || 'Country not available'} – {wine.province || 'Province not available'} – {wine.region_1 || ''}
        </div>

        <div style={styles.description}>
           <em>{review.description || 'No description available'}</em>
        </div>
      </div>

      <div style={styles.middleSection}>
        <div style={styles.wineDetails}>
          <strong>Varietà:</strong> {review.variety || wine.variety || 'N/A'}<br />
          <strong>Winery:</strong> {review.winery || wine.winery || 'N/A'}<br />
          <strong>Designation:</strong> {review.designation || 'N/A'}<br />
          <strong>Prezzo:</strong> {review.price ? `$${review.price}` : 'N/A'}<br />
          <strong>Paese:</strong> {review.country || 'N/A'}<br />
          <strong>Provincia:</strong> {review.province || 'N/A'}<br />
          <strong>Regione:</strong> {[review.region_1, review.region_2].filter(Boolean).join(' – ') || 'N/A'}<br />
        </div>
      </div>

      <div style={{...styles.footer,backgroundColor: colorStyles.primary }}>
        <div style={{...styles.avatar, color: colorStyles.primary}}>{initials}</div>
        <div style={styles.tasterInfo}>
          <span style={styles.tasterName}>{taster.taster_name || 'Anonymous'}</span>
          <span style={styles.tasterHandle}>{taster.taster_twitter_handle || 'No handle'}</span>
        </div>
      </div>
    </div>
  );
};
const styles = {

  middleSection: {
    backgroundColor: '#f5f0f0',
    padding: '1rem 1.5rem',
    borderTopLeftRadius: '2rem',
    borderTopRightRadius: '2rem',
  },
  description: {
    padding: '1.5rem 1.5rem',
    fontSize: '0.95rem',
    color: '#333',
    lineHeight: 1.5,
    top:'1rem',
    minHeight: '40px',
  },
  card: {
    width: '300px',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '1rem',
  },
  content: {
    padding: '1rem 1rem 0 1rem',
    flexGrow: 1,
  },
  iconsWrapper: {
    position: 'relative',
    left: '12rem',
    display: 'flex',
    gap: '0.3rem',
    zIndex: 2,
  },
  iconBox: {
    width: '30px',
    height: '30px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  icon: {
    width: '18px',
    height: '18px',
    objectFit: 'contain',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  stars: {
    color: '#a10044', // bordeaux
  },
 
  wineInfo: {
    padding: '1.5rem',
    backgroundColor: '#f4e9ee',
    borderTopLeftRadius: '2rem',
    borderTopRightRadius: '2rem',
    color: '#111',
    opacity: 0.8,
  },
  wineTitle: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  wineDetails: {
    fontSize: '0.9rem',
    color: '#444',
    marginBottom: 0,
    textAlign: 'left',
   // marginTop:'1rem'
  },
  footer: {
    backgroundColor: '#7b003b',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },
  avatar: {
    backgroundColor: '#fff',
    color: '#7b003b',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1rem',
  },
  tasterInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  tasterName: {
    fontWeight: 'bold',
  },
  tasterHandle: {
    fontSize: '0.85rem',
    opacity: 0.8,
  },
};
export default ReviewCard;
