<template>
  <section id="inicio" class="hero">
    <div class="left">
      <h1>¡Hola! Soy Nicolás</h1>
      <h2 class="subtitle">Desarrollador Web | Fullstack</h2>

      <p class="lead">
        Desarrollo interfaces modernas, rápidas y prolijas. Me enfoco en UX, performance y código mantenible.
      </p>
      <p class="lead">
        Trabajo con Vue 3, React y Laravel.
      </p>

      <div class="cta-row">
        <a class="btn" href="#proyectos">VER PROYECTOS</a>
        <a class="ghost" href="#sobre-mi">SOBRE MÍ</a>
      </div>
    </div>

    <div class="right">
      <!-- Wrapper para tilt + perspectiva -->
      <div
        ref="avatarWrap"
        class="avatar-wrap"
        @pointermove="onTiltMove"
        @pointerleave="onTiltLeave"
      >
        <div class="avatar" :style="tiltStyle">
          <div class="ring ring-1"></div>
          <div class="ring ring-2"></div>
          <div class="ring ring-3"></div>

          <img class="portrait" :src="perfil" alt="Foto de Nicolás" />
        </div>
      </div>
    </div>
  </section>

  <section id="sobre-mi" class="about">
    <h2 class="section-title">Sobre mí</h2>

    <p class="muted">
      Soy <strong>Nicolás Caretta</strong>, desarrollador web. Me gusta construir productos con una interfaz
      limpia, buena experiencia de usuario y código mantenible. Busco siempre el equilibrio entre
      estética, performance y practicidad.
    </p>

    <!-- <p class="muted small">
      Actualmente: mejorando mi stack frontend, sumando proyectos al portfolio y buscando un entorno
      donde pueda crecer aportando valor real desde el día 1.
    </p> -->
  </section>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from "vue";
import perfil from "../assets/perfil.jpg";

const avatarWrap = ref(null);

const state = ref({
  rx: 0,
  ry: 0,
  mx: 50,
  my: 50,
  active: false,
});

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let raf = 0;

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function onTiltMove(e) {
  if (reducedMotion) return;
  const el = avatarWrap.value;
  if (!el) return;

  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;

    const maxDeg = 10;
    const ry = (x - 0.5) * 2 * maxDeg;
    const rx = -(y - 0.5) * 2 * maxDeg;

    state.value.rx = clamp(rx, -maxDeg, maxDeg);
    state.value.ry = clamp(ry, -maxDeg, maxDeg);
    state.value.mx = clamp(x * 100, 0, 100);
    state.value.my = clamp(y * 100, 0, 100);
    state.value.active = true;
  });
}

function onTiltLeave() {
  if (reducedMotion) return;
  state.value.rx = 0;
  state.value.ry = 0;
  state.value.mx = 50;
  state.value.my = 50;
  state.value.active = false;
}

const tiltStyle = computed(() => ({
  "--rx": `${state.value.rx}deg`,
  "--ry": `${state.value.ry}deg`,
  "--mx": `${state.value.mx}%`,
  "--my": `${state.value.my}%`,
  "--lift": state.value.active ? "10px" : "0px",
}));

onBeforeUnmount(() => cancelAnimationFrame(raf));
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
  padding: 40px 0 10px;
}

.left h1 {
  font-size: 44px;
  margin: 0 0 8px;
  color: rgba(220, 252, 255, 0.95);
  text-shadow: 0 0 26px rgba(60, 220, 255, 0.22);
}

.subtitle{
  margin: 0 0 14px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(80, 240, 255, 0.9);
  letter-spacing: 0.4px;
  text-shadow: 0 0 18px rgba(60, 220, 255, 0.16);
}

.lead {
  margin: 0 0 10px;
  color: rgba(220, 245, 255, 0.72);
  max-width: 52ch;
  line-height: 1.55;
}

.cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.btn {
  display: inline-block;
  padding: 12px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: rgba(220, 252, 255, 0.95);
  border: 1px solid rgba(80, 240, 255, 0.35);
  box-shadow: 0 0 28px rgba(60, 220, 255, 0.14);
  background: rgba(0, 140, 200, 0.12);
}
.btn:hover {
  border-color: rgba(80, 240, 255, 0.75);
  box-shadow: 0 0 40px rgba(60, 220, 255, 0.18);
}

