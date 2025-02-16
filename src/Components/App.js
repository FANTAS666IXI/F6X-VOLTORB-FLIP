import Title from "./Title"
import Board from "./Board"
import VersionWaterMark from "./VersionWaterMark"

/**
 * @component App.
 * @returns {JSX.Element} - The App component.
 */
export default function App() {
  return (
    <div className="app">
      <Title />
      <Board />
      <VersionWaterMark />
    </div>
  )
}