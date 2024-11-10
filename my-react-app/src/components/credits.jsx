import React from 'react';

const Credits = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Credits</h1>
        <p style={styles.intro}>
          We would like to thank everyone who made this gym experience possible. Here are some of the key contributors and partners who helped bring this vision to life.
        </p>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Founders & Team</h2>
          <p style={styles.text}>
            <strong>Dakshit Singh</strong> - CEO & Founder<br />
            <strong>Bishwajeet Sahoo</strong> - COO & Co-Founder<br />
            <strong>Dakshit Singh</strong> - Chief Trainer<br />
            <strong>Bishwajeet Sahoo</strong> - Lead Nutritionist
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Technology Partners</h2>
          <p style={styles.text}>
            <strong>FitTech Solutions</strong> - Providing smart gym equipment and fitness tracking technologies.<br />
            <strong>HealthFit Innovations</strong> - Developer of AI-powered personal trainers and virtual classes.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Design & Branding</h2>
          <p style={styles.text}>
            <strong>Creative Studios</strong> - For designing our gym brand and digital presence.<br />
            <strong>PixelPerfect Media</strong> - Photography and visual content creation.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Special Thanks</h2>
          <p style={styles.text}>
            A huge thank you to our incredible community of gym members who inspire us daily. Your dedication and feedback make us better!
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

export default Credits;
