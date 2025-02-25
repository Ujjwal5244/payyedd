// App.jsx
import './Service2.css'
import architectImg from '../../../assets/service2img1.svg'
import DevelopmentImg from '../../../assets/service2img2.svg'
import TestingImg from '../../../assets/service2img3.svg'



function Service2() {
  return (
    <div className="container-service2">
      <h1 className="service2-title">
        Our working process on<br />
        how to grow your business
      </h1>
      
      <div className="cards-container-service2">
        <div className="card-service2">
          <img 
            src={architectImg} 
            alt="Initiation and Planning illustration" 
            className="card-image-service2"
          />
          <h2 className="service2-card-title">Initiation & Planning</h2>
          <p className="service2-card-description">
            We are architects innovation trailblazers of technological advancement
          </p>
        </div>

        <div className="card-service2">
          <img 
            src={DevelopmentImg}
            alt="Execution and Development illustration" 
            className="card-image-service2"
          />
          <h2 className="service2-card-title">Execution & Development</h2>
          <p className="service2-card-description">
            We are architects innovation trailblazers of technological advancement
          </p>
        </div>

        <div className="card-service2">
          <img 
            src={TestingImg}
            alt="Testing and Maintenance illustration" 
            className="card-image-service2"
          />
          <h2 className="service2-card-title">Testing & Maintenance</h2>
          <p className="service2-card-description">
            We are architects innovation trailblazers of technological advancement
          </p>
        </div>
      </div>
    </div>
  )
}

export default Service2