import Title from "./Title"
import MainSection from "./MainSection"
import VersionWaterMark from "./VersionWaterMark"

/**
 * @component App.
 * @returns {JSX.Element} - The App component.
 */
export default function App() {
  return (
    <div className="app">
      <Title />
      <MainSection />
      <VersionWaterMark />
    </div>
  )
}