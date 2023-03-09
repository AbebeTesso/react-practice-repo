// import logo from "./logo.svg";
import "./App.css";

// function getTitle(title) {
//   return title;
// }
// const title = "React Introduction";

let cars = [
  {
    name: "mini",
    color: "purple",
    type: "minivan",
    url: "https://www.carmax.com/cars/minivans-and-vans",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    name: "wagon",
    color: "red",
    type: "station wagon",
    url: "https://cars.usnews.com/cars-trucks/rankings/wagons",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];
function App() {
  return (
    <div>
      <section>
        {/* <h1>Hello {getTitle("React Introductin")}</h1> */}
        <h1>The react Introductin</h1>
        <label htmlFor="search">search</label>
        <input id="search" type="text" />
        <hr />
      </section>
      <section>
        <form>
          <label nameFor="name">First Name</label>
          <input id="name" type="text" />
        </form>
      </section>
      <hr />
      {/*render the list of cars */}
      <ul>
        {cars.map(function (item) {
          return (
            <div>
              <li>
                {item.name}, {item.color}
              </li>
              <li>{item.type}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
