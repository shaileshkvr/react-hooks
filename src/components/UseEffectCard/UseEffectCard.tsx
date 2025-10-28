import { useState, useEffect } from "react";
import Card from "../Card/Card.tsx";

const UseEffectCard = () => {
  const [count, setCount] = useState(0);
  useEffect((): void => {
    setCount((prev) => prev + 1);
  });
  return <Card cardTitle="UseEffect Hook" cardText=""></Card>;
};

export default UseEffectCard;
