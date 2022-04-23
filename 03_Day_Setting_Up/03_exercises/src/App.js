import logo from "./logo.svg";
import model from "./model/model";
import "./App.css";
const header = (
  <header>
    <h1>{model.welcome}</h1>
    <h2>{model.title}</h2>
    <h3>{model.subtitle}</h3>
    <p>
      From {model.author.firstName} {model.author.lastName} with love
    </p>
    <small>Date: {model.date}</small>
  </header>
);
const inputField = (
  <div>
    <label htmlFor="firstname">First Name</label>
    <input type="text" id="firstname" placeholder="First Name" />
  </div>
);
const main = (
  <main>
    {model.title}
    <p>Prerequisite to get started react.js:</p>
    <ul>
      {model.techs.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
    {inputField}
  </main>
);

const footer = (
  <footer>
    <p>{model.copyright}</p>
  </footer>
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
