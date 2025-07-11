const Footer = () => {
  return (
    <div style={footerStyles.wrapper}>
      {/* Divisorio superiore */}
      <div style={footerStyles.divider} />

      
      <div style={footerStyles.container}>
     
        <div style={footerStyles.column}>
          <h3 style={footerStyles.logo}>DiVino_V2</h3>
          <p style={footerStyles.lightText}>
            Università degli studi di Salerno<br />
            84084, Fisciano (SA)
          </p>
        </div>

      
        <div style={footerStyles.column}>
          <h4 style={footerStyles.sectionTitle}>Links</h4>
          <ul style={footerStyles.linkList}>
            <li style={footerStyles.linkItem}>Home</li>
            <li style={footerStyles.linkItem}>Reviews</li>
            <li style={footerStyles.linkItem}>Browse</li>
            <li style={footerStyles.linkItem}>About</li>
          </ul>
        </div>

      
        <div style={footerStyles.column}>
          <h4 style={footerStyles.sectionTitle}>Help</h4>
          <ul style={footerStyles.linkList}>
            <li style={footerStyles.linkItem}>Payment Options</li>
            <li style={footerStyles.linkItem}>Returns</li>
            <li style={footerStyles.linkItem}>Privacy Policy</li>
          </ul>
        </div>
      </div>

   
      <div style={footerStyles.bottomDivider} />

   
      <div style={footerStyles.bottomBar}>
        <p style={footerStyles.copyright}>© 2025 DiVino. All rights reserved.</p>
      </div>
    </div>
  );
};

const footerStyles = {
  wrapper: {
    backgroundColor: 'transparent',
    padding: '2rem',
    marginTop: '4rem',
  },
  divider: {
    height: '1px',
    backgroundColor: '#d3d3d3', // grigio chiaro
    marginBottom: '2rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1 1 250px',
    marginBottom: '2rem',
  },
  logo: {
    textAlign: 'left',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#000',
    marginBottom: '2rem',
    marginLeft:'2rem'
  },
  lightText: {
    textAlign: 'left',
    color: '#aaa',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    marginLeft:'2rem'
  },
  sectionTitle: {
    color: '#aaa',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  linkList: {
    listStyle: 'none',
    padding: 20,
    margin: 0,
  },
  linkItem: {
    color: 'black',
    marginBottom: '0.5rem',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  bottomDivider: {
    height: '1px',
    backgroundColor: '#d3d3d3',
    margin: '2rem auto 1rem',
    width: '90%', // non tocca i bordi
  },
  bottomBar: {
    textAlign: 'left',
    paddingLeft: '0.5rem',
  },
  copyright: {
    color: '#000',
    fontSize: '0.9rem',
  },
};
export default Footer;
