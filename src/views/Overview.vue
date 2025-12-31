<script setup>
import { ref, computed, watch } from 'vue'
import { useStoreAnimals } from '../stores/animalsOld.js'

const storeAnimals = useStoreAnimals();
const filterID = ref('');
const filterArray = [
  {name: 'All Reserves', id: '', icon: 'all'},
  {name: 'Whiteheart Island', id: 'r1', icon: 'Whitehart_icon'},
  {name: 'Logers Point', id: 'r2', icon: 'Lp_icon',},
  {name: 'Settler Creeks', id: 'r3', icon: 'Settler_Creeks_EW_icon'},
  {name: 'Redfeather Falls', id: 'r4', icon: 'RFF_icon2'},
  {name: 'Hirschfelden', id: 'r5', icon: 'Hirschfelden_icon'},
  {name: 'Hemmeldal', id: 'r6', icon: 'Hemmeldal_Icon'},
  {name: 'Rougarou Bayou', id: 'r7', icon: 'Rougarou_Icon'},
  {name: 'Val-des-Bois', id: 'r8', icon: 'Val-des-bois_icon'},
  {name: 'Bushrangers Run', id: 'r9', icon: 'Bushrangers_run_icon'},
  {name: 'Whiterime Ridge', id: 'r10', icon: 'WR_icon'},
  {name: 'Timbergold Trails', id: 'r11', icon: 'TT_icon'},
  {name: 'Piccabeen Bay', id: 'r12', icon: 'PB_icon'},
];
</script>
<template>
  <!-- FILTER MENU -->
  <div class="missions-filter-menu">
    <ul>
      <li v-for="(filter, index) in filterArray" :key="`filter-${filter.id}`" class="filter-item" :class="{ 'selected' :  filter.id == filterID}">
        <div @click="filterID = filter.id">
          <img :src="`/images/reserves/${filter.icon}.webp`" />
          <span>{{ filter.name }}</span>
        </div>
      </li>
    </ul>
  </div>
  <div class="content">
    <div class="container">
      <!-- <h2 class="section-title">Reserves</h2> -->
      <div class="row">
        <div v-for="(animal, index) in storeAnimals.animals" :key="`reserve-${index}`"
          class="col-1 reserves-container">
          <!-- {{ animal.name }} -->
          <img :src="animal.url" />
        </div>
      </div> 
    </div>
  </div>
</template>