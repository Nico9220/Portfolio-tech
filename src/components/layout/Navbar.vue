<template>
  <header class="nav">
    
    <div class="nav-inner">
      <!-- Brand (click vuelve a Inicio) -->
       
      <a class="brand" href="#inicio" @click="cerrarMenu">
  <img class="brand-logo" src="/logo.svg" alt="Logo" />
  <!-- <div class="brand-text">
    <div class="name">NICOLÁS CARETTA</div>
    <div class="role">Técnico Universitario en Desarrollo Web</div>
  </div> -->
</a>


      <!-- Links desktop -->
      <nav class="links" aria-label="Secciones">
        <a :class="{ activo: seccionActiva === 'inicio' }" href="#inicio">Inicio</a>
        <a :class="{ activo: seccionActiva === 'sobre-mi' }" href="#sobre-mi">Sobre mí</a>
        <a :class="{ activo: seccionActiva === 'proyectos' }" href="#proyectos">Proyectos</a>
        <a :class="{ activo: seccionActiva === 'contacto' }" href="#contacto">Contacto</a>
      </nav>

      <!-- Acciones + Botón móvil -->
      <div class="acciones">
        <!-- Reemplazá estos href por los tuyos -->
        <a class="icono" :href="links.github" target="_blank" rel="noreferrer" aria-label="GitHub">
          <!-- icon GitHub -->
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor"
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48
              0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49
              -.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.55 2.36 1.1 2.94.84
              .09-.67.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75
              -.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.9c.85 0 1.7.12 2.5.34
              1.9-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75
              0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84
              0 .27.18.59.69.48A10.2 10.2 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
          </svg>
        </a>

        <a class="icono" :href="links.linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <!-- icon LinkedIn -->
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor"
              d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.83v2.12h.05c.53-1 1.82-2.12 3.75-2.12 4 0 4.74 2.63 4.74 6.05v9.47h-4v-8.4c0-2-.04-4.57-2.79-4.57-2.79 0-3.22 2.18-3.22 4.43v8.54h-4V7.98z" />
          </svg>
        </a>

        <a class="cv" :href="links.cv" target="_blank" rel="noreferrer">CV</a>

        <!-- Botón hamburguesa (solo mobile) -->
        <button
          class="menu-btn"
          type="button"
          :aria-expanded="menuAbierto"
          aria-controls="menu-movil"
          aria-label="Abrir menú"
          @click="toggleMenu"
        >
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </button>
      </div>
    </div>

    <!-- Menú móvil -->
    <transition name="menu">
      <nav
        v-if="menuAbierto"
        id="menu-movil"
        class="menu-movil"
        aria-label="Menú móvil"
      >
        <a :class="{ activo: seccionActiva === 'inicio' }" href="#inicio" @click="cerrarMenu">Inicio</a>
        <a :class="{ activo: seccionActiva === 'sobre-mi' }" href="#sobre-mi" @click="cerrarMenu">Sobre mí</a>
        <a :class="{ activo: seccionActiva === 'proyectos' }" href="#proyectos" @click="cerrarMenu">Proyectos</a>
        <a :class="{ activo: seccionActiva === 'contacto' }" href="#contacto" @click="cerrarMenu">Contacto</a>

        <div class="menu-acciones">
          <a class="icono" :href="links.github" target="_blank" rel="noreferrer">GitHub</a>
          <a class="icono" :href="links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="cv" :href="links.cv" target="_blank" rel="noreferrer">CV</a>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const menuAbierto = ref(false);
const seccionActiva = ref("inicio");

const links = {
  github: "https://github.com/Nico9220",
  linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-marcelo-caretta-saez-9537223a6/", 
  cv: "#",       // <- PDF o drive
};

function toggleMenu() {
  menuAbierto.value = !menuAbierto.value;
}
function cerrarMenu() {
  menuAbierto.value = false;
}

function onKeydown(e) {
  if (e.key === "Escape") cerrarMenu();
}

let observer = null;
function iniciarScrollSpy() {
  const ids = ["inicio", "sobre-mi", "proyectos", "contacto"];
  const secciones = ids.map((id) => document.getElementById(id)).filter(Boolean);

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((en) => en.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) seccionActiva.value = visible.target.id;
    },
    {
      // Ajusta cuándo cambia el “activo”
      rootMargin: "-35% 0px -55% 0px",
      threshold: [0.1, 0.25, 0.5],
    }
  );

  secciones.forEach((el) => observer.observe(el));
}

function onResize() {
  // Si volvés a desktop, cerrá el menú móvil
  if (window.innerWidth >= 900) cerrarMenu();
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  window.addEventListener("resize", onResize);
  iniciarScrollSpy();
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("resize", onResize);
  observer?.disconnect();
});
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
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

/* Brand */
.brand{
  display:flex;
  align-items:center;
  gap:15px;
  text-decoration:none;
}
.brand-logo{
  width:36px;
  height:36px;
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

/* Links desktop */
.links {
  display: flex;
  gap: 18px;
  align-items: center;
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
.links a.activo {
  color: rgba(80, 240, 255, 0.95);
  border-color: rgba(80, 240, 255, 0.28);
  background: rgba(0, 140, 200, 0.10);
}

/* Acciones */
.acciones {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icono {
  display: inline-grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  color: rgba(220, 245, 255, 0.78);
  border: 1px solid rgba(80, 240, 255, 0.12);
  text-decoration: none;
}
.icono:hover {
  color: rgba(80, 240, 255, 0.95);
  border-color: rgba(80, 240, 255, 0.28);
  box-shadow: 0 0 18px rgba(60, 220, 255, 0.12);
}

.cv {
  display: inline-block;
  padding: 9px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: rgba(220, 252, 255, 0.95);
  border: 1px solid rgba(80, 240, 255, 0.20);
  background: rgba(0, 140, 200, 0.10);
}
.cv:hover {
  border-color: rgba(80, 240, 255, 0.55);
  box-shadow: 0 0 18px rgba(60, 220, 255, 0.12);
}

/* Botón hamburguesa */
.menu-btn {
  display: none; /* solo mobile */
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(80, 240, 255, 0.14);
  background: rgba(0, 140, 200, 0.08);
  cursor: pointer;
}
.menu-btn .bar {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  background: rgba(220, 245, 255, 0.75);
  border-radius: 10px;
}
.menu-btn:hover {
  border-color: rgba(80, 240, 255, 0.28);
}

/* Menú móvil desplegable */
.menu-movil {
  width: min(1150px, 92vw);
  margin: 0 auto;
  padding: 12px 0 14px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: rgba(2, 6, 10, 0.72);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(80, 240, 255, 0.10);
  border-top: none;

  display: grid;
  gap: 8px;
}
.menu-movil a {
  padding: 10px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: rgba(220, 245, 255, 0.78);
  border: 1px solid rgba(80, 240, 255, 0.08);
}
.menu-movil a:hover,
.menu-movil a.activo {
  color: rgba(80, 240, 255, 0.95);
  border-color: rgba(80, 240, 255, 0.22);
  background: rgba(0, 140, 200, 0.08);
}

.menu-acciones {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 6px;
}

/* Transición del menú */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Responsive */
@media (max-width: 900px) {
  .links {
    display: none;
  }
  .menu-btn {
    display: inline-block;
  }
  .brand .name {
    font-size: 16px;
    letter-spacing: 0.6px;
  }
  .brand .role {
    font-size: 11px;
  }
  
  section { scroll-margin-top: 90px; }

}
</style>
