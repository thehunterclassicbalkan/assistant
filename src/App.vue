<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStoreWeapons } from './stores/weapons.js'
import { useStoreEquipment } from './stores/equipment.js'
import { useStoreAnimals } from './stores/animalsOld.js'

import Drawer from '@/components/Drawer.vue'
import WeaponsPanel from '@/components/panels/WeaponsPanel.vue'
import MissionsPanel from '@/components/panels/MissionsPanel.vue'
import EquipmentPanel from '@/components/panels/EquipmentPanel.vue'
import { useDrawerStore } from '@/stores/drawer'

const drawer = useDrawerStore()

const storeWeapons = useStoreWeapons();
const storeEquipment = useStoreEquipment();
// const storeAnimals = useStoreAnimals();
</script>

<template>
  <header>
    <img class="logo" src="@/assets/images/logo-balkan.png" />
    <nav class="main-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/missions">Missions</RouterLink>
      <RouterLink to="/weapons">Weapons</RouterLink>
      <RouterLink to="/equipment">Equipment</RouterLink>
      <!-- <RouterLink to="/overview">Overview</RouterLink>
      <RouterLink to="/guides">Guides</RouterLink> -->
      <RouterLink to="/data">Data</RouterLink>
    </nav>
  </header>
  <div>
    <RouterView />
  </div>
  <footer>
    <!-- <h2>theHunter Classic Balkan</h2>
    <div>
      <a href="https://discord.gg/NKqWfawkcZ" target="_blank">
        <img alt="Discord" class="social-icon-animated" onmouseout="this.style.transform='scale(1)'"
          onmouseover="this.style.transform='scale(1.2) rotate(5deg)'"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
          style="width: 50px; height: 50px; transition: transform 0.3s ease;" title="Discord" />
      </a>
      <a href="https://youtube.com/@TheHunterClassicBalkan" target="_blank">
        <img alt="YouTube" class="social-icon-animated" onmouseout="this.style.transform='scale(1)'"
          onmouseover="this.style.transform='scale(1.2) rotate(-5deg)'"
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          style="width: 50px; height: 50px; transition: transform 0.3s ease;" title="YouTube" />
      </a>
      <a href="https://www.tiktok.com/@thehunter_classic_balkan?_t=8klc0Rmm5if&amp;_r=1" target="_blank">
        <img alt="TikTok" class="social-icon-animated" onmouseout="this.style.transform='scale(1)'"
          onmouseover="this.style.transform='scale(1.2) rotate(5deg)'"
          src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
          style="width: 50px; height: 50px; transition: transform 0.3s ease;" title="TikTok" />
      </a>
      <a href="https://www.instagram.com/thehunter_classic_balkan" target="_blank">
        <img alt="Instagram" class="social-icon-animated" onmouseout="this.style.transform='scale(1)'"
          onmouseover="this.style.transform='scale(1.2) rotate(-5deg)'"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          style="width: 50px; height: 50px; transition: transform 0.3s ease;" title="Instagram" />
      </a>
    </div> -->
  </footer>
  <Drawer>
    <template #weapons>
      <WeaponsPanel :weapons="drawer.panelData"/>
    </template>
    <template #missions>
      <MissionsPanel :missions="drawer.panelData" />
    </template>
    <template #equipment>
      <EquipmentPanel :equipments="drawer.panelData"/>
    </template>
  </Drawer>
</template>
