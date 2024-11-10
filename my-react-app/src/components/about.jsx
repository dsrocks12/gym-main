import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>About Our Gym</h1>
        <p style={styles.intro}>
          Welcome to our gym, where innovation meets dedication to help you achieve your fitness goals. We believe in a holistic approach to health and fitness, combining state-of-the-art technology, expert guidance, and a welcoming community.
        </p>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.text}>
            Our mission is to provide the best fitness experience, using cutting-edge technology and personalized training to help you achieve results. We are dedicated to empowering individuals to live healthier, more active lives.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Vision</h2>
          <p style={styles.text}>
            We envision a future where fitness is accessible to everyone, regardless of their background or fitness level. Our gym aims to be a place where people from all walks of life can come together, train hard, and achieve their personal best.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our History</h2>
          <p style={styles.text}>
            Founded in [Year], our gym has evolved from a small community space into a state-of-the-art fitness center. With our focus on innovation and growth, we’ve always aimed to stay ahead of fitness trends to provide the best for our members.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Meet Our Team</h2>
          <p style={styles.text}>
            Our team consists of fitness experts, certified trainers, and passionate individuals who are dedicated to your fitness journey. Together, we’re here to provide guidance, motivation, and support to help you succeed.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
          <p style={styles.text}>
            We offer personalized workouts, advanced fitness technology, and a friendly, community-driven environment. Whether you’re a beginner or an experienced athlete, we have the tools and expertise to help you reach your full potential.
          </p>
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
};

export default About;
