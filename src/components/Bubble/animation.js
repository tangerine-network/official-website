import drawBubble from './drawBubble';

const bubbleList = [];

export const addBubble = bubble => bubbleList.push(bubble);

let canvas;
export const setCanvas = ref => (canvas = ref);

let animationFrameId;
const cancelFrame = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
}

export const startLoop = () => {
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbleList.forEach((bubble) => {
    const { size, points, radius, color, animation } = bubble;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    const length = (canvas.width / 2) * size;
    const root = [canvas.width / 2, canvas.width / 2];
    let animationShift = false;
    const normalized = points.map((point, index) => {
      const [x, y, portion] = point;
      const vec = [
        root[0] + (length * x),
        root[1] + (length * y),
      ];
      const vecLength = Math.sqrt(
        Math.pow(vec[0] - root[0], 2) + Math.pow(vec[1] - root[1], 2)
      );
      const lengthAdjust = length / vecLength;

      let diff = 1;
      if (animation) {
        let animationObj;
        const { startIndex } = animation;
        if (index === startIndex) {
          animationObj = animation.movement1;
        } else if (index === ((startIndex + 4) % points.length)) {
          animationObj = animation.movement2;
        } else if (index === ((startIndex + 2) % points.length)) {
          animationObj = animation.movement3;
        } else if (index === ((startIndex + 6) % points.length)) {
          animationObj = animation.movement4;
        }
        if (animationObj) {
          const { upper, lower, speed, expand} = animationObj;
          if (animationObj.current === undefined) {
            animationObj.current = 1;
          }
          const upperBound = 1 + upper;
          const lowerBound = 1 - lower;
          animationObj.current += ((expand ? 1 : -1) * speed);
          if (animationObj.current > upperBound) {
            animationObj.hitUpper = true;
            animationObj.current = upperBound;
            animationObj.expand = false;
          } else if (animationObj.current < lowerBound) {
            animationObj.hitLower = true;
            animationObj.expand = true;
            animationObj.current = lowerBound;
          }
          if (
            animationObj.hitLower &&
            animationObj.hitUpper &&
            (animationObj.current <= (1 + speed) &&
            (animationObj.current >= (1 - speed)))
            // We've done a full cycle
          ) {
            animationObj.hitLower = false;
            animationObj.hitUpper = false;
            animationShift = true;
            animationObj.current = 1;
          }
          diff = animationObj.current;
        }
      }
      return [
        root[0] + (length * x * lengthAdjust * portion * diff),
        root[1] + (length * y * lengthAdjust * portion * diff),
      ];
    });
    if (animationShift) {
      animation.startIndex = (animation.startIndex + 1) % points.length;
    }
    drawBubble(ctx, normalized, radius, color);
    ctx.stroke();
    // normalized.forEach((pos) => {
    //   ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
    //   ctx.arc(pos[0], pos[1], 10, 0, Math.PI * 2, true);
    //   ctx.stroke();
    // });
  });
  animationFrameId = requestAnimationFrame(startLoop);
  return cancelFrame;
}
