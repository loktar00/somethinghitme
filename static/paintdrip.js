const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
const dots = [];

canvas.classList.add('effect-canvas');

document.body.append(canvas);

canvas.width = width;
canvas.height = height;

class dot {
    constructor(xRange = 0, yRange = 0) {
        this.xRange = xRange;
        this.yRange = yRange;
        this.create();
    }

    create = () => {
        this.x = Math.random() * this.xRange;
        this.size = 1 + Math.random() * 20;
        this.y = -this.size;

        this.color = {
            h: Math.floor(Math.random() * 360),
            s: Math.floor(30 + Math.random() * 20),
            v: Math.floor(50 + Math.random() * 20)
        };

        this.speed = 1 + Math.random();
    }

    update = () => {
        this.y += this.speed;

        if (this.y > this.yRange) {
            this.create();
        }
    }

    render = () => {
        ctx.fillStyle = `hsl(${this.color.h},${this.color.s}% ,${this.color.v + this.y * 0.2}%)`;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 2;
        ctx.shadowColor = `hsl(${this.color.h}, 40% ,${50 + this.y * 0.2}%`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}


function init() {
  for (let i = 0; i < 100; i++) {
    dots.push(new dot(canvas.width, canvas.height));
  }

  update();
}

function update() {
  dots.forEach((e) => {
    e.update();
  });
  render();
}

function render() {
    requestAnimationFrame(update);

    dots.forEach((dot) => {
        dot.render();
    });
}

init();
