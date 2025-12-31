<script setup>
import { ref, computed } from 'vue'
import { useStoreMissions } from '../../stores/missions.js'
import { useStoreWeapons } from '../../stores/weapons.js'
import { useStoreEquipment } from '../../stores/equipment.js'

import MissionSingle from './MissionSingle.vue'

const { missions } = defineProps({
  missions: Object
})

const storeMissions = useStoreMissions();
const storeWeapons = useStoreWeapons();
const storeEquipment = useStoreEquipment();

const processedMissions = computed(() => {
  if (!missions) return { packName: '', missionsList: [] }
  let newMissionsArray = [];
  
  missions.missionsList.forEach((mission) => {
    let passable = true;
    // CHECK WEAPONS REQUIREMENTS
    if( !mission.require.length <= 0 ){
      mission.require.forEach((req) => {
        // Ako se id oruzja ne nalazi u array-u selektovanog oruzja
        if(Object.hasOwn(req, 'weapons')){
          if( !req.weapons.some(item => storeWeapons.selectedWeapons.includes(item)) ){
            passable = false
          }
        }

        // Ako se id equipment ne nalazi u array-u selektovanog equipment-a
        if(Object.hasOwn(req, 'equipments')){
          if( !req.equipments.some(item => storeEquipment.selectedEquipment.includes(item)) ){
            passable = false
          }
        }
      });
    }

    if(passable){
      newMissionsArray.push(mission);
    } else {
      newMissionsArray.push({...mission, passable: false});
    }
  })

  // Computed
  return {
    packName: missions.packName,
    missionsList: newMissionsArray,
  }
}) 

// Handle mission selection
const handleSelectMission = (missionID, missionPackName) => {
  storeMissions.selectMission(missionID, missionPackName)
}
</script>

<template>
  <div>
    <div class="drawer-header">
      <h2>{{ missions.packName }}</h2>
    </div>
    <div v-for="(mission, index) in processedMissions.missionsList" :key="`${mission.name}-${index}`">
      <MissionSingle
        :mission="mission"
        :indexNo="index"
        :missionsPackName="missions.packName"
        @selectMission="handleSelectMission"/>
    </div>
  </div>
</template>
