<!-- SkeletonCard.vue -->
<template>
  <div class="skeleton-card">
    <div class="skeleton title"></div>
    <div class="skeleton text medium"></div>
    <div class="skeleton text short"></div>
    <div class="skeleton badge"></div>
  </div>
</template>

<style scoped>
.skeleton-card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  animation: pulse 1.2s infinite ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px; /* Faol kartalarga mos uzunlik */
}

.skeleton {
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;
}

.skeleton.title {
  width: 70%;
  height: 20px;
}

.skeleton.text.medium {
  width: 80%;
  height: 14px;
}

.skeleton.text.short {
  width: 50%;
  height: 14px;
}

.skeleton.badge {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-top: auto;
  align-self: flex-start;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
