import { useState } from "react";
import Card from "../Card/Card";

const UseStateCard = () => {
  const carColor = ["Maroon", "Blue", "Pink", "Olive Green"];
  const [number, setNumber] = useState(0);
  const [carData, setCarData] = useState({
    name: "Porsche 911",
    color: carColor[0],
  });

  const changeColor = (): void => {
    setCarData((prev) => ({
      ...prev,
      color: carColor[Math.floor(Math.random() * carColor.length)],
    }));
  };

  const increment = (): void => {
    setNumber(number + 1);
  };

  const decrement = (): void => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <Card>
      <div className="mt-5 flex justify-between items-center text-lg">
        <p className="text-white">{number > 9 ? number : `0${number}`}</p>
        <div className="flex">
          <button
            className="ml-2 w-10 bg-gray-300 rounded-lg"
            type="button"
            onClick={decrement}
          >
            -
          </button>
          <button
            className="ml-2 w-10 bg-gray-300 rounded-lg"
            type="button"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <h1 className="text-lg text-slate-300">
          I own a {carData.color} {carData.name}.
        </h1>
        <button
          type="button"
          onClick={changeColor}
          className="mt-2 p-1 bg-white/20 rounded-lg text-slate-300"
        >
          Change Color
        </button>
      </div>
    </Card>
  );
};

export default UseStateCard;
