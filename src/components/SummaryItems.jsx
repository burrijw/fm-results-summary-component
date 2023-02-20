import SummaryItem from "./SummaryItem";
const SummaryItems = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <SummaryItem
            key={item.category}
            category={item.category}
            score={item.score}
            icon={item.icon}
          />
        );
      })}
    </>
  );
};
export default SummaryItems;
