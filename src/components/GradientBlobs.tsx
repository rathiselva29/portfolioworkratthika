/** Animated gradient blur blobs for background ambiance */
const GradientBlobs = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div
      className="floating-blob"
      style={{
        width: 500,
        height: 500,
        top: "10%",
        left: "15%",
        background: "hsl(190 90% 50%)",
        animationDelay: "0s",
      }}
    />
    <div
      className="floating-blob"
      style={{
        width: 400,
        height: 400,
        top: "50%",
        right: "10%",
        background: "hsl(270 60% 55%)",
        animationDelay: "-7s",
      }}
    />
    <div
      className="floating-blob"
      style={{
        width: 350,
        height: 350,
        bottom: "10%",
        left: "40%",
        background: "hsl(320 70% 50%)",
        animationDelay: "-14s",
        opacity: 0.1,
      }}
    />
  </div>
);

export default GradientBlobs;
