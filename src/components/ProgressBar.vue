<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: displayProgress + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import useXpSystem from "../composables/useXpSystem";

const { progress } = useXpSystem();
const displayProgress = ref(0);

onMounted(() => {
  const duration = 1000; // 1 soniya
  const intervalTime = 20; // har 20ms da yangilanish
  const steps = duration / intervalTime;
  let count = 0;

  const fakeInterval = setInterval(() => {
    count++;
    displayProgress.value = Math.min((count / steps) * 100, 100);
    if (count >= steps) {
      clearInterval(fakeInterval);
      // Haqiqiy progressga o'tish
      setTimeout(() => {
        displayProgress.value = progress.value;
      }, 500); // 0.5s kutish
    }
  }, intervalTime);
});

watch(progress, (newVal) => {
  displayProgress.value = newVal;
});
</script>

<style scoped>
.progress-container {
  width: 100%;
  height: 12px;
  background: #b2ebf2;
  border-radius: 9999px;
  overflow: hidden;
  margin-top: 16px;
  border: 2px solid #4dd0e1;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #00bcd4, #4dd0e1);
  border-radius: 9999px;
  transition: width 0.4s ease-in-out;
}
</style>
