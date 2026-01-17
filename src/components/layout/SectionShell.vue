<template>
  <section :id="id" class="section">
    <div class="section-inner">
      <div class="panel">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
});
</script>

<style scoped>
.section {
  position: relative;
  padding: 90px 0;
  scroll-margin-top: calc(var(--nav-h) + 18px);
}

.section-inner {
  width: min(var(--max), 92vw);
  margin: 0 auto;
}

.panel {
  border: 1px solid rgba(80, 240, 255, 0.1);
  background: rgba(0, 140, 200, 0.05);
  border-radius: 22px;
  padding: 26px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 45px rgba(60, 220, 255, 0.06);
}

/* separadores sutiles */
.section::before,
.section::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  opacity: 0.7;
}
.section::before {
  top: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(80, 240, 255, 0.2),
    transparent
  );
}
.section::after {
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(80, 240, 255, 0.1),
    transparent
  );
}

@media (max-width: 900px) {
  .section {
    padding: 70px 0;
  }
  .panel {
    padding: 18px;
    border-radius: 18px;
  }
}
</style>
