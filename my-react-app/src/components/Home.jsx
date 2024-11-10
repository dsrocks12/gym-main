import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Our Gym</h1>
        <p style={styles.intro}>Your journey to a healthier, fitter you starts here. Let us guide you to success!</p>

        <div style={styles.linksContainer}>
          <Link to="/about" style={styles.link}>Go To About</Link>
          <Link to="/contact" style={styles.link}>Go to Contact Us</Link>
          <Link to="/innovation" style={styles.link}>Go To Innovation</Link>
          <Link to="/credits" style={styles.link}>Go To Credits</Link>
          <Link to="/business" style={styles.link}>Go to Business</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to bottom, #111111, #333333)', // Dark gradient background
    minHeight: '100vh', // Ensure the container takes full height of the screen
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center content vertically
    flexDirection: 'column',
    padding: '0', // Remove padding to prevent extra space
    margin: '0', // Remove margin around the body
    overflowX: 'hidden', // Prevent horizontal scrolling
  },
  content: {
    textAlign: 'center',
    backgroundColor: '#222222', // Dark gray background for the content area
    padding: '50px 80px', // Spacious padding for design
    borderRadius: '12px', // Rounded corners for the content box
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)', // Box shadow for depth
    maxWidth: '1200px', // Max-width to maintain readability on large screens
    width: '100%',
    boxSizing: 'border-box', // Ensure padding doesn't affect the width calculation
  },
  title: {
    fontSize: '50px', // Larger title size
    fontWeight: 'bold',
    color: '#fff', // White text for better contrast
    marginBottom: '25px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
  },
  intro: {
    fontSize: '22px',
    color: '#bbb', // Lighter text for intro paragraph
    marginBottom: '50px',
    lineHeight: '1.8',
    fontWeight: '400',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    alignItems: 'center',
    marginTop: '40px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: 'white',
    backgroundColor: '#3498db', // Blue background for the links
    padding: '18px 30px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '300px', // Ensure buttons are consistent in size
    textAlign: 'center',
    fontWeight: '500',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slight shadow for depth
    transition: 'all 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#2980b9', // Darker blue for hover
    transform: 'scale(1.05)', // Hover effect for scaling
  },
};

export default Home;
