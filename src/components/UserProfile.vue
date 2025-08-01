<template>
  <div class="user-profile">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#007c91"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#007c91"
      class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>

    <h2>{{ user.name }}</h2>
    <p>Level {{ user.level }} ({{ user.xp }}/{{ user.nextLevelXp }} XP)</p>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "../stores/userStore";
const user = useUserStore();
</script>
<style scoped>
.user-profile {
  padding: 24px;
  border-radius: 20px;
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 320px;
  margin: 0 auto;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid #4dd0e1;
}

.user-profile:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15);
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid #00bcd4;
  object-fit: cover;
  margin-bottom: 16px;
  background-color: white;
}

h2 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #007c91;
}

p {
  font-size: 15px;
  color: #004d40;
  font-weight: 500;
}
</style>
