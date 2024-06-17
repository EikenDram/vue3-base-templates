import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const drawer = ref(true)
  const drawerImage = ref("")
  const drawerImageShow = ref(true)
  
  return { drawer, drawerImage, drawerImageShow }
})