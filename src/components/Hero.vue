<template>
  <section id="inicio" class="hero">
    <div class="left">
      <h1>¡Hola! Soy Nicolás</h1>
      <h2>Desarrollador Web | Frontend + Backend</h2>
      <p>
        Desarrollo interfaces modernas, rápidas y prolijas.
        Me enfoco en UX, performance y código mantenible.
        <p>Trabajo con Vue 3, React y Laravel.</p>
      </p>

      <div class="cta-row">
        <a class="btn" href="#proyectos">VER PROYECTOS</a>
        <a class="ghost" href="#sobre-mi">SOBRE MÍ</a>
      </div>
    </div>

    <div class="right">
      <div class="avatar">
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
        <div class="ring ring-3"></div>

        <!-- ACÁ VA TU FOTO -->
        <img class="portrait" :src="perfil" alt="Foto de Nicolás" />
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

<p class="muted small">
  Actualmente: mejorando mi stack frontend, sumando proyectos al portfolio y buscando un entorno
  donde pueda crecer aportando valor real desde el día 1.
</p>



  </section>
</template>

<script setup>
import perfil from "../assets/perfil.jpg";
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
  margin: 0 0 10px;
  color: rgba(220, 252, 255, 0.95);
  text-shadow: 0 0 26px rgba(60, 220, 255, 0.22);
}
.left p {
  margin: 0 0 18px;
  color: rgba(220, 245, 255, 0.72);
  max-width: 52ch;
  line-height: 1.55;
}
.cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
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
.avatar {
  position: relative;
  width: 320px;
  height: 320px;
}
.portrait {
  position: absolute;
  inset: 46px;
  border-radius: 24px;
  width: calc(100% - 92px);
  height: calc(100% - 92px);
  object-fit: cover;

  border: 1px solid rgba(80, 240, 255, 0.18);
  box-shadow: 0 0 45px rgba(60, 220, 255, 0.12);

  /* “look tech” arriba de la foto */
  filter: contrast(1.05) saturate(1.05);
}
.ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(80, 240, 255, 0.20);
  box-shadow: 0 0 40px rgba(60, 220, 255, 0.10);
}
.ring-1 { inset: 0; }
.ring-2 { inset: 18px; opacity: 0.75; }
.ring-3 { inset: 38px; opacity: 0.55; }
.about { padding: 46px 0 0; }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }
  .right { justify-content: flex-start; }
}
/* ===== Animaciones base (Hero) ===== */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes spinReverse {
  from { transform: rotate(360deg); }
  to   { transform: rotate(0deg); }
}

@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 45px rgba(60, 220, 255, 0.10); }
  50%      { box-shadow: 0 0 65px rgba(60, 220, 255, 0.18); }
}

/* Entrada más pro */
.left h1,
.left p,
.cta-row {
  animation: fadeUp 650ms ease both;
}
.left p { animation-delay: 80ms; }
.cta-row { animation-delay: 140ms; }

/* Avatar flotando (muy sutil) */
.avatar {
  animation: floaty 4.2s ease-in-out infinite;
  will-change: transform;
}

/* Rings girando lento */
.ring-1 { animation: spin 18s linear infinite; }
.ring-2 { animation: spinReverse 26s linear infinite; }
.ring-3 { animation: spin 34s linear infinite; }

/* Glow “vivo” del portrait */
.portrait {
  animation: pulseGlow 3.8s ease-in-out infinite;
}

/* Hover pro (sin exagerar) */
.avatar:hover .portrait {
  transform: scale(1.01);
  transition: transform 220ms ease;
}
.avatar:hover .ring {
  box-shadow: 0 0 52px rgba(60, 220, 255, 0.14);
  transition: box-shadow 220ms ease;
}

/* Accesibilidad: si el usuario prefiere menos movimiento */
@media (prefers-reduced-motion: reduce) {
  .avatar, .ring-1, .ring-2, .ring-3, .portrait,
  .left h1, .left p, .cta-row {
    animation: none !important;
    transition: none !important;
  }
}

</style>
