<script setup>
import { ref, computed, watch } from 'vue'
import { useStoreMissions } from '../stores/missions.js'
import { useDrawerStore } from '@/stores/drawer'

const storeMissions = useStoreMissions();
const drawer = useDrawerStore()
const searchQuery = ref('');
let selectedMissionPack = ref('');
let progressText = ref('');
/*  
  Filtered list of mission packs by
  Mission pack name - missionPAck.name
  Mission in list name and goals
*/
const filteredItems = computed(() => {
  const query = searchQuery.value.toLowerCase();

  return storeMissions.missions
    .map(missionPack => {
      // Filter misije po searchQuery
      const filteredMissions = missionPack.missionsList.filter(mission =>
        mission.name.toLowerCase().includes(query) ||
        mission.goals.some(goal => goal.toLowerCase().includes(query))
      )

      // Check top-level name
      const matchesMissionPack = missionPack.name.toLowerCase().includes(query)

      // Check filterID
      const matchesFilter = !filterID.value || missionPack.filterArray.includes(filterID.value)

      if ((matchesMissionPack || filteredMissions.length > 0) && matchesFilter) {
        return {
          ...missionPack,
          missionsList: filteredMissions // opciono, možeš filtrirati i unutar misija
        }
      }

      return null
    })
    .filter(Boolean)
})

/*  
  Get missions from selected mission pack
*/
const missionsListBySelectedPack = computed(() => {
  const match = Object.values(storeMissions.missions).find(item =>
    item.id === selectedMissionPack.value
  )
  return match ? match.missionsList : []
})

// METHODS
function toggleMissionPackSelection(missionPackId, missionPackName){
  selectedMissionPack.value = missionPackId;
  let packName = missionPackName;
  drawer.open('missions', {
    missionsList: missionsListBySelectedPack.value,
    packName: packName
  })
};

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function countCompletedMissions(missionsList) {
  const completedMissions = missionsList.filter(m => m.selected).length;
  const totalEarnings = missionsList
    .filter(m => m.selected)
    .reduce((sum, m) => sum + Number(m.earnings), 0);
  const finished = completedMissions === missionsList.length;

  return {
    finished,
    earnings: formatNumber(totalEarnings),
    progress: completedMissions
  };
  // return missionsList.filter(mission => mission.selected === true).length;
}

// WATCHER
watch(searchQuery, () => {
  selectedMissionPack.value = ''
});

// MISIIONS FILTER MENU
const filterID = ref('');
const filterArray = [
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
  {name: 'Weapons', id: 'f1', icon: 'PB_icon'},
  {name: 'Reset', id: '', icon: 'PB_icon'},
];

</script>
<template>
  <div class="missions-filter-menu">
    <ul>
      <li v-for="(filter, index) in filterArray" :key="`filter-${filter.id}`" class="filter-item">
        <div @click="filterID = filter.id">
          <img :src="`/images/reserves/${filter.icon}.webp`" />
          <span>{{ filter.name }}</span>
        </div>
      </li>
    </ul>
  </div>
  
  <div class="container group-section missions">
    <div class="row">
      <div class="col-12"><input v-model="searchQuery" /><p>FILTER ID: {{ filterID }}</p></div>
      <div
        v-for="(missionPack, index) in filteredItems"
        :key="`missionPack-${index}`"
        class="col-3">
          <div class="item-card"
              :class="{
                'selected': countCompletedMissions(missionPack.missionsList).finished
              }">
            <div class="img-container">
              <img
              :alt="missionPack.displayName"
              class="card-image"
              :src="missionPack.imageURL"
              :style="{
                backgroundImage: `url('${missionPack.bgURL}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }"
              :title="missionPack.displayName" />
            </div>
            <div class="info-container">
              <h2 class="card-title">{{ missionPack.displayName }}</h2>
              <p class="price-title">{{ countCompletedMissions(missionPack.missionsList).earnings }} Gm$ / {{ missionPack.missionPackValue }}</p>
              <p class="price-title">Completed: {{ countCompletedMissions(missionPack.missionsList).progress }} / {{ missionPack.missionsList.length }}</p>
            </div>
        </div>
      </div>
    </div>
    <!-- <div v-for="(mission, index) in missionsListBySelectedPack" :key="`${mission.name}-${index}`">
      <p>Name: {{ mission.name }}</p>
      <p>GMS: {{ mission.earnings }}</p>
      <p>Completed: {{ mission.selected }}</p>
    </div> -->
  </div>
</template>

<style>

</style>
