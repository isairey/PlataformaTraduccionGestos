import Camera from "../components/Camera";
import HandTracker from "../components/HandTracker";
import Output from "../components/Output";
import Controls from "../components/Controls";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🤟 Sign Translator AI</h1>

      <div style={{ display: "flex", gap: 20 }}>
        <Camera />
        <HandTracker />
      </div>

      <Output />
      <Controls />
    </div>
  );
}