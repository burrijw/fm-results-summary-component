import { clsx } from "clsx";

const SummaryItem = ({ category, score, icon }) => {
  const colorMap = {
    Reaction: {
      text: "text-red",
      bg: "bg-red-pale",
    },
    Memory: {
      text: "text-yellow",
      bg: "bg-yellow-pale",
    },
    Verbal: {
      text: "text-green",
      bg: "bg-green-pale",
    },
    Visual: {
      text: "text-blue",
      bg: "bg-blue-pale",
    },
  };

  const containerStyles = clsx(
    "flex gap-2 rounded-sm p-4 text-sm",
    colorMap[category].bg
  );

  const itemTitleStyles = clsx(colorMap[category].text);

  return (
    <div className={containerStyles}>
      <img src={icon} alt={`${category} icon`} />
      <p className={itemTitleStyles}>{category}</p>
      <p className="ml-auto text-gray">
        <span className="font-bold text-gray">{score}</span>
        <span className="opacity-50"> / 100</span>
      </p>
    </div>
  );
};

export default SummaryItem;
