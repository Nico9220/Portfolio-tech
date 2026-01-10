<template>
  <section id="proyectos" class="section">
    <h2 class="section-title">Mis Proyectos</h2>
    <p class="muted">Proyectos de desarrollo web en los que he trabajado.</p>

    <div class="grid">
      <ProjectCard
        v-for="p in projects"
        :key="p.title"
        :title="p.title"
        :desc="p.desc"
        :tags="p.tags"
        :href="p.href"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    title: "Agencia Digital",
    desc: "Landing moderna con animaciones y diseño tech.",
    tags: ["Vue", "CSS", "Vite"],
    href: "#",
  },
  {
    title: "Tienda de Electrónica",
    desc: "E-commerce con carrito, filtros y persistencia.",
    tags: ["Laravel", "MySQL", "Frontend"],
    href: "#",
  },
  {
    title: "Blog de Tecnologías",
    desc: "Blog con CRUD completo y panel admin.",
    tags: ["Laravel", "Auth", "CRUD"],
    href: "#",
  },
  {
    title: "Clínica Dental",
    desc: "Sitio profesional enfocado en confianza y turnos.",
    tags: ["UI", "SEO", "Responsive"],
    href: "#",
  },
];
</script>

<style scoped>
.grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
