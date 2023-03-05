// import logo from "./logo.svg";
import "./App.css";

function getTitle(title) {
  return title;
}
// const title = "React Introduction";
function App() {
  return (
    <div>
      <h1>CTD {getTitle("React Introduction")} </h1>
      <label htmlFor="search" className="search_1">
        Search
      </label>
      <input id="seach" type="text" />
    </div>
  );
}

export default App;
