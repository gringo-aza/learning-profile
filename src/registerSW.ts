// src/registerSW.ts
/// <reference types="vite-plugin-pwa/client" />
import { registerSW } from 'virtual:pwa-register'

registerSW({
    onOfflineReady() {
        console.log('PWA offline ready')
    },
    onNeedRefresh() {
        if (confirm('Доступна новая версия. Обновить?')) {
            window.location.reload()
        }
    }
})
