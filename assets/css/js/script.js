// NEON GLOBE ANIMATION ON CANVAS
const canvas = document.getElementById("globeCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// GLOBE PARTICLES
let particles = [];
const count = 350; // number of dots

for (let i = 0; i < count; i++) {
    const phi = Math.acos((2 * Math.random()) - 1);
    const theta = 2 * Math.PI * Math.random();
    const radius = 250;

    particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        size: Math.random() * 2 + 0.5
    });
}

let angle = 0;

// DRAW LOOP
function animateGlobe() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    angle += 0.002; // rotation speed

    particles.forEach(p => {
        let x3d = p.x * Math.cos(angle) - p.z * Math.sin(angle);
        let z3d = p.x * Math.sin(angle) + p.z * Math.cos(angle);

        let scale = 300 / (300 + z3d);
        let x2d = x3d * scale + canvas.width / 2;
        let y2d = p.y * scale + canvas.height / 2;

        ctx.beginPath();
        ctx.arc(x2d, y2d, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 200, 255, 0.9)";
        ctx.shadowColor = "#00e5ff";
        ctx.shadowBlur = 15;
        ctx.fill();
    });

    requestAnimationFrame(animateGlobe);
}

animateGlobe();
