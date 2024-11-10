import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.intro}>
          We would love to hear from you! If you have any questions or need more information about our gym, please feel free to reach out to us.
        </p>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Location</h2>
          <p style={styles.text}>
            123 Fitness Street, Gym City, FitLand, 56789
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1206607279296!2d-122.08590218468185!3d37.42216597982507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba3a1c8e4f6b%3A0x4d6be29d4f555321!2sGoogleplex!5e0!3m2!1sen!2sus!4v1603933423007!5m2!1sen!2sus"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Details</h2>
          <p style={styles.text}>Phone: (123) 456-7890</p>
          <p style={styles.text}>Email: contact@gym.com</p>
          <p style={styles.text}>Social Media: @OurGymOfficial</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1d1d1d', // Dark background
    minHeight: '100vh', // Full height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the top
    flexDirection: 'column',
    padding: '0 10px',
    overflowX: 'hidden',
    color: 'white', // White text for contrast
  },
  content: {
    textAlign: 'center',
    backgroundColor: '#333', // Dark gray background for content
    padding: '40px 60px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
    maxWidth: '1000px',
    width: '100%',
    margin: '20px 0',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
  },
  intro: {
    fontSize: '20px',
    color: '#bbb',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '30px',
    color: '#fff',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  text: {
    fontSize: '18px',
    color: '#ddd',
    lineHeight: '1.6',
  },
  map: {
    width: '100%',
    height: '300px',
    border: 'none',
    borderRadius: '10px',
    marginTop: '20px',
  },
};

export default Contact;
