import Stats from "./Stats"
import Board from "./Board"

/**
 * @component Main Section.
 * @returns {JSX.Element} - The Main Section component.
 */
export default function MainSection() {
    return (
        <div className="main-section">
            <Stats />
            <Board />
        </div>
    )
}