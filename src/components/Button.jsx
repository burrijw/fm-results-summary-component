const Button = ({ as, href, children }) => {
  const buttonStyles =
    "flex justify-center rounded-full bg-gray py-4 text-base font-bold text-white transition duration-1000 hover:bg-gradient-to-b hover:from-violet-light hover:to-blue-light";

  if (as === "link") {
    return (
      <a href={href} className={buttonStyles}>
        {children}
      </a>
    );
  } else if (as === "button") {
    return <button className={buttonStyles}>{children}</button>;
  }
};
export default Button;
