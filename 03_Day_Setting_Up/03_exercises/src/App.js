import logoImg from "./logo.svg";
import model from "./model/model";
import "./App.css";
const header = (
  <header className="header-wrapper">
    <h1>{model.welcome}</h1>
    <h2>{model.title}</h2>
    <h3>{model.subtitle}</h3>
    <p>
      From {model.author.firstName} {model.author.lastName} with love
    </p>
    <small>Date: {model.date}</small>
  </header>
);
const subcribeForm = (
  <form className="subcribe-form">
    <h1>{model.reciveMail}</h1>
    <p>{model.reciveMailSubText}</p>
    <div className="input-field">
      <input
        type="text"
        id="firstname"
        placeholder={model.firstnamePlaceholder}
      ></input>
      <input
        type="text"
        id="lastname"
        placeholder={model.lastnamePlaceholder}
      ></input>
      <input type="text" id="mail" placeholder={model.emailPlaceholder}></input>
    </div>
    <input
      type="button"
      id="supscribe"
      className="submit-button"
      onSubmit={() => { }}
      value={model.supscribe}
    ></input>
  </form>
);
const logo = (
  <div>
    <img src={logoImg} className="App-logo" alt="logo"></img>
  </div>
);
const main = (
  <main className="main-wrapper">
    {logo}
    <p>Prerequisite to get started react.js:</p>
    <ul>
      {model.techs.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
  </main>
);

const footer = (
  <div className="footer-wrapper">
    {subcribeForm}
    <footer >
      <p>{model.copyright}</p>
    </footer>
  </div>
);
function App() {
  return (
    <div className="app">
      {header}
      {main}
      {footer}
    </div>
  );
}

export default App;
