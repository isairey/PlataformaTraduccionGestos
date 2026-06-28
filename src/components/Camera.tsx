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
    <div>
      <h3>📷 Cámara</h3>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        width={420}
        height={320}
        style={{ borderRadius: 12 }}
      />
    </div>
  );
}