<template>
  <div class="bg">
    <canvas ref="canvas" class="particles"></canvas>
    <div class="grid"></div>
    <div class="scanlines"></div>
    <div class="vignette"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const canvas = ref(null);

let raf = 0;
let ctx;
let w = 0, h = 0;
let points = [];

function resize() {
  const c = canvas.value;
  if (!c) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  w = c.clientWidth;
  h = c.clientHeight;
  c.width = Math.floor(w * dpr);
  c.height = Math.floor(h * dpr);
  ctx = c.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Re-armar puntos acorde al tamaño
  const count = Math.floor((w * h) / 25000); // ajustá densidad
  points = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.12,
    r: 1 + Math.random() * 1.2,
    a: 0.25 + Math.random() * 0.55,
  }));
}

function step() {
  if (!ctx) return;
  ctx.clearRect(0, 0, w, h);

  // puntos
  for (const p of points) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < -20) p.x = w + 20;
    if (p.x > w + 20) p.x = -20;
    if (p.y < -20) p.y = h + 20;
    if (p.y > h + 20) p.y = -20;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(70, 240, 255, ${p.a})`;
    ctx.fill();
  }

  // líneas sutiles entre puntos cercanos
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const a = points[i], b = points[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const alpha = (1 - dist / 120) * 0.10;
        ctx.strokeStyle = `rgba(70, 240, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  raf = requestAnimationFrame(step);
}

onMounted(() => {
  resize();
  window.addEventListener("resize", resize, { passive: true });
  raf = requestAnimationFrame(step);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);
  cancelAnimationFrame(raf);
});
</script>

<style scoped>
.bg {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(1200px 700px at 70% 25%, rgba(0, 180, 255, 0.12), transparent 60%),
    radial-gradient(900px 500px at 20% 55%, rgba(0, 120, 255, 0.10), transparent 65%),
    linear-gradient(180deg, rgba(3, 8, 12, 1), rgba(2, 5, 10, 1));
  z-index: 0;
  overflow: hidden;
}

.particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
}

.grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(80, 240, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(80, 240, 255, 0.06) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(circle at 40% 40%, black 40%, transparent 70%);
  opacity: 0.55;
}

.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.05),
    rgba(255,255,255,0.05) 1px,
    transparent 1px,
    transparent 6px
  );
  opacity: 0.12;
  animation: drift 6s linear infinite;
}

.vignette {
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle, transparent 40%, rgba(0,0,0,0.65) 85%);
  pointer-events: none;
}

@keyframes drift {
  from { transform: translateY(0); }
  to { transform: translateY(18px); }
}
</style>
