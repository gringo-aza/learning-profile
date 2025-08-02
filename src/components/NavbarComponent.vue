<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-left">
        <span class="title">Learning Profile</span>
      </div>
      <div class="navbar-right">
        <ul>
          <li
            v-for="filter in filters"
            :key="filter"
            :class="{ active: activeFilter === filter }"
            @click="selectFilter(filter)"
          >
            <span>{{ filter }}</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const filters = ["Все", "Новичок", "Упорный", "Эксперт"];
const activeFilter = ref("Все");

const emit = defineEmits<{
  (e: "update:filter", value: string): void;
}>();

const selectFilter = (filter: string) => {
  activeFilter.value = filter;
  emit("update:filter", filter);
};
</script>

<style scoped>
.navbar {
  padding: 8px 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 16px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* allows wrapping on small screens */
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: #007c91;
}

.navbar-right {
  margin-top: 8px;
}

.navbar-right ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
}

ul > li {
  position: relative;
  list-style: none;
  margin-right: 12px;
  padding: 6px 12px;
  cursor: pointer;
  color: #007c91;
  font-weight: 500;
  transition: color 0.3s ease;
}

ul > li::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 0;
  background-color: #007c91;
  transition: width 0.3s ease;
}

ul > li.active::after {
  width: 100%;
}

ul > li:hover {
  color: #004f5c;
}

/* -------- Responsive Styles -------- */
@media (max-width: 640px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .navbar-left {
    justify-content: center;
    margin-bottom: 8px;
  }

  .navbar-right ul {
    justify-content: center;
  }

  ul > li {
    margin: 4px;
  }

  .title {
    font-size: 16px;
  }
}
</style>
