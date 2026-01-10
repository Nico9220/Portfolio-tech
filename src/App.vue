<template>
  <HackerBackground />

  <div class="app-shell">
    <Navbar />

    <main class="container">
      <Hero />
      <Projects />
      <section id="contacto" class="section" >
        <h2 class="section-title">Contacto</h2>
        <p class="muted">
          Escribime a <a class="link" href="mailto:nicolas.caretta20@gmail.com">nicolas.caretta20@gmail.com</a>
        </p>
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
</style>
