<template>
  <footer class="footer">
    <div class="inner">
      <span class="prompt">Nicolás Caretta</span><span class="path"></span>
      <span class="cursor"></span>
      <div class="copy">© {{ new Date().getFullYear() }} Nicolás Caretta - Todos los derechos reservados</div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(80, 240, 255, 0.10);
  background: rgba(2, 6, 10, 0.55);
  backdrop-filter: blur(10px);
}
.inner {
  width: min(1150px, 92vw);
  margin: 0 auto;
  padding: 14px 0;
  color: rgba(220, 245, 255, 0.7);
  font-size: 13px;
}
.prompt { color: rgba(80, 240, 255, 0.9); }
.path { color: rgba(220, 245, 255, 0.75); margin-left: 6px; }
.cursor {
  display: inline-block;
  width: 10px;
  height: 14px;
  margin-left: 6px;
  background: rgba(80, 240, 255, 0.85);
  animation: blink 1s steps(1) infinite;
  vertical-align: -2px;
}
.copy { margin-top: 8px; opacity: 0.75; }
@keyframes blink { 50% { opacity: 0; } }
</style>
