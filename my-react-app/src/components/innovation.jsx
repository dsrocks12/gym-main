import React from 'react';

const Innovation = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Innovation at Our Gym</h1>
        <p style={styles.intro}>
          At our gym, we are always pushing the boundaries to bring the latest in fitness technology and innovation to enhance your workout experience.
        </p>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Smart Fitness Equipment</h2>
          <p style={styles.text}>
            Experience the future of fitness with our smart equipment, designed to track your progress in real-time and provide personalized feedback.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Virtual Group Classes</h2>
          <p style={styles.text}>
            Join our virtual group classes and train with top trainers from the comfort of your home or at the gym, using state-of-the-art video technology.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>AI-Powered Personal Trainers</h2>
          <p style={styles.text}>
            Our AI-powered personal trainers offer custom workout plans tailored to your needs, helping you reach your fitness goals faster.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Innovative Recovery Solutions</h2>
          <p style={styles.text}>
            Our advanced recovery tools, including cryotherapy and infrared saunas, are designed to speed up recovery and keep you feeling great.
          </p>
        </div>

        {/* New Content */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Fitness Tracking App</h2>
          <p style={styles.text}>
            Stay connected to your fitness journey with our personalized fitness tracking app. Sync your workouts, monitor progress, and receive tips to maximize your results.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Wearable Technology</h2>
          <p style={styles.text}>
            Track your heart rate, calories burned, steps taken, and much more with our range of fitness wearables. Integrate your device with our gym systems for seamless tracking.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Sustainable Gym Practices</h2>
          <p style={styles.text}>
            We care about the environment and have incorporated sustainable practices into our gym operations. From energy-efficient lighting to eco-friendly equipment, we are committed to a greener future.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Nutrition Integration</h2>
          <p style={styles.text}>
            Our gym integrates with your dietary needs by offering personalized nutrition plans, supported by our in-house nutritionists and smart food tracking apps.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Gym Member Community</h2>
          <p style={styles.text}>
            Join our innovative gym community to share progress, motivate others, and engage in fitness challenges. Connect with like-minded individuals in a supportive environment.
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

export default Innovation;
