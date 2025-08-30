import React from 'react';
import '../styles/index.css';

function Home() {
  return (
    <>
      <section className="hero">
        <h2>Smart Insights for Smarter Learning</h2>
        <p>Stay ahead in your academics with data-driven progress reports, visual dashboards, and actionable insights to achieve your academic goals.</p>
        <button onClick={() => window.location.href = '/signup'}>
          Get Started Free
        </button>
      </section>

      <section className="features" id="features">
        <div className="feature-box">
          <h3>📊 Progress Tracking</h3>
          <p>Monitor your subject-wise growth and visualize your journey with interactive charts and graphs.</p>
        </div>
        <div className="feature-box">
          <h3>⚡ Real-Time Updates</h3>
          <p>Instant updates on performance to help you adapt your learning strategy quickly.</p>
        </div>
        <div className="feature-box">
          <h3>🎯 Goal Oriented</h3>
          <p>Set study goals and measure your performance against them to stay focused.</p>
        </div>
      </section>
    </>
  );
}

export default Home;
