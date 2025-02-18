/**
 * @component Stats.
 * @returns {JSX.Element} - The Stats component.
 */
export default function Stats() {
    /**
     * The Current Level.
     * @type {number}.
     */
    const level = 1

    /**
     * The Total Wins.
     * @type {number}.
     */
    const totalWins = 0

    /**
     * The Wins in a Row.
     * @type {number}.
     */
    const winsRow = 0

    /**
     * The Total Points.
     * @type {number}.
     */
    const totalPoints = 0

    /**
     * The Current Round Points.
     * @type {number}.
     */
    const roundPoints = 0

    return (
        <div className="stats">
            <div className="stats-content">
                <div className="texts">
                    <h1>LEVEL {level}</h1>
                    <p>TOTAL WINS : {totalWins}</p>
                    <p>WINS IN A ROW : {winsRow}</p>
                    <p>TOTAL POINTS : {totalPoints}</p>
                    <p>ROUND POINTS : {roundPoints}</p>
                </div>
                <img src="items/Container.png" alt="Stats Background" />
            </div>
        </div>
    )
}