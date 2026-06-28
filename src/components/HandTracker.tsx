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
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        width={420}
        height={320}
        style={{ borderRadius: 12 }}
      />

      <canvas
        ref={canvasRef}
        width={420}
        height={320}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}