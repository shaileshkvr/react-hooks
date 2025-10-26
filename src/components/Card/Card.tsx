interface CardProps {
  cardTitle?: string;
  cardText?: string;
  children?: React.ReactNode;
}

const Card = ({ cardTitle, cardText, children }: CardProps) => {
  console.log(children);
  return (
    <div className="w-80 bg-white/10 border border-white/40 rounded-2xl backdrop-blur-sm p-4 hover:transition-all hover:border-white cursor-default">
      <h2 className="text-white text-xl mb-2">
        {cardTitle ?? "UseState Hook"}
      </h2>
      <p className="text-white/70">
        {cardText ??
          `React useState returns an array with two elements, first is the state
          and second is the function to update the state.`}
      </p>

      {children}
    </div>
  );
};

export default Card;
