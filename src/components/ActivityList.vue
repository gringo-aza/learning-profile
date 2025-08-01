<template>
  <div class="activity-container">
    <!-- Loader -->
    <template v-if="loading">
      <div class="activity-grid">
        <SkeletonCard v-for="n in 10" :key="n" />
      </div>
    </template>

    <!-- Activity Cards with Transition -->
    <TransitionGroup name="fade" tag="div" class="activity-grid" v-else>
      <div
        v-for="activity in filteredActivities"
        :key="activity.id"
        class="activity-card"
      >
        <h3 class="activity-title">{{ activity.course }}</h3>
        <p class="activity-date">Дата: {{ formatDate(activity.date) }}</p>
        <p class="activity-xp">+{{ activity.xp }} XP</p>

        <AchievementBadge
          v-for="badge in getBadges(activity.xp)"
          :key="badge.description"
          :img="badge.img"
          :description="badge.description"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "../stores/userStore";
import AchievementBadge from "../components/AchievementBadge.vue";
import SkeletonCard from "../components/SkeletonCard.vue";

const props = defineProps<{ filter: string }>();

const user = useUserStore();
const loading = ref(true);

const filteredActivities = computed(() => {
  if (props.filter === "Все") return user.activities;

  return user.activities.filter((activity) => {
    const badge = getBadges(activity.xp)[0]?.description;
    return badge === props.filter;
  });
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function getBadges(xp: number) {
  if (xp >= 100) {
    return [
      {
        img: new URL("../assets/img/expert.svg", import.meta.url).href,
        description: "Эксперт",
      },
    ];
  } else if (xp >= 70) {
    return [
      {
        img: new URL("../assets/img/hard-worker.svg", import.meta.url).href,
        description: "Упорный",
      },
    ];
  } else if (xp >= 30) {
    return [
      {
        img: new URL("../assets/img/beginner.svg", import.meta.url).href,
        description: "Новичок",
      },
    ];
  } else return [];
}
</script>

<style scoped>
.activity-container {
  min-height: 500px;
  overflow-anchor: none;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

@media (max-width: 1200px) {
  .activity-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .activity-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .activity-grid {
    grid-template-columns: 1fr;
  }
}

.activity-card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}
.activity-card:hover {
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
}

.activity-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #007c91;
}
.activity-date,
.activity-xp {
  font-size: 14px;
  margin-bottom: 8px;
  color: #007c91;
}
.activity-xp {
  color: #2e7d32;
  font-weight: 500;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-move {
  transition: transform 0.4s ease;
}
</style>
