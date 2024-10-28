import { useState } from "react"
import ColorsData from "../Data/colors.json"

export default function Board() {
    const colors = ColorsData.colors

    return (
        <div className="board__container">
            <div className="board">
                {colors.map((color, i) => (<Row key={`ROW-${i}`} row={i} color={color} />))}
                <BottomSideCards colors={colors} />
            </div>
        </div>
    )

    function Row({ row, color }) {
        const rowLength = 5
        return (
            <div className="board__row">
                {Array.from({ length: rowLength }, (_, index) => (
                    <Card key={`CARD-${row}-${index}`} />
                ))}
                <SideCard key={`CARD-${row}-${rowLength}`} color={color} />
                <img className="row__background" src={`/items/lines/horizontal/row_${color}.png`} alt="board row background" />
            </div>
        )
    }

    function Card() {
        const [isRevealed, setIsRevealed] = useState(false)
        const cardValue = Math.floor(Math.random() * 4)

        function handleCardClick() {
            setIsRevealed((prevIsRevealed) => prevIsRevealed || true);
        }

        return (
            <div className="card" onClick={handleCardClick} >
                <img className="card__img" src="items/cards/card.png" alt="Card.png" />
                {isRevealed && <p className="card__content">{cardValue}</p>}
            </div>
        )
    }

    function SideCard({ color }) {
        const points = 5
        const voltorbs = 0

        return (
            <div className="side__card">
                <p className="side__card__points">{points}</p>
                <p className="side__card__voltorbs">{voltorbs}</p>
                <img className="side__card__img" src={`items/cards/side_cards/side_card_${color}.png`} alt={`${color} side card`} />
            </div>
        )
    }

    function BottomSideCards({ colors }) {
        return (
            <div className="bottom__side__cards">
                {colors.map((color, i) => (
                    <div key={`BOTTOM-COL-${i}`} className="column__container">
                        <img
                            className="column__background"
                            src={`/items/lines/vertical/column_${color}.png`}
                            alt={`column background for ${color}`}
                        />
                        <SideCard key={`CARD-5-${i}`} color={color} />
                    </div>
                ))}
            </div>
        )
    }
}