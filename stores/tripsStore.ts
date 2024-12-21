import { defineStore } from 'pinia'
import { ref } from 'vue';
import type { ITripsList } from '@/types/trips'

export const useTripsStore = defineStore('trips', () => {
  const trips = ref<ITripsList[]>()

  return { trips }
})