import Heading from "./components/Heading";
import SummaryItems from "./components/SummaryItems";
import Stack from "./components/layout/Stack";
import Button from "./components/Button";
import data from "./data.json";

const scores = data.map((item) => item.score);
const scoreAverage = Math.floor(
  scores.reduce((acc, curr) => {
    return acc + curr;
  }) / scores.length
);

function App() {
  return (
    <article>
      <h1 className="sr-only">Performance Results Summary</h1>
      <div className="flex flex-col items-center rounded-b-lg bg-gradient-to-b from-violet-light to-blue-light pt-6 pb-10 shadow">
        <Heading className="mb-6 text-lavender">Your Result</Heading>
        {/* score meter */}
        <div className="mb-4 grid aspect-square w-[140px] place-content-center rounded-full bg-gradient-to-b from-violet to-transparent">
          <p className="flex flex-col items-center">
            <span className="mb-3 text-2xl font-bold leading-none text-white">
              {scoreAverage}
            </span>
            <span className="leading-none text-lavender opacity-50">
              of 100
            </span>
          </p>
        </div>
        <p className="mb-2 text-lg font-bold text-white">Great</p>
        <p className="max-w-[30ch] text-center text-sm leading-5 text-lavender">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      <div className="p-[1.875rem] pt-6">
        <Heading className="mb-6 text-gray">Summary</Heading>
        <Stack direction="col" className="mb-6 gap-4">
          <SummaryItems data={data} />
        </Stack>
        <Button as="link" href="#">
          Continue
        </Button>
      </div>
    </article>
  );
}

export default App;
