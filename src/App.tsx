import grid from "./assets/images/grid.png";
import Card from "./components/UseStateCard/UseStateCard.js";

const App = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col`}
      style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
    ></div>
  );
};

export default App;