.ghost {
  display: inline-block;
  padding: 12px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: rgba(220, 245, 255, 0.78);
  border: 1px solid rgba(80, 240, 255, 0.12);
}
.ghost:hover {
  border-color: rgba(80, 240, 255, 0.32);
  color: rgba(80, 240, 255, 0.95);
}

.right {
  display: flex;
  justify-content: center;
}

/* ====== TILT WRAPPER ====== */
.avatar-wrap{
  width: 320px;
  height: 320px;
  perspective: 900px;
  display: grid;
  place-items: center;
  touch-action: none;

  /* flotación acá (para no chocar con tilt) */
  animation: floaty 4.2s ease-in-out infinite;
}

.avatar{
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  transform: rotateX(var(--rx)) rotateY(var(--ry)) translateZ(var(--lift));
  transition: transform 180ms ease;
  will-change: transform;
}

/* highlight que sigue el mouse */
.avatar::after{
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 28px;
  pointer-events: none;
  background: radial-gradient(
    100px 100px at var(--mx) var(--my),
    rgba(80, 240, 255, 0.16),
    transparent 60%
  );
  opacity: 0.95;
}

/* ====== Avatar elements ====== */
.portrait {
  position: absolute;
  inset: 46px;
  border-radius: 24px;
  width: calc(100% - 92px);
  height: calc(100% - 92px);
  object-fit: cover;
  object-position: center 30%;

  border: 1px solid rgba(80, 240, 255, 0.18);
  box-shadow: 0 0 45px rgba(60, 220, 255, 0.12);
  filter: contrast(1.05) saturate(1.05);

  /* 3D + escala por hover sin pisar el transform */
  transform: translateZ(18px) scale(var(--ps, 1));
  animation: pulseGlow 3.8s ease-in-out infinite;
}

.ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(80, 240, 255, 0.20);
  box-shadow: 0 0 40px rgba(60, 220, 255, 0.10);
  --z: 8px;
}

/* Rotación 3D sin romper translateZ */
@keyframes spin3d {
  from { transform: translateZ(var(--z)) rotate(0deg); }
  to   { transform: translateZ(var(--z)) rotate(360deg); }
}
@keyframes spin3dReverse {
  from { transform: translateZ(var(--z)) rotate(360deg); }
  to   { transform: translateZ(var(--z)) rotate(0deg); }
}

.ring-1 { inset: 0;  opacity: 1;    --z: 6px;  animation: spin3d 18s linear infinite; }
.ring-2 { inset: 18px; opacity: 0.75; --z: 10px; animation: spin3dReverse 26s linear infinite; }
.ring-3 { inset: 38px; opacity: 0.55; --z: 14px; animation: spin3d 34s linear infinite; }

/* Hover pro */
.avatar-wrap:hover .portrait { --ps: 1.01; }
.avatar-wrap:hover .ring { box-shadow: 0 0 52px rgba(60, 220, 255, 0.14); }

/* ===== Animaciones base ===== */
@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 45px rgba(60, 220, 255, 0.10); }
  50%      { box-shadow: 0 0 65px rgba(60, 220, 255, 0.18); }
}

/* Entrada suave del texto */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
.left h1, .left .subtitle, .left .lead, .cta-row {
  animation: fadeUp 650ms ease both;
}
.left .subtitle { animation-delay: 60ms; }
.left .lead:nth-of-type(1) { animation-delay: 120ms; }
.left .lead:nth-of-type(2) { animation-delay: 180ms; }
.cta-row { animation-delay: 240ms; }

.about { padding: 46px 0 0; }

/* Responsive */
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }
  .right { justify-content: flex-start; }
  .avatar-wrap{
    width: clamp(220px, 70vw, 300px);
    height: clamp(220px, 70vw, 300px);
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .avatar-wrap, .ring, .portrait,
  .left h1, .left .subtitle, .left .lead, .cta-row {
    animation: none !important;
    transition: none !important;
  }
  .avatar { transform: none !important; }
  .avatar::after { display: none; }
}
</style>
