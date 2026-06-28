import { useEffect, useRef, useState, useCallback } from "react";
import useHands from "../hooks/useHands";
import { drawLandmarks } from "../utils/landmarks";

import { loadModel } from "../ml/model";
import { predictGesture } from "../ml/predict";

interface HandTrackerProps {
  setPrediction: (text: string) => void;
  setConfidence: (confidence: number) => void;
}

export default function HandTracker({
  setPrediction,
  setConfidence,
}: HandTrackerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [data, setData] = useState<number[]>([]);
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    async function init() {
      await loadModel();
      setModelReady(true);
    }

    init();
  }, []);

  const handleResults = useCallback(
    (results: any) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!results?.multiHandLandmarks?.length) {
        setPrediction("No hand detected");
        setConfidence(0);
        return;
      }

      const landmarks = results.multiHandLandmarks[0];

      drawLandmarks(ctx, landmarks);

      const vector = landmarks.flatMap((point: any) => [
        point.x,
        point.y,
        point.z,
      ]);

      setData(vector);

      if (modelReady) {
        const result = predictGesture(vector);

        setPrediction(result.label);
        setConfidence(result.confidence);
      }

      console.log("Vector:", vector);
    },
    [modelReady, setPrediction, setConfidence]
  );

  useHands(videoRef, handleResults);

  return (
    <div style={styles.wrapper}>
      <div style={styles.status}>
        <div style={styles.dot} />
        <span>{modelReady ? "AI Ready" : "Loading AI..."}</span>
      </div>

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

      <div style={styles.footer}>
        <span style={styles.label}>Landmarks</span>

        <span style={styles.value}>
          {data.length > 0 ? `${data.length} / 63` : "0 / 63"}
        </span>
      </div>
    </div>
  );
}

const styles: any = {
  wrapper: {
    width: "100%",
  },

  status: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: 500,
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
    width: "100%",
    maxWidth: "420px",
    aspectRatio: "4 / 3",
    borderRadius: "18px",
    overflow: "hidden",
    background: "#fff",
    border: "1px solid rgba(0,0,0,.05)",
    boxShadow: "0 12px 35px rgba(0,0,0,.08)",
  },

  video: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  canvas: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },

  footer: {
    marginTop: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    borderRadius: "14px",
    background: "rgba(255,255,255,.7)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(0,0,0,.04)",
    color: "#64748b",
    fontSize: "13px",
  },

  label: {
    fontWeight: 600,
  },

  value: {
    fontFamily: "monospace",
    color: "#0f172a",
    fontWeight: 600,
  },
};