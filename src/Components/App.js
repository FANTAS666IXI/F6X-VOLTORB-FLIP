import ColorsData from "../Dataa/colors.json";
import VersionWaterMark from "./VersionWaterMark";

export default function App() {
  const colors = ColorsData.colors;

  return (
    <div className="App">
      <div className="DivTitle">
        <Title />
      </div>
      <div className="DivBoard">
        <Board colors={colors} />
      </div>
      <VersionWaterMark />
    </div>
  );
};

function Title() {
  return (
    <h1 className="Title">F6X VOLTORB FLIP</h1>
  );
};

function Board({ colors }) {
  return (
    <div className="Board">
      {colors.map((color, i) => (<Row key={`ROW-${i}`} row={i} color={color} />))}
      <BottomSideCards colors={colors} />
    </div>
  )
}

function Row({ row, color }) {
  const rowLength = 5;
  return (
    <div className="CardRow">
      {Array.from({ length: rowLength }, (_, index) => (
        <Card key={`CARD-${row}-${index}`} />
      ))}
      <SideCard key={`CARD-${row}-${rowLength}`} color={color} />
    </div>
  )
}

function Card() {
  return (
    <img className="Card" src="items/cards/card.png" alt="Card.png" />
  )
}

function SideCard({ color }) {
  return (
    <img className="SideCard" src={`items/cards/side_cards/side_card_${color}.png`} alt="SideCard.png" />
  )
}

function BottomSideCards({ colors }) {
  return (
    <div className="BottomSideCards">
      {colors.map((color, i) => (<SideCard key={`CARD-5-${i}`} color={color} />))}
    </div>
  )
}