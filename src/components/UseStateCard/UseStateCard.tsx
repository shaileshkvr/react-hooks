import { useState } from "react";

const UseStateCard = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };
  return (
    
  );
};

export default UseStateCard;
