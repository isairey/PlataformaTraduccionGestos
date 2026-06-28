import Camera from "../components/Camera";
import HandTracker from "../components/HandTracker";
import Output from "../components/Output";
import Controls from "../components/Controls";

export default function Home() {
  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>🤟 Sign Translator</h1>
        <p style={styles.subtitle}>
          Real-time AI sign language detection
        </p>
      </div>

      {/* MAIN GRID */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <Camera />
        </div>

        <div style={styles.card}>
          <HandTracker />
        </div>
      </div>

      {/* OUTPUT */}
      <div style={styles.outputCard}>
        <Output />
      </div>

      {/* CONTROLS */}
      <div style={styles.controls}>
        <Controls />
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    background: "radial-gradient(circle at top, #f8fafc, #e2e8f0)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    color: "#0f172a",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  title: {
    fontSize: "34px",
    fontWeight: 700,
    letterSpacing: "-0.5px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#64748b",
    marginTop: "6px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  card: {
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(0,0,0,0.05)",
    borderRadius: "20px",
    padding: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },

  outputCard: {
    maxWidth: "1000px",
    margin: "20px auto",
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  controls: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
};