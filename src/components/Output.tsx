import { useState } from "react";

export default function Output() {
  const [text] = useState("Waiting for sign...");

  return (
    <div style={styles.wrapper}>
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.dot} />
        <h3 style={styles.title}>AI Result</h3>
      </div>

      {/* RESULT CARD */}
      <div style={styles.card}>
        <div style={styles.text}>{text}</div>
      </div>

      {/* STATUS */}
      <div style={styles.footer}>
        <span>Real-time interpretation</span>
      </div>
    </div>
  );
}


const styles: any = {
  wrapper: {
    width: "100%",
    maxWidth: "800px",
    margin: "20px auto",
    padding: "16px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
  },

  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 12px #22c55e",
  },

  title: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#0f172a",
  },

  card: {
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(0,0,0,0.05)",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    minHeight: "70px",
    display: "flex",
    alignItems: "center",
  },

  text: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#0f172a",
    letterSpacing: "-0.5px",
  },

  footer: {
    marginTop: "8px",
    fontSize: "12px",
    color: "#64748b",
  },
};