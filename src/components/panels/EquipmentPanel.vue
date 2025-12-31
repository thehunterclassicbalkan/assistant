<script setup>
import { useStoreEquipment } from '../../stores/equipment.js'
const storeEquipment = useStoreEquipment();
defineProps({
  equipments: Array
})
</script>

<template>
  <div>
    <h2>Equipment</h2>
    <div v-for="(equipment, index) in equipments" :key="`${equipment.name}-${index}`">
      <div @click="storeEquipment.selectEquipment(equipment.id)" class="mission-wrapper"
      :class="{
        'selected': equipment.selected
      }">
        <p>Name: {{ equipment.name }}</p>
      </div>
    </div>
  </div>
</template>