import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthUser = ref<boolean>(false)

  return { isAuthUser }
})