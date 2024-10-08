export default function VersionWaterMark() {
    const version = require("../../package.json").version;

    return (
        <p className="versionWatermark">{version}</p>
    );
};