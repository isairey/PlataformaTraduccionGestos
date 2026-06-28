import { useEffect, useRef, useState } from "react";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={styles.wrapper}>
      {/* STATUS */}
      <div style={styles.status}>
        <div style={styles.dot} />
        <span>{loading ? "Starting camera..." : "Camera active"}</span>
      </div>

      {/* CAMERA STAGE */}
      <div style={styles.stage}>
        {loading && (
          <div style={styles.loading}>
            Activating AI vision...
          </div>
        )}

        <video
          ref={videoRef}
          autoPlay
          playsInline
          width={640}
          height={480}
          style={styles.video}
        />
      </div>
    </div>
  );
}

const styles: any = {
  wrapper: {
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
    background: "#3b82f6",
    boxShadow: "0 0 10px #3b82f6",
  },

  stage: {
    position: "relative",
    width: "100%",
    maxWidth: "640px",
    height: "480px",
    borderRadius: "18px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.4)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "18px",
  },

  loading: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontSize: "14px",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(8px)",
    zIndex: 2,
  },
};