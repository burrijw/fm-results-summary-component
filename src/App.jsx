import Heading from "./components/Heading";
import Card from "./components/Card";
import ScoreMeter from "./components/ScoreMeter";
import SummaryItems from "./components/SummaryItems";
import Stack from "./components/layout/Stack";
import Button from "./components/Button";
import data from "./data.json";

const scores = data.map((item) => item.score);

function App() {
  return (
    <Card>
      <h1 className="sr-only">Performance Results Summary</h1>
      <div className="flex flex-col items-center rounded-b-lg bg-gradient-to-b from-violet-light to-blue-light pt-6 pb-10 shadow md:rounded-lg">
        <Heading className="mb-6 text-lavender">Your Result</Heading>
        <ScoreMeter scores={scores} />
        <p className="mb-2 text-lg font-bold text-white md:text-xl">Great</p>
        <p className="max-w-[16.25rem] text-center text-sm leading-5 text-lavender md:text-base">
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
    </Card>
  );
}

export default App;
