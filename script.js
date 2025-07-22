// GLSL風背景
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;
function draw() {
  ctx.fillStyle = `hsl(${hue}, 100%, 10%)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  hue = (hue + 0.5) % 360;
  requestAnimationFrame(draw);
}
draw();

// Theme toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
