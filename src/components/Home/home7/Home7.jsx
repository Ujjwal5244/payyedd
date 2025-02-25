import './Home7.css'

function App() {
  return (
    <div className="app">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Awesome Customer Support</h1>
          <p>Have you any query? Don't worry. We have great people ready to help you whenever you need it.</p>
          <button className="cta-button">Find out more</button>
        </div>
      </section>
      
      <section className="app-section">
        <div className="app-content">
          <h2>Get the app</h2>
          <p>Download our app for the fastest, most convenient way to send & get Payment.</p>
          <div className="store-buttons">
            <a href="#" className="store-button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
            </a>
            <a href="#" className="store-button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App