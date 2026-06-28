import { useRef, useState } from "react";
import useHands from "../hooks/useHands";
import { drawLandmarks } from "../utils/landmarks";

export default function HandTracker() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [data, setData] = useState<number[]>([]);

  useHands(videoRef, (results: any) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (results?.multiHandLandmarks?.length) {
      const landmarks = results.multiHandLandmarks[0];

      drawLandmarks(ctx, landmarks);

      const vector = landmarks.flatMap((p: any) => [
        p.x,
        p.y,
        p.z,
      ]);

      setData(vector);

      console.log("🤟 vector:", vector);
    }
  });

  return (
    <div style={styles.wrapper}>
      {/* HEADER SMALL STATUS */}
      <div style={styles.status}>
        <div style={styles.dot} />
        <span>Live hand tracking</span>
      </div>

      {/* VIDEO + CANVAS */}
      <div style={styles.stage}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          width={420}
          height={320}
          style={styles.video}
        />

        <canvas
          ref={canvasRef}
          width={420}
          height={320}
          style={styles.canvas}
        />
      </div>

      {/* VECTOR INFO (DEBUG / AI READY) */}
      <div style={styles.footer}>
        <span style={styles.label}>AI Vector:</span>
        <span style={styles.value}>
          {data.length > 0 ? `${data.length} features` : "waiting..."}
        </span>
      </div>
    </div>
  );
}

const styles: any = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  status: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    color: "#64748b",
    marginBottom: "10px",
  },

  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 10px #22c55e",
  },

  stage: {
    position: "relative",
    width: "420px",
    height: "320px",
    borderRadius: "16px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.4)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0,0,0,0.05)",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "420px",
    height: "320px",
    objectFit: "cover",
    borderRadius: "16px",
  },

  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "420px",
    height: "320px",
    pointerEvents: "none",
  },

  footer: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#64748b",
  },

  label: {
    fontWeight: 500,
  },

  value: {
    fontFamily: "monospace",
    color: "#0f172a",
  },
};