<template>
  <section id="inicio" class="hero">
    <div class="left">
      <h1>¡Hola! Soy Nicolás</h1>
      <p>
        Desarrollo interfaces modernas, rápidas y prolijas.
        Me gusta el estilo “tech” sin caer en lo neon exagerado.
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
        <div class="portrait"></div>
      </div>
    </div>
  </section>

  <section id="sobre-mi" class="about">
    <h2 class="section-title">Sobre mí</h2>
    <p class="muted">
      Acá metés tu bio corta, stack (Vue / React / Laravel / MySQL), y links a GitHub/LinkedIn.
    </p>
  </section>
</template>

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
  background:
    radial-gradient(120px 120px at 55% 40%, rgba(80,240,255,0.35), transparent 60%),
    linear-gradient(180deg, rgba(8, 14, 18, 0.5), rgba(8, 14, 18, 0.85));
  border: 1px solid rgba(80, 240, 255, 0.18);
  box-shadow: 0 0 45px rgba(60, 220, 255, 0.12);
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
</style>
