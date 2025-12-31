<script setup>
import { ref, computed, watch } from 'vue'
import { useStoreMissions } from '../stores/missions.js'
import { useDrawerStore } from '@/stores/drawer'

const storeMissions = useStoreMissions();
const drawer = useDrawerStore()
const searchQuery = ref('');
let selectedMissionPack = ref('');
let progressText = ref('');
const layout = ref('grid');
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
  {name: 'All Missions', id: '', icon: 'all'},
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
  {name: 'Weapons', id: 'f1', icon: 'weapons'},
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
  <!-- MISSIONS -->
  <div class="content">
    <div class="container group-section missions">
      <div class="row mb-40">
        <div class="col-11"><input class="input" v-model="searchQuery" /></div>
        <div class="col-1">
          <!-- TOGGLE LAYOUT -->
          <ul class="layout-options">
            <li @click="layout = 'grid'" v-if="layout == 'compact'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M152 160C174.1 160 192 177.9 192 200L192 248C192 270.1 174.1 288 152 288L104 288C81.9 288 64 270.1 64 248L64 200C64 177.9 81.9 160 104 160L152 160zM344 288L296 288C273.9 288 256 270.1 256 248L256 200C256 177.9 273.9 160 296 160L344 160C366.1 160 384 177.9 384 200L384 248C384 270.1 366.1 288 344 288zM536 288L488 288C465.9 288 448 270.1 448 248L448 200C448 177.9 465.9 160 488 160L536 160C558.1 160 576 177.9 576 200L576 248C576 270.1 558.1 288 536 288zM536 480L488 480C465.9 480 448 462.1 448 440L448 392C448 369.9 465.9 352 488 352L536 352C558.1 352 576 369.9 576 392L576 440C576 462.1 558.1 480 536 480zM344 352C366.1 352 384 369.9 384 392L384 440C384 462.1 366.1 480 344 480L296 480C273.9 480 256 462.1 256 440L256 392C256 369.9 273.9 352 296 352L344 352zM152 480L104 480C81.9 480 64 462.1 64 440L64 392C64 369.9 81.9 352 104 352L152 352C174.1 352 192 369.9 192 392L192 440C192 462.1 174.1 480 152 480z"/></svg>
            </li>
            <li @click="layout = 'compact'" v-if="layout == 'grid'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M104 112C90.7 112 80 122.7 80 136L80 184C80 197.3 90.7 208 104 208L152 208C165.3 208 176 197.3 176 184L176 136C176 122.7 165.3 112 152 112L104 112zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM80 296L80 344C80 357.3 90.7 368 104 368L152 368C165.3 368 176 357.3 176 344L176 296C176 282.7 165.3 272 152 272L104 272C90.7 272 80 282.7 80 296zM104 432C90.7 432 80 442.7 80 456L80 504C80 517.3 90.7 528 104 528L152 528C165.3 528 176 517.3 176 504L176 456C176 442.7 165.3 432 152 432L104 432z"/></svg>
            </li>
          </ul>
        </div>
      </div>
      <div class="row" :class="layout">
        <div
          v-for="(missionPack, index) in filteredItems"
          :key="`missionPack-${index}`"
          :class="[ layout === 'grid' ? 'col-3' : 'col-12' ]"><!-- This class needs toggle if its grid = 3 if its compact 4 -->
            <div @click="toggleMissionPackSelection(missionPack.id, missionPack.displayName)" 
                class="item-card"
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
                <p class="price-title">Progress: {{ countCompletedMissions(missionPack.missionsList).progress }} / {{ missionPack.missionsList.length }}</p>
                <p class="price-title">{{ countCompletedMissions(missionPack.missionsList).earnings }} Gm$ / {{ missionPack.missionPackValue }}</p>
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
  </div>
</template>

<style>

</style>
