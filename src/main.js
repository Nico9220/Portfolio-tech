import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

app.directive("reveal", {
  mounted(el) {
    el.classList.add("reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
  },
});

app.mount("#app");