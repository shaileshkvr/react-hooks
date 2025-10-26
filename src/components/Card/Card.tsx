interface CardProps {
  cardTitle?: string;
  cardText?: string;
  child?: React.ReactNode;
}

const Card = ({ cardTitle, cardText, child }: CardProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-64 bg-white/20 border rounded-2xl backdrop-blur-sm p-4 m-4">
        <h2 className="text-white text-xl mb-2">
          {cardTitle ?? "UseState Hook"}
        </h2>
        <p className="text-white/70">
          {cardText ??
            `React useState returns an array with two elements, first is the state
          and second is the function to update the state.`}
        </p>
      </div>
      {child ?? null}
    </div>
  );
};

export default Card;
