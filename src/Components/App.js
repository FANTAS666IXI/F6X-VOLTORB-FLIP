import VersionWaterMark from "./VersionWaterMark";

export default function App() {
  return (
    <div className="App">
      <Title />
      <VersionWaterMark />
    </div>
  );
};

function Title() {
  return (
    <h1 className="title">F6X VOLTORB FLIP</h1>
  );
};