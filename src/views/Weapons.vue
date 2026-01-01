<script setup>
import { ref, computed } from 'vue'
import { useStoreWeapons } from '@/stores/weapons.js'
const storeWeapons = useStoreWeapons();

const groupedWeapons = computed(() => {
  const result = {}
  for (const [typeKey, group] of Object.entries(storeWeapons.weaponTypes)) {
    result[typeKey] = {
      name: group.name,
      weapons: group.weapons
        .map(id => storeWeapons.weapons.find(w => w.id === id))
        .filter(Boolean) // uklanja eventualne undefined
    }
  }
  return result
})

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 150 // 200px offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
const filterArray = [
  {name: 'Varmint Rifles', id: 't1', icon: 'varmint'},
  {name: 'Bolt Action Rifles', id: 't2', icon: 'bolt',},
  {name: 'Lever Action Rifles', id: 't3', icon: 'lever'},
  {name: 'Break Action Rifles', id: 't4', icon: 'break'},
  {name: 'Classic Rifle', id: 't5', icon: 'classic'},
  {name: 'Advanced Firearms', id: 't6', icon: 'advanced'},
  {name: 'Shotguns', id: 't7', icon: 'shotgun'},
  {name: 'Handguns', id: 't8', icon: 'handgun'},
  {name: 'Muzzleloaders', id: 't9', icon: 'muzzleloaders'},
  {name: 'Bows', id: 't10', icon: 'bow'},
  {name: 'Crossbows', id: 't11', icon: 'crossbow'},
  {name: 'Sights', id: 't11', icon: 'event'},
];
const iconUrl = (icon) => {
  // NODE_ENV = 'production' na build-u
  const base = import.meta.env.MODE === 'production' ? '/assistant/' : '/'
  return `${base}images/weapons-icons/${icon}.webp`
}
</script>

<template>
  <div class="missions-filter-menu">
    <ul>
      <li v-for="(filter, index) in filterArray" :key="`filter-${filter.id}`" class="filter-item">
        <div @click="scrollToSection(filter.id)">
          <img :src="iconUrl(filter.icon)" :alt="filter.name" />
          <span>{{ filter.name }}</span>
        </div>
      </li>
    </ul>
  </div>
  <div class="content">
    <div>
      <div v-for="(group, typeKey) in groupedWeapons" :key="typeKey">
        <div class="container group-section" :id="typeKey">
          <h2 class="section-title">{{ group.name }}</h2>
          <div class="row">
            <div
              v-for="weapon in group.weapons"
              :key="weapon.id"
              class="col-4">
              <div
                class="item-card"
                :class="{
                  'selected': weapon.selected
                }">
                  <img class="card-image" :src="weapon.imgUrl" />
                  <p class="card-title">{{ weapon.name }}</p>
                  <p class="price-title">{{ weapon.priceGM }} Gm$ or {{ weapon.priceEM }} Em$</p>
                  <button
                    @click="storeWeapons.selectRifle(weapon.id)"
                    :class="{
                      'selected': weapon.selected
                    }"
                    class="btn">{{ !weapon.selected ? 'Select' : 'Remove' }}</button>
                </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>
