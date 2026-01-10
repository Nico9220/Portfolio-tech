<template>
  <header class="nav">
    <div class="nav-inner">
      <div class="brand">
        <div class="name">NICOLÁS CARETTA</div>
        <div class="role">Técnico Universitario en Desarrollo Web</div>
      </div>

      <nav class="links">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: rgba(2, 6, 10, 0.58);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(80, 240, 255, 0.10);
}
.nav-inner {
  width: min(1150px, 92vw);
  margin: 0 auto;
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.brand .name {
  font-size: 20px;
  letter-spacing: 1px;
  color: rgba(160, 250, 255, 0.95);
  text-shadow: 0 0 22px rgba(60, 220, 255, 0.25);
}
.brand .role {
  font-size: 12px;
  color: rgba(220, 245, 255, 0.65);
  margin-top: 2px;
}
.links {
  display: flex;
  gap: 18px;
}
.links a {
  color: rgba(220, 245, 255, 0.75);
  text-decoration: none;
  font-size: 13px;
  padding: 8px 10px;
  border: 1px solid transparent;
  border-radius: 10px;
}
.links a:hover {
  color: rgba(80, 240, 255, 0.95);
  border-color: rgba(80, 240, 255, 0.22);
  box-shadow: 0 0 18px rgba(60, 220, 255, 0.12);
}
</style>
