import { speak } from "../utils/speech";

export default function Controls() {
  return (
    <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
      <button onClick={() => speak("Hola")}>🔊 Hablar</button>
      <button onClick={() => window.location.reload()}>🗑 Limpiar</button>
    </div>
  );
}