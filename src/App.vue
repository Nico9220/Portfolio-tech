<template>
  <HackerBackground />

  <div class="app-shell">
    <Navbar />

    <main class="container">
      <Hero />
      <Projects />
      <section id="contacto" class="contacto">
  <h2 class="section-title">Contacto</h2>

  <p class="muted">
    ¿Querés que hablemos? Mandame un mensaje y te respondo apenas pueda.
  </p>

  <form class="form" @submit.prevent="enviarContacto" novalidate>
    <!-- Anti-spam simple (honeypot) -->
    <input class="hp" type="text" v-model="hp" tabindex="-1" autocomplete="off" />

    <div class="grid">
      <div class="campo">
        <label for="nombre">Nombre</label>
        <input
          id="nombre"
          v-model.trim="nombre"
          type="text"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div class="campo">
        <label for="email">Email</label>
        <input
          id="email"
          v-model.trim="email"
          type="email"
          placeholder="tu@email.com"
          required
        />
      </div>

      <div class="campo full">
        <label for="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          v-model.trim="mensaje"
          rows="6"
          placeholder="Contame en qué te puedo ayudar…"
          required
        ></textarea>
      </div>
    </div>

    <div class="acciones-form">
      <button class="btn" type="submit" :disabled="enviando">
        {{ enviando ? "Preparando…" : "Enviar" }}
      </button>

      <a class="ghost" :href="`mailto:${emailDestino}`">Abrir mail</a>

      <span class="estado" role="status" aria-live="polite" v-if="estado">
        {{ estado }}
      </span>
    </div>
  </form>
</section>

    </main>

    <FooterTerminal />
  </div>
</template>

<script setup>
import HackerBackground from "./components/HackerBackground.vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
import FooterTerminal from "./components/FooterTerminal.vue";
import { ref } from "vue";

const emailDestino = "tuemail@dominio.com"; // <-- poné tu mail real

const nombre = ref("");
const email = ref("");
const mensaje = ref("");

const enviando = ref(false);
const estado = ref("");
const hp = ref(""); // honeypot

function esEmailValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

async function enviarContacto() {
  estado.value = "";

  // anti-bots
  if (hp.value) return;

  if (nombre.value.length < 2) {
    estado.value = "Escribí tu nombre (mínimo 2 caracteres).";
    return;
  }
  if (!esEmailValido(email.value)) {
    estado.value = "Revisá el email, parece inválido.";
    return;
  }
  if (mensaje.value.length < 10) {
    estado.value = "El mensaje es muy corto (mínimo 10 caracteres).";
    return;
  }

  enviando.value = true;

  // mailto (funciona en hosting estático)
  const asunto = encodeURIComponent(`Contacto Portfolio - ${nombre.value}`);
  const cuerpo = encodeURIComponent(
    `Nombre: ${nombre.value}\nEmail: ${email.value}\n\nMensaje:\n${mensaje.value}`
  );

  const url = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpo}`;
  window.location.href = url;

  // reseteo (opcional)
  setTimeout(() => {
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
    estado.value = "Listo. Se abrió tu app de correo 🙂";
    enviando.value = false;
  }, 400);
}

</script>

<style>
.app-shell {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}
.container {
  width: min(1150px, 92vw);
  margin: 0 auto;
  padding: 96px 0 48px;
}
.section {
  padding: 56px 0;
}
.section-title {
  font-size: 28px;
  margin: 0 0 10px;
  letter-spacing: 0.5px;
  text-shadow: 0 0 18px rgba(60, 220, 255, 0.25);
}
.muted {
  color: rgba(220, 245, 255, 0.72);
}
.link {
  color: rgba(80, 240, 255, 0.95);
  text-decoration: none;
  border-bottom: 1px solid rgba(80, 240, 255, 0.35);
}
.link:hover {
  border-bottom-color: rgba(80, 240, 255, 0.85);
}
html { scroll-behavior: smooth; }

.contacto {
  padding: 56px 0 10px;
}

.form {
  margin-top: 14px;
  border: 1px solid rgba(80, 240, 255, 0.10);
  background: rgba(0, 140, 200, 0.06);
  border-radius: 18px;
  padding: 18px;
  max-width: 820px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.campo {
  display: grid;
  gap: 8px;
}

.campo.full {
  grid-column: 1 / -1;
}

label {
  font-size: 12px;
  color: rgba(220, 245, 255, 0.72);
}

input,
textarea {
  width: 100%;
  padding: 12px 12px;
  border-radius: 12px;
  border: 1px solid rgba(80, 240, 255, 0.14);
  background: rgba(2, 6, 10, 0.45);
  color: rgba(220, 252, 255, 0.92);
  outline: none;
}

input:focus,
textarea:focus {
  border-color: rgba(80, 240, 255, 0.35);
  box-shadow: 0 0 18px rgba(60, 220, 255, 0.12);
}

.acciones-form {
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.estado {
  color: rgba(220, 245, 255, 0.72);
  font-size: 12.5px;
}

.hp {
  position: absolute;
  left: -9999px;
  opacity: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .form {
    padding: 14px;
  }
}

</style>
