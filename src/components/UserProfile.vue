<template>
  <div class="user-profile">
    <img :src="user.avatar" class="avatar" alt="User Avatar" />
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
