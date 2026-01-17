<template>
  <HackerBackground />
  <div class="app-shell">
    <Navbar />
    <main class="container">
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
    <FooterTerminal />
  </div>
</template>

<script setup>
import Navbar from "./components/layout/Navbar.vue";
import Hero from "./components/sections/Hero.vue";
import AboutMe from "./components/sections/AboutMe.vue";
import Projects from "./components/sections/Projects.vue";
import Contact from "./components/sections/Contact.vue";
import FooterTerminal from "./components/sections/FooterTerminal.vue";
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
html {
  scroll-behavior: smooth;
}
</style>
