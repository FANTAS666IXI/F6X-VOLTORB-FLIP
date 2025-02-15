import { useState } from "react"
import ColorsData from "../Data/colors.json"

export default function Board() {
    const colors = ColorsData.colors

    return (
        <div className="board">
            {colors.map((color, i) => (<Row key={`ROW-${i}`} row={i} color={color} />))}
            <BottomInfoCards colors={colors} />
        </div>
    )

    function Row({ row, color }) {
        const rowLength = 5
        return (
            <div className="row">
                {Array.from({ length: rowLength }, (_, index) => (
                    <Card key={`CARD-${row}-${index}`} />
                ))}
                <InfoCard key={`CARD-${row}-${rowLength}`} color={color} />
                <img className="background" src={`/items/lines/horizontal/row_${color}.png`} alt="Row Background" />
            </div>
        )
    }

    function Card() {
        const [isRevealed, setIsRevealed] = useState(false)
        const cardValue = Math.floor(Math.random() * 4)

        function revealCard() {
            setIsRevealed(true);
        }

        return (
            <div className="card" >
                <img src="items/cards/card.png" alt="Card" onClick={revealCard} />
                {isRevealed && <p className="card-content">{cardValue}</p>}
            </div>
        )
    }

    function InfoCard({ color }) {
        const points = 5
        const voltorbs = 0

        return (
            <div className="info-card">
                <p className="points">{points}</p>
                <p className="voltorbs">{voltorbs}</p>
                <img src={`items/cards/info_cards/info_card_${color}.png`} alt={`Info Card ${color}`} />
            </div>
        )
    }

    function BottomInfoCards({ colors }) {
        return (
            <div className="bottom-info-cards">
                {colors.map((color, i) => (
                    <Column key={`COLUMN-${i}`} index={i} color={color} />
                ))}
                <InvisibleCard key={"CARD-5-5"} />
            </div>
        )
    }

    function Column({ index, color }) {
        return (
            <div className="column">
                <InfoCard key={`CARD-5-${index}`} color={color} />
                <img
                    className="background"
                    src={`/items/lines/vertical/column_${color}.png`}
                    alt={`Column Background ${color}`}
                />
            </div>
        )
    }

    function InvisibleCard() {
        return (
            <div className="info-card invisible-card">
                <img src="items/cards/info_cards/info_card_red.png" alt="Invisible Info Card" />
            </div>
        )
    }
}