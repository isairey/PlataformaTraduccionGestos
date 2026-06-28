import { useEffect } from "react";

export default function useHands(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  onResults: (results: any) => void
) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const HandsLib = (window as any).Hands;

    if (!HandsLib) {
      console.error("❌ MediaPipe no cargó aún");
      return;
    }

    const hands = new HandsLib({
      locateFile: (file: string) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults(onResults);

    const loop = async () => {
      if (video.readyState === 4) {
        await hands.send({ image: video });
      }

      requestAnimationFrame(loop);
    };

    loop();

    return () => hands.close();
  }, [videoRef, onResults]);
}