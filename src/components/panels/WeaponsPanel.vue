<script setup>
import { useStoreWeapons } from '../../stores/weapons.js'
const storeWeapons = useStoreWeapons();
defineProps({
  weapons: Array
})
</script>

<template>
  <div>
    <h2>Weapons</h2>
    <div v-for="(weapon, index) in weapons" :key="`${weapon.name}-${index}`">
      <div @click="storeWeapons.selectRifle(weapon.id)" class="mission-wrapper"
      :class="{
        'selected': weapon.selected
      }">
        <p>Name: {{ weapon.name }}</p>
      </div>
    </div>
  </div>
</template>