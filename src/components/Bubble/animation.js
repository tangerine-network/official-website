import drawBubble from './drawBubble';

const bubbleList = [];

export const addBubble = bubble => bubbleList.push(bubble);

let canvas;
export const setCanvas = ref => (canvas = ref);
export const startLoop = () => {
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbleList.forEach((bubble) => {
    const { size, points, radius, color } = bubble;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    const length = (canvas.width / 2) * size;
    const root = [canvas.width / 2, canvas.width / 2];
    const normalized = points.map((point) => {
      const [x, y, portion] = point;
      const vec = [
        root[0] + (length * x),
        root[1] + (length * y),
      ];
      const vecLength = Math.sqrt(
        Math.pow(vec[0] - root[0], 2) + Math.pow(vec[1] - root[1], 2)
      );
      // console.log(vecLength);
      const lengthAdjust = length / vecLength;
      // console.log(lengthAdjust);

      return [
        root[0] + (length * x * lengthAdjust * portion),
        root[1] + (length * y * lengthAdjust * portion),
      ];
    });
    drawBubble(ctx, normalized, radius, color);
    ctx.stroke();
    // normalized.forEach((pos) => {
    //   ctx.strokeStyle = "#ff2626";
    //   ctx.arc(pos[0], pos[1], 10, 0, Math.PI * 2, true);
    //   ctx.stroke();
    // });
  });
  requestAnimationFrame(startLoop);
}
