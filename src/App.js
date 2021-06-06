import "./App.css";
import face from "./assets/Face.JPG";
import emailIcon from "./assets/EmailIcon.svg";
import githubLogoIcon from "./assets/GitHubLogoIcon.png";
import calculatorPreview from "./assets/CalculatorPreview.png";
import drumMachinePreview from "./assets/DrumMachinePreview.png";
import clockPreview from "./assets/25+5ClockPreview.png";
import randomQuoteMachinePreview from "./assets/RandomQuoteMachinePreview.png";

function App() {
  return (
    <div id="app">
      <div id="hero">
        <img
          src={face}
          alt="my face"
          style={{
            maxWidth: "calc(50px + 25vmin)",
            borderRadius: "50%",
            marginBottom: "10vmin",
          }}
        />
        <h1 style={{ marginBottom: "2vmin" }}>Hello, I'm Taylor</h1>
        <p style={{ color: "var(--nord7)", fontStyle: "italic" }}>
          a web developer
        </p>
      </div>
      <div id="projects">
        <h1>My projects</h1>
        <div className="card">
          <img
            className="card-image"
            src={calculatorPreview}
            alt="Calculator"
          />
          <h1 className="card-title">Immediate-execution calculator</h1>
          <p className="card-text">
            This is an immediate-execution style calculator web app built using
            React. You can use basic operations to form expressions and get the
            answers.
          </p>
          <div className="card-actions" style={{ display: "flex" }}>
            <a
              className="button card-button-1"
              href="https://taylorli2000.github.io/calculator/"
              rel="noreferrer"
              target="_blank"
            >
              Try it
            </a>
            <a
              className="button card-button-2"
              href="https://github.com/taylorli2000/calculator/"
              rel="noreferrer"
              target="_blank"
            >
              See the code
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-image"
            src={randomQuoteMachinePreview}
            alt="Random quote machine"
          />
          <h1 className="card-title">Random quote machine</h1>
          <p className="card-text">
            This is random quote machine web app built using React. You can see
            random quotes grabbed from a RESTful API and tweet the quote.
          </p>
          <div className="card-actions" style={{ display: "flex" }}>
            <a
              className="button card-button-1"
              href="https://taylorli2000.github.io/random-quote-machine/"
              rel="noreferrer"
              target="_blank"
            >
              Try it
            </a>
            <a
              className="button card-button-2"
              href="https://github.com/taylorli2000/random-quote-machine/"
              rel="noreferrer"
              target="_blank"
            >
              See the code
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-image"
            src={drumMachinePreview}
            alt="Drum machine"
          />
          <h1 className="card-title">Drum machine</h1>
          <p className="card-text">
            This is a drum machine web app built using React. You can create
            beats or songs using the predefined sounds by clicking on the
            buttons or tapping the keyboard keys.
          </p>
          <div className="card-actions" style={{ display: "flex" }}>
            <a
              className="button card-button-1"
              href="https://taylorli2000.github.io/drum-machine/"
              rel="noreferrer"
              target="_blank"
            >
              Try it
            </a>
            <a
              className="button card-button-2"
              href="https://github.com/taylorli2000/drum-machine/"
              rel="noreferrer"
              target="_blank"
            >
              See the code
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src={clockPreview} alt="25+5 clock" />
          <h1 className="card-title">25 + 5 clock</h1>
          <p className="card-text">
            This is a 25 + 5 clock web app built using React. There are two
            different sessions that can be used to split up working and break
            time.
          </p>
          <div className="card-actions" style={{ display: "flex" }}>
            <a
              className="button card-button-1"
              href="https://taylorli2000.github.io/25-5-clock/"
              rel="noreferrer"
              target="_blank"
            >
              Try it
            </a>
            <a
              className="button card-button-2"
              href="https://github.com/taylorli2000/25-5-clock/"
              rel="noreferrer"
              target="_blank"
            >
              See the code
            </a>
          </div>
        </div>
      </div>
      <div id="footer">
        <h1>Contact me</h1>
        <div style={{ display: "flex", marginTop: "3vh" }}>
          <a
            className="button"
            href="https://github.com/taylorli2000/"
            rel="noreferrer"
            target="_blank"
            style={{ backgroundColor: "var(--nord10)" }}
          >
            <img className="button-image" src={githubLogoIcon} alt="GitHub" />
            GitHub
          </a>
          <a
            className="button"
            href="mailto:t4ylor.li@gmail.com"
            rel="noreferrer"
            target="_blank"
            style={{ backgroundColor: "var(--nord11)" }}
          >
            <img className="button-image" src={emailIcon} alt="email" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
