import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreScopes = defineStore('scopes', () => {
  const scopes = ref([
    {
      id: 'sc1',
      name: 'Neki skope',
      selected: false,
      owned: false
    },
    {
      id: 'sc2',
      name: 'Neki skope 2',
      selected: false,
      owned: true
    },
  ])

  return { scopes }
})
