<script setup>
import { ref } from 'vue'

const expanded = ref(false);
const emit = defineEmits(['selectMission'])
const { mission, indexNo, missionsPackName } = defineProps({
  mission: {
    type: Object,
    required: true
  },
  indexNo: {
    type: Number,
    required: true
  },
  missionsPackName: {
    type: String,
    required: true
  }
})

//Emit select mission event
function emitSelectMission() {
  emit('selectMission', mission.missionID, missionsPackName);
}
</script>

<template>
  <div class="mission-wrapper"
    :class="{
      'selected': mission.selected,
      'not-passable': !mission.selected && !mission.passable,
    }"
  >
    <p class="mission-number">{{ indexNo + 1 }}</p>
    <div class="mission-info-wrap" @click="expanded = !expanded">
      <div class="mission-info-header" >
        <p class="mission-name">{{ mission.name }}</p>
        <p class="mission-reward">Gm$ {{ mission.earnings }}</p>
      </div>
      <div class="mission-info" :class="{ opened: expanded }">
        <hr class="head-divider" />
        <div class="mission-info-layout">
          <!-- MISSION DETAILS -->
          <div class="left-layout">
            <h3 class="mission-titles">Objectives</h3>
            <ul class="goal-list mb-20">
              <li v-for="(goal, index) in mission.goals" :key="`goal-${index}`">
                {{ goal }}
              </li>
            </ul>
            <hr class="head-divider" v-if="mission.require.length > 0"/>
            <h3 class="mission-titles" v-if="mission.require.length > 0">Requirements</h3>
            <ul class="req-list">
              <li v-for="(requirement, index) in mission.require" :key="`requirement-${index}`">
                {{ requirement.text }}
              </li>
            </ul>
          </div>
          <!-- HINT -->
          <div class="right-layout">
            <h3 class="mission-titles" v-if="mission.hint.text || mission.hint.imageURL">Hints</h3>
            <p v-if="mission.hint.text">{{ mission.hint.text }}</p>
            <img v-if="mission.hint.imageURL" :src="mission.hint.imageURL" />
          </div>
        </div>
      </div>
    </div>
    <!-- <p>Completed: {{ mission.selected }}</p> -->
    <div class="checkbox" @click="emitSelectMission"></div>
    <!-- <div class="checkbox" @click="storeMissions.selectMission(mission.missionID, missions.packName)"></div> -->
  </div>
</template>
