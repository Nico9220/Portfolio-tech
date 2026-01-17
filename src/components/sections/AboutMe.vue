<template>
  <SectionShell id="sobre-mi">
    <h2 class="section-title">Sobre mí</h2>

    <p class="muted">
      Soy <strong>Nicolás Caretta</strong>, desarrollador web. Me gusta construir
      productos con una interfaz limpia, buena experiencia de usuario y código
      mantenible. Me enfoco en escribir componentes claros, cuidar performance y
      mantener una estructura ordenada tanto en frontend como en backend.
    </p>

    <ul class="bullets">
      <li><strong>Frontend:</strong> UI prolija, responsive y accesible</li>
      <li><strong>Backend:</strong> APIs REST, validaciones y lógica clara</li>
      <li><strong>Calidad:</strong> buenas prácticas, orden y consistencia</li>
    </ul>

    <div class="chips">
      <span class="chip">Vue 3</span>
      <span class="chip">React</span>
      <span class="chip">Laravel</span>
      <span class="chip">MySQL</span>
      <span class="chip">Git</span>
      <span class="chip">REST</span>
    </div>

    <div class="cta-row">
      <a class="btn" href="#proyectos">Ver proyectos</a>
      <a class="ghost" href="#contacto">Contactarme</a>
    </div>
  </SectionShell>
</template>

<script setup>
import SectionShell from "../layout/SectionShell.vue";
</script>

<style scoped>
.bullets {
  margin: 14px 0 12px;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.6;
}
.bullets li {
  margin: 6px 0;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0 12px;
}
.chip {
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(0, 140, 200, 0.08);
  color: rgba(220, 245, 255, 0.78);
}
</style>
