import './App.css'

function App() {
  return (
    <div className="bino-container">
      <header className="bino-hero">
        <h1>Bino</h1>
        <h2>Your intelligent WhatsApp search assistant</h2>
        <p className="bino-tagline">
          Connect instantly with businesses, services, and opportunities worldwide.<br/>
          No apps, no complexity – just instant results on WhatsApp.
        </p>
        <a className="bino-cta" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          Try Bino on WhatsApp
        </a>
      </header>
      <section className="bino-features">
        <h3>What can Bino do for you?</h3>
        <div className="bino-features-list">
          <div className="bino-feature">
            <h4>Find Local Services</h4>
            <p>Discover nearby restaurants, repair shops, tutors, and more – all via WhatsApp.</p>
          </div>
          <div className="bino-feature">
            <h4>Business Discovery</h4>
            <p>Connect with businesses worldwide, explore offerings, and get instant responses.</p>
          </div>
          <div className="bino-feature">
            <h4>Professional Networking</h4>
            <p>Expand your network, find collaborators, and unlock new opportunities.</p>
          </div>
          <div className="bino-feature">
            <h4>Healthcare & Wellness</h4>
            <p>Find doctors, clinics, wellness centers, and book appointments easily.</p>
          </div>
        </div>
      </section>
      <footer className="bino-footer">
        <p>Ready to experience the future of search? <b>Message Bino on WhatsApp now!</b></p>
        <a className="bino-cta" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          Start Chatting
        </a>
      </footer>
    </div>
  )
}

export default App
