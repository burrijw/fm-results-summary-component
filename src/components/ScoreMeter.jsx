const ScoreMeter = ({ scores }) => {
  const scoreAverage = Math.floor(
    scores.reduce((acc, curr) => {
      return acc + curr;
    }) / scores.length
  );

  return (
    <div className="mb-4 grid aspect-square w-[140px] place-content-center rounded-full bg-gradient-to-b from-violet to-transparent md:mb-5 md:w-[200px]">
      <p className="flex flex-col items-center">
        <span className="mb-3 text-2xl font-bold leading-none text-white md:text-3xl">
          {scoreAverage}
        </span>
        <span className="leading-none text-lavender opacity-50 md:text-base md:font-bold">
          of 100
        </span>
      </p>
    </div>
  );
};
export default ScoreMeter;
