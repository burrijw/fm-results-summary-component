const Card = ({ children }) => {
  return (
    <article className=" w-full bg-white md:grid md:max-w-3xl md:grid-cols-2 md:rounded-lg">
      {children}
    </article>
  );
};
export default Card;
