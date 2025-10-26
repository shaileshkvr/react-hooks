import grid from "./assets/images/grid.png";
import UseStateCard from "./components/UseStateCard/UseStateCard.js";

const App = () => {
  return (
    <div
      className="h-screen"
      style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
    >
      <h1 className="text-4xl text-gray-200 p-5">React Hooks</h1>
      <div className={`flex flex-wrap gap-8 px-5`}>
        <UseStateCard />
        <UseStateCard />
        <UseStateCard />
        <UseStateCard />
        <UseStateCard />
        <UseStateCard />
      </div>
    </div>
  );
};

export default App;
