<template>
  <section id="contacto" class="contacto">
    <h2 class="section-title">Contacto</h2>

    <p class="muted">
      ¿Querés que hablemos? Mandame un mensaje y te respondo apenas pueda.
    </p>

    <form class="form" @submit.prevent="enviarContacto" novalidate>
      <!-- Anti-spam simple (honeypot) -->
      <input
        class="hp"
        type="text"
        v-model="hp"
        tabindex="-1"
        autocomplete="off"
      />

      <div class="grid">
        <div class="campo">
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            autocomplete="name"
            v-model.trim="nombre"
            type="text"
            placeholder="Tu nombre"
            required
            :disabled="enviando"
          />
        </div>

        <div class="campo">
          <label for="email">Email</label>
          <input
            id="email"
            autocomplete="email"
            v-model.trim="email"
            type="email"
            placeholder="tu@email.com"
            required
            :disabled="enviando"
          />
        </div>

        <div class="campo full">
          <label for="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            v-model.trim="mensaje"
            autocomplete="off"
            rows="6"
            placeholder="Contame en qué te puedo ayudar…"
            required
            :disabled="enviando"
          ></textarea>
        </div>
      </div>

      <div class="acciones-form">
        <button class="btn" type="submit" :disabled="enviando">
          {{ enviando ? "Enviando..." : "Enviar" }}
        </button>

        <span class="estado" :class="{ ok: estadoOk }" v-if="estado">
          {{ estado }}
        </span>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Tu endpoint real de Formspree
const FORM_ENDPOINT = "https://formspree.io/f/mbdddbdk";

const nombre = ref("");
const email = ref("");
const mensaje = ref("");

const enviando = ref(false);
const estado = ref("");
const estadoOk = ref(false);
const hp = ref("");

function esEmailValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

async function enviarContacto() {
  estado.value = "";
  estadoOk.value = false;

  // anti-bots
  if (hp.value) return;

  // validaciones básicas
  if (nombre.value.trim().length < 2) {
    estado.value = "Escribí tu nombre (mín. 2 caracteres).";
    return;
  }
  if (!esEmailValido(email.value.trim())) {
    estado.value = "Revisá el email, parece inválido.";
    return;
  }
  if (mensaje.value.trim().length < 10) {
    estado.value = "El mensaje es muy corto (mín. 10 caracteres).";
    return;
  }

  enviando.value = true;

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre.value,
        email: email.value,
        mensaje: mensaje.value,
      }),
    });

    if (res.ok) {
      estadoOk.value = true;
      estado.value = "✅ Mensaje enviado. Gracias!";
      nombre.value = "";
      email.value = "";
      mensaje.value = "";

      setTimeout(() => {
        estado.value = "";
        estadoOk.value = false;
      }, 4500);
    } else {
      estadoOk.value = false;
      estado.value = "❌ No se pudo enviar. Probá de nuevo en unos minutos.";
    }
  } catch (e) {
    estado.value = "❌ Error de red. Revisá tu conexión e intentá de nuevo.";
  } finally {
    enviando.value = false;
  }
}
</script>

<style scoped>
.contacto {
  margin-top: 18px;
  display: grid;
  justify-content: center;
}

.form {
  margin-top: 14px;
  border: 1px solid rgba(80, 240, 255, 0.1);
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
.estado.ok {
  color: rgba(80, 240, 255, 0.95);
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
