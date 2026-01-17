<template>
  <Navbar />
  <main>
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </main>
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import Hero from "@/components/sections/Hero.vue";
import About from "@/components/sections/About.vue";
import Projects from "@/components/sections/Projects.vue";
import Contact from "@/components/sections/Contact.vue";
import Footer from "@/components/sections/Footer.vue";
</script>
