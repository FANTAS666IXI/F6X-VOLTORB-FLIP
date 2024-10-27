export default function VersionWaterMark() {
    const version = require("../../package.json").version

    return (
        <p className="version__watermark">{version}</p>
    )
}