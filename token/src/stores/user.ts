import { locale } from '@/i18n'
import { type RemovableRef, useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue';

export type UserState = {
  id: RemovableRef<string>;
  username: RemovableRef<string>;  
  locale: RemovableRef<string>;
}

// All info about the user
export const useUserStore = defineStore('user', () => {
  const state = ref({
    id: useStorage('user.id', ''),
    username: useStorage('user.username', ''),
    locale: useStorage('user.locale', locale)
  } as UserState)

  function reset() {
    // Manually update state as local storage and states are linked now
    state.value.id = ''
    state.value.username = ''
  }
  
  return { state, reset }
})
