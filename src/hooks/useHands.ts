import { useEffect } from "react";

export default function useHands(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  onResults: (results: any) => void
) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 👇 usar window.Hands (NO import)
    const hands = new (window as any).Hands({
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

    const detect = async () => {
      const loop = async () => {
        if (video.readyState === 4) {
          await hands.send({ image: video });
        }
        requestAnimationFrame(loop);
      };

      loop();
    };

    detect();

    return () => {
      hands.close();
    };
  }, [videoRef, onResults]);
}