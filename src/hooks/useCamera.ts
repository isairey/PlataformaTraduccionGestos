import { useEffect, useRef } from "react";

export default function useCamera() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  }, []);

  return videoRef;
}