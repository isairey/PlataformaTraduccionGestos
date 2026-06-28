interface OutputProps {
  text: string;
  confidence?: number;
}

export default function Output({
  text,
  confidence,
}: OutputProps) {
  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.dot} />
        <h3 style={styles.title}>AI Result</h3>
      </div>

      {/* Resultado */}
      <div style={styles.card}>
        <div style={styles.text}>
          {text || "Waiting for sign..."}
        </div>

        {confidence !== undefined && (
          <div style={styles.confidence}>
            Confidence: {(confidence * 100).toFixed(1)}%
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <span>
          Real-time interpretation
        </span>
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
    fontSize: "15px",
    fontWeight: 600,
    color: "#0f172a",
  },

  card: {
    background: "rgba(255,255,255,.7)",
    backdropFilter: "blur(16px)",
    borderRadius: "18px",
    border: "1px solid rgba(0,0,0,.06)",
    boxShadow: "0 10px 30px rgba(0,0,0,.08)",
    minHeight: "90px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  text: {
    fontSize: "34px",
    fontWeight: 700,
    color: "#111827",
    letterSpacing: "-1px",
  },

  confidence: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#64748b",
  },

  footer: {
    marginTop: "12px",
    fontSize: "13px",
    color: "#64748b",
  },
};