export function drawLandmarks(ctx: CanvasRenderingContext2D, landmarks: any[]) {
  ctx.fillStyle = "red";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;

  landmarks.forEach((point) => {
    const x = point.x * 420;
    const y = point.y * 320;

    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
  });
}