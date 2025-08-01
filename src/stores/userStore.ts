// src/stores/userStore.ts
import { defineStore } from 'pinia'
import { user, activities, achievements } from '../mocks/user'

export const useUserStore = defineStore('user', {
    state: () => ({
        ...user,
        activities,
        achievements
    })
})
