import React from 'react';

const Business = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Our Business</h1>
        <p style={styles.intro}>
          We are committed to providing top-notch fitness services and building lasting relationships with our community. Here's a look at how we operate and grow as a business.
        </p>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.text}>
            At our gym, our mission is simple: to empower individuals to achieve their fitness goals in a welcoming and motivating environment. We strive to provide world-class equipment, cutting-edge fitness technologies, and expert training.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Revenue Model</h2>
          <p style={styles.text}>
            Our business generates revenue through a variety of services, including:
            <ul style={styles.list}>
              <li>Membership subscriptions (monthly, yearly, etc.)</li>
              <li>Personal training sessions</li>
              <li>Group classes (both in-person and virtual)</li>
              <li>Retail sales of fitness equipment, apparel, and supplements</li>
            </ul>
            We continuously innovate to introduce new services that help our clients achieve more.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Values</h2>
          <p style={styles.text}>
            We believe in:
            <ul style={styles.list}>
              <li>Integrity: We operate with transparency and fairness.</li>
              <li>Innovation: We embrace the latest technologies to enhance the fitness experience.</li>
              <li>Community: We foster a supportive environment where everyone is welcome.</li>
              <li>Excellence: We are committed to offering the best in equipment, training, and service.</li>
            </ul>
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Partnership Opportunities</h2>
          <p style={styles.text}>
            We are always looking for like-minded businesses to partner with. Whether you are a fitness brand, wellness company, or technology provider, we welcome collaboration opportunities that align with our mission.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Sustainability Practices</h2>
          <p style={styles.text}>
            Our gym is committed to sustainability. We aim to minimize our environmental impact by:
            <ul style={styles.list}>
              <li>Using eco-friendly cleaning products</li>
              <li>Reducing waste through recycling programs</li>
              <li>Implementing energy-efficient lighting and equipment</li>
              <li>Supporting local, sustainable suppliers</li>
            </ul>
            Sustainability is a core value that we incorporate into every aspect of our business operations.
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
  list: {
    textAlign: 'left',
    fontSize: '18px',
    color: '#ddd',
    marginLeft: '20px',
  },
};

export default Business;
