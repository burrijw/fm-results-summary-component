const Heading = ({ className, children }) => {
  return (
    <h2 className={`text-base font-bold md:text-lg ${className}`}>
      {children}
    </h2>
  );
};
export default Heading;
