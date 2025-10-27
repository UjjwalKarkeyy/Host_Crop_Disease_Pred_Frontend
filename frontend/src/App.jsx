import PlantImgComponent from "./components/plantImg";
import "./App.css";
import ImageUploader from "./components/imageUploader";

// local icons
import github_icon from "./assets/github_icon.png";
import linkedin_icon from "./assets/linkedin_icon.png";
import email_icon from "./assets/email_icon.jpg";

function App() {
  return (
    <>
      <div className="main-content">
        {/* About */}
        <div className="about-section">
          <h2>About CropLysis</h2>
          <ul>
            <li>Predicts crop (Pepper, Potato, Tomato) diseases from leaf images</li>
            <li>Probability of disease is shown</li>
            <li>Visit below link to know about the model</li>
            <li>
              <a
                href="https://github.com/UjjwalKarkeyy/Crop_Disease_Prediction_Deploy"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </li>
          </ul>
        </div>

        {/* Title */}
        <h1 id="title">CropLysis (Crop Analysis)</h1><br></br>
        <h2 id="instruction">Upload Your Image Below</h2>

        {/* Upload */}
        <div className="upload-wrapper">
          <ImageUploader />
        </div>

        {/* Contact */}
        <div className="contact-section">
          <span className="contact-label">Contact Me:</span>
          <div className="contact-icons">
            <a href="https://github.com/UjjwalKarkeyy" target="_blank" rel="noopener noreferrer">
              <img src={github_icon} alt="GitHub" className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/ujjwal-karki-871b592a9/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_icon} alt="LinkedIn" className="contact-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Background leaf */}
      <PlantImgComponent />
    </>
  );
}

export default App;
