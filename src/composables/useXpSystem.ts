import { computed } from 'vue'
import { useUserStore } from '../stores/userStore'

export default function useXpSystem() {
    const store = useUserStore()
    const level = computed(() => Math.floor(store.xp / 100))
    const progress = computed(() => (store.xp % 100) / (store.nextLevelXp - level.value * 100) * 100)
    return { level, progress }
}
