<template>
  <article class="card">
    <div class="thumb"></div>

    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>

    <div class="tags">
      <span v-for="t in tags" :key="t" class="tag">{{ t }}</span>
    </div>

    <a class="btn" :href="href">VER PROYECTO</a>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  tags: Array,
  href: String,
});
</script>

<style scoped>
.card {
  padding: 16px;
  border-radius: 18px;
  background: rgba(5, 12, 18, 0.55);
  border: 1px solid rgba(80, 240, 255, 0.12);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
}
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(400px 120px at 20% 0%, rgba(80,240,255,0.10), transparent 60%);
  pointer-events: none;
}
.thumb {
  height: 150px;
  border-radius: 14px;
  background:
    radial-gradient(180px 120px at 35% 45%, rgba(80,240,255,0.25), transparent 60%),
    linear-gradient(135deg, rgba(15, 30, 40, 0.65), rgba(5, 12, 18, 0.85));
  border: 1px solid rgba(80, 240, 255, 0.10);
  margin-bottom: 12px;
}
h3 {
  margin: 0 0 6px;
  color: rgba(190, 252, 255, 0.92);
  letter-spacing: 0.3px;
}
p {
  margin: 0 0 10px;
  color: rgba(220, 245, 255, 0.68);
  line-height: 1.5;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 12px;
}
.tag {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(80, 240, 255, 0.12);
  color: rgba(220, 245, 255, 0.75);
}
.btn {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 12px;
  text-decoration: none;
  color: rgba(220, 252, 255, 0.95);
  border: 1px solid rgba(80, 240, 255, 0.30);
  background: rgba(0, 140, 200, 0.10);
}
.btn:hover {
  border-color: rgba(80, 240, 255, 0.70);
  box-shadow: 0 0 28px rgba(60, 220, 255, 0.14);
}
.card {
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(80, 240, 255, 0.22);
  box-shadow: 0 0 55px rgba(60, 220, 255, 0.10);
}

</style>
