import { useState } from "react"
import ColorsData from "../Data/colors.json"

/**
 * @component App.
 * @returns {JSX.Element} - The App component.
 */
export default function Board() {
    /**
     * The Colors list.
     * @type {object}.
     */
    const colors = ColorsData

    return (
        <div className="board">
            {colors.map((color, i) => (<Row key={`ROW-${i}`} row={i} color={color} />))}
            <BottomInfoCards colors={colors} />
        </div>
    )

    /**
     * @component Row.
     * @param {number} row - The Index of the row.
     * @param {string} color - The Color of the row.
     * @returns {JSX.Element} - The Row component.
     */
    function Row({ row, color }) {
        /**
         * The number of cards by row.
         * @type {number}.
         */
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

    /**
     * @component Card.
     * @returns {JSX.Element} - The Card component.
     */
    function Card() {
        /**
         * Check if the card has been revealed.
         * @type {[boolean, function]}.
         */
        const [isRevealed, setIsRevealed] = useState(Math.floor(Math.random() * 2) === 0)

        /**
         * The value of the card.
         * @type {number}.
         */
        const cardValue = Math.floor(Math.random() * 4)

        /**
         * Reveals the card.
         */
        function revealCard() {
            setIsRevealed(true)
        }

        return (
            <div className="card" >
                <img src="items/cards/card.png" alt="Card" onClick={revealCard} />
                {isRevealed && <p className="card-content">{cardValue}</p>}
            </div>
        )
    }

    /**
     * @component Info Card.
     * @param {string} color - The Color of the Info Card.
     * @returns {JSX.Element} - The Info Card component.
     */
    function InfoCard({ color }) {
        /**
         * The number of points in the corresponding row.
         * @type {number}.
         */
        const points = 5

        /**
         * The number of voltorbs in the corresponding row.
         * @type {number}.
         */
        const voltorbs = 0

        return (
            <div className="info-card">
                <p className="points">{points}</p>
                <p className="voltorbs">{voltorbs}</p>
                <img src={`items/cards/info_cards/info_card_${color}.png`} alt={`Info Card ${color}`} />
            </div>
        )
    }

    /**
     * @component Bottom Info Cards.
     * @param {object} colors - The Colors list.
     * @returns {JSX.Element} - The Bottom Info Cards component.
     */
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

    /**
     * @component Column.
     * @param {number} index - The index of the column.
     * @param {string} color - The color of the column.
     * @returns {JSX.Element} - The Column component.
     */
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

    /**
     * @component Invisible Card.
     * @returns {JSX.Element} - The Invisible Card component.
     */
    function InvisibleCard() {
        return (
            <div className="info-card invisible-card">
                <img src="items/cards/info_cards/info_card_red.png" alt="Invisible Info Card" />
            </div>
        )
    }
}