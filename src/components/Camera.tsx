import { useEffect, useRef } from "react";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      width={640}
      height={480}
      style={{ borderRadius: 12 }}
    />
  );
}