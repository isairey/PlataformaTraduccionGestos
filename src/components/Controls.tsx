import { speak } from "../utils/speech";

export default function Controls() {
  return (
    <div style={styles.wrapper}>
      <button style={styles.primary} onClick={() => speak("Hola")}>
        🔊 Speak
      </button>

      <button
        style={styles.secondary}
        onClick={() => window.location.reload()}
      >
        🗑 Clear
      </button>
    </div>
  );
}

const styles: any = {
  wrapper: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
  },

  primary: {
    padding: "10px 18px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
    color: "white",
    fontWeight: 600,
    fontSize: "14px",
    boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
    transition: "all 0.2s ease",
  },

  secondary: {
    padding: "10px 18px",
    borderRadius: "12px",
    border: "1px solid rgba(0,0,0,0.1)",
    cursor: "pointer",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(10px)",
    color: "#0f172a",
    fontWeight: 500,
    fontSize: "14px",
    transition: "all 0.2s ease",
  },
};