import { computed } from 'vue'
import { useUserStore } from '../stores/userStore'

export default function useXpSystem() {
    const store = useUserStore()

    const level = computed<number>(() => Math.floor(store.xp / 100))

    const progress = computed<number>(() => {
        const currentLevelXp = level.value * 100
        const xpInCurrentLevel = store.xp - currentLevelXp
        const xpNeededForNextLevel = store.nextLevelXp - currentLevelXp
        return (xpInCurrentLevel / xpNeededForNextLevel) * 100
    })

    return { level, progress }
}
