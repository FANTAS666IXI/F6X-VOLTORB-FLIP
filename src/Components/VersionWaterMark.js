/**
 * @component Version Water Mark.
 * @returns {JSX.Element} - The Version Water Mark component.
 */
export default function VersionWaterMark() {
    /**
     * The version of the project.
     * @type {string}.
     */
    const version = require("../../package.json").version

    return (
        <p className="version__watermark">{version}</p>
    )
}