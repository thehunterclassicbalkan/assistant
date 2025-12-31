import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreEquipment = defineStore('equipment', () => {
  const equipments = ref([
    {
      id: 'eq1',
      name: 'Ground Blind',
      imgUrl: 'https://static.thehunter.com/static/img/items/256/large_equipment_blind_tropical.png',
      priceGM: 7140,
      priceEM: 420,
      selected: false,
      owned: true
    },
    {
      id: 'eq2',
      name: 'Tripod Stand',
      imgUrl: 'https://static.thehunter.com/static/img/items/256/large_equipment_tripod.png',
      priceGM: 11050,
      priceEM: 650,
      selected: false,
      owned: true
    },
    {
      id: 'eq3',
      name: 'Tree Stand',
      imgUrl: 'https://static.thehunter.com/static/img/items/256/large_equipment_treestand.png',
      priceGM: 7140,
      priceEM: 420,
      selected: false,
      owned: true
    },
    {
      id: 'eq4',
      name: 'Waterfowl Blind',
      imgUrl: 'https://static.thehunter.com/static/img/items/256/waterfowl_blind_04_tropicalforest.png',
      priceGM: 7650,
      priceEM: 450,
      selected: false,
      owned: true
    },
    {
      id: 'eq5',
      name: 'Tower',
      imgUrl: 'https://static.thehunter.com/static/img/items/256/large_equipment_constructible_tower_02.png',
      priceGM: 10540,
      priceEM: 620,
      selected: false,
      owned: true
    },
    {
      id: 'eq6',
      name: 'Shooting Tripod',
      imgUrl: 'https://static.thehunter.com/static/img/items/256/tripod_shooting_rest.png',
      priceGM: 9775,
      priceEM: 575,
      selected: false,
      owned: true
    },
  ])

  function selectEquipment(id) {
    equipments.value.forEach(equipment => {
      if(equipment.id === id){
        equipment.selected = !equipment.selected
      }
    })
  }

  const selectedEquipment = computed(() => equipments.value.filter(eq => eq.selected).map(eq => eq.id))

  return { equipments, selectEquipment, selectedEquipment }
})
