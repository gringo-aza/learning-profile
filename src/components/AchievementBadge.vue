<template>
  <div
    class="badge"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <img :src="img" alt="Achievement Icon" class="badge-icon" />
    <div v-show="showTooltip" class="tooltip">
      {{ description }}
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  img: string;
  description: string;
}>();

const showTooltip = ref(false);
</script>

<style scoped>
.badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
  width: fit-content;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.badge-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.badge-description {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

/* Tooltip styling */
.tooltip {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%) translateX(8px);
  background-color: #333;
  color: #fff;
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 6px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.badge:hover .tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(12px);
  pointer-events: auto;
}
/* Tooltip arrow */
.tooltip-arrow {
  position: absolute;
  top: 50%;
  left: -6px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #333;
}
</style>
