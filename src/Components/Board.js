import { useState } from "react"
import ColorsData from "../Data/colors.json"
import GenerateBoard from "../Utils/GenerateBoard.js"
import BoardConfigurations from "../Data/boardConfigurations.json"

/**
 * @component App.
 * @returns {JSX.Element} - The App component.
 */
export default function Board() {
    /**
     * The Current Level.
     * @type {number}.
     */
    const level = 3

    /**
     * The Board Configuration.
     * @type {object}.
     */
    const boardConfiguration = BoardConfigurations[CalculateBoardConfiguration()]

    /**
     * The Board Values.
     * @type {object}.
     */
    const boardValues = GenerateBoard(boardConfiguration)

    /**
     * The Colors list.
     * @type {object}.
     */
    const colors = ColorsData

    /**
     * Selects a random Board Configuration corresponding to the Level.
     * @type {object}.
     */
    function CalculateBoardConfiguration() {
        return ((level - 1) * 10 + Math.floor(Math.random() * 10))
    }

    return (
        <div className="board">
            {colors.map((color, index) => (<Row key={`ROW-${index}`} row={index} color={color} rowValues={boardValues[index]} />))}
            <BottomInfoCards colors={colors} />
        </div>
    )

    /**
     * @component Row.
     * @param {number} row - The Index of the row.
     * @param {string} color - The Color of the row.
     * @param {object} rowValues - The Values of the row.
     * @returns {JSX.Element} - The Row component.
     */
    function Row({ row, color, rowValues }) {
        /**
         * The number of cards by row.
         * @type {number}.
         */
        const rowLength = 5

        return (
            <div className="row">
                {Array.from({ length: rowLength }, (_, index) => (
                    <Card key={`CARD-${row}-${index}`} cardValue={rowValues[index]} />
                ))}
                <InfoCard key={`CARD-${row}-${rowLength}`} values={boardValues[row]} color={color} />
                <img className="background" src={`/items/lines/horizontal/row_${color}.png`} alt="Row Background" />
            </div>
        )
    }

    /**
     * @component Card.
     * @param {number} cardValue - The Value of the card.
     * @returns {JSX.Element} - The Card component.
     */
    function Card({ cardValue }) {
        /**
         * Check if the card has been revealed.
         * @type {[boolean, function]}.
         */
        // TODO: SET TO FALSE
        const [isRevealed, setIsRevealed] = useState(cardValue === 1 ? false : true)

        /**
         * Reveals the card.
         */
        function revealCard() {
            setIsRevealed(true)
        }

        return (
            <div className="card" >
                <img src="items/cards/card.png" alt="Card" onClick={revealCard} />
                {isRevealed && <CardContent cardValue={cardValue} />}
            </div>
        )
    }

    function CardContent({ cardValue }) {
        return cardValue === 0 ? (
            <img className="card-content voltorb" src="items/cards/voltorb.png" alt="Voltorb" />
        ) : (
            <p className="card-content">{cardValue}</p>
        )
    }

    /**
     * @component Info Card.
     * @param {object} values - The Values that must take in count the Info Card.
     * @param {string} color - The Color of the Info Card.
     * @returns {JSX.Element} - The Info Card component.
     */
    function InfoCard({ values, color }) {
        /**
         * The total quantity of points.
         * @type {number}.
         */
        const points = values.reduce((total, currentValue) => total + currentValue, 0)

        /**
         * The total quantity of voltorbs (0).
         * @type {number}.
         */
        const voltorbs = values.filter(value => value === 0).length

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
                <InvisibleCard key="CARD-5-5" />
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
        /**
         * The Values that must be passed to the Info Card.
         * @type {number}.
         */
        const values = boardValues.map(row => row[index])

        return (
            <div className="column">
                <InfoCard key={`CARD-5-${index}`} values={values} color={color} />
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
            <div className="invisible-card">
                <img src="items/cards/info_cards/info_card_red.png" alt="Invisible Info Card" />
            </div>
        )
    }
}