import React from 'react';
import { deleteReview } from '../scripts/deleteReview';
import { useNavigate } from 'react-router-dom';



const ReviewCard = ({ review, onDelete  }) => {
  const navigate = useNavigate();
  const wine = review.wine || {};
  const taster = review.taster || {};
  const initials = taster?.taster_name
    ? taster.taster_name.split(' ').map((n) => n[0]).join('').toUpperCase()
    : 'NA';

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
          <span style={styles.stars}>★★★★☆</span>
          <strong>{review.points || 'N/A'}pt</strong>
        </div>
        <div style={styles.wineTitle}>{wine.title || 'Title not available'}</div>
        <div style={styles.wineDetails}>
          {wine.variety || 'Variety not available'} – {wine.winery || 'Winery not available'}<br />
          {wine.country || 'Country not available'} – {wine.province || 'Province not available'} – {wine.region_1 || ''}
        </div>

      </div>

      <div style={styles.footer}>
        <div style={styles.avatar}>{initials}</div>
        <div style={styles.tasterInfo}>
          <span style={styles.tasterName}>{taster.taster_name || 'Anonymous'}</span>
          <span style={styles.tasterHandle}>{taster.taster_twitter_handle || 'No handle'}</span>
        </div>
      </div>
    </div>
  );
};
const styles = {
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
    padding: '1.5rem',
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
  description: {
    fontSize: '0.95rem',
    color: '#333',
    lineHeight: 1.5,
    marginBottom: '1rem',
  },
  wineInfo: {
    padding: '1.5rem',
    backgroundColor: '#f4e9ee',
    borderTopLeftRadius: '2rem',
    borderTopRightRadius: '2rem',
    color: '#111',
  },
  wineTitle: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  wineDetails: {
    fontSize: '0.9rem',
    color: '#444',
    marginBottom: '1rem',
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
