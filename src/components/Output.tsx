import { useState } from "react";

export default function Output() {
  const [text] = useState("Esperando seña...");

  return (
    <div style={{ marginTop: 20 }}>
      <h3>🧠 Resultado</h3>
      <div style={{ fontSize: 30 }}>{text}</div>
    </div>
  );
}