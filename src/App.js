// import logo from "./logo.svg";
import "./App.css";

// function getTitle(title) {
//   return title;
// }
// const title = "React Introduction";

const cars = [
  {
    title: "mini",
    color: "purple",
    type: "minivan",
    url: "https://www.carmax.com/cars/minivans-and-vans",
    registration: new Date("2017-01-03"),
    id: 7,
  },
  {
    title: "wagon",
    color: "red",
    type: "station wagon",
    url: "https://cars.usnews.com/cars-trucks/rankings/wagons",
    registration: new Date("2018-03-03"), //2018-03-03
    id: 5,
  },
];
function App() {
  return (
    <div>
      <section>
        {/* <h1>Hello {getTitle("React Introductin")}</h1> */}
        <h1>The react Introductin</h1>
        <hr />
        <label htmlFor="search">search</label>
        <input id="search" type="text" />
        <hr />
      </section>
      <section>
        <form>
          <label htmlFor="name">First Name</label>
          <input id="name" type="text" />
        </form>
      </section>
      <hr />
      {/*render the list of cars */}
      <ul>
        {cars.map(function (item) {
          return (
            <div key={item.id}>
              <li>{item.title}</li>
              <li>
                <a href={item.url} target="_black">
                  clik here
                </a>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
