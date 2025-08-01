<template>
  <Navbar @update:filter="onFilterChange" />
  <div class="home">
    <UserProfile />

    <section class="achievements" aria-labelledby="achievements-title">
      <h2 id="achievements-title" class="visually-hidden">
        Achievements Progress
      </h2>
      <div class="progress-wrapper">
        <ProgressBar />
      </div>
    </section>
    <ActivityList :filter="activeFilter" />
  </div>
</template>

<script setup lang="ts">
import UserProfile from "../components/UserProfile.vue";
import ProgressBar from "../components/ProgressBar.vue";
import ActivityList from "../components/ActivityList.vue";
import Navbar from "../components/NavbarComponent.vue";
import { ref } from "vue";

const activeFilter = ref("Все");

function onFilterChange(value: string) {
  activeFilter.value = value;
}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  padding: 16px;
}

.achievements {
  width: 100%;
  display: flex;
  justify-content: center;
}

.progress-wrapper {
  width: 100%;
  max-width: 1200px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
