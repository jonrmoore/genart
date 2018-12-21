const canvasSketch = require('canvas-sketch');

const settings = {
  // dimensions: [ 2048, 2048 ]
  dimensions: 'A4',
  pixelsPerInch: 300
};

const backgroundColor = 'lightblue';

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, width * .07, Math.PI * 2, false);
    context.fillStyle = 'lightpink';
    context.fill();
    context.lineWidth = width * .02;
    context.strokeStyle = 'purple';
    context.stroke();

    context.beginPath();
    context.arc(width / 2, height / 2, width * .04, Math.PI * 2, false);
    context.fillStyle = backgroundColor;
    context.fill();
    context.lineWidth = width * .02;
    context.strokeStyle = 'orange';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
