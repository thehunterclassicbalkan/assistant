import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreWeapons = defineStore('weapons', () => {
  const ammunition = ref([
    {
      id: 'am1',
      name: '.223 Nosler Ballistic Tip',
      weapons: ['w1', 'w2'], // 2
      animals: [], // 12
      missions: [],
    },
    {
      id: 'am2',
      name: '.17 HMR Ammunition',
      weapons: [], // 2
      animals: [], // 12
      missions: [],
    },
    {
      id: 'am3',
      name: '.17 HMR HV Ammunition',
      weapons: [], // 2
      animals: [], // 12
      missions: [],
    },
  ])

  return { ammunition }
})
