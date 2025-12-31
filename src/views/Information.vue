<script setup>
import { ref, computed, watch } from 'vue'
import { useStoreMissions } from '../stores/missions.js'
import { useRouter } from 'vue-router'
import Popup from '@/components/Popup.vue'

// REFS
const dataUpdatePopupVisible = ref(false);
const dataResetPopupVisible = ref(false);

import { resetIndexDB } from '@/piniaPersist'
// import { resetAndReloadAllStores } from '@/piniaPersist'
// import { getActivePinia } from 'pinia'

// async function handleUpdate() {
//   const pinia = getActivePinia()
//   await resetAndReloadAllStores(pinia)
// }

const router = useRouter();

const storeMissions = useStoreMissions();
let progressText = ref('');

const parseProgress = (rawText) => {
  // Normalize all line breaks to \n and split into lines
  const lines = rawText.replace(/\r\n|\r/g, '\n').split('\n').map(line => line.trim())
  const progressData = {}

  for (let i = 0; i < lines.length - 1; i++) {
    const title = lines[i]
    const next = lines[i + 1]
    const match = next.match(/^Progress:\s*(\d+)\s*\/\s*(\d+)/)

    if (match) {
      const completed = parseInt(match[1], 10)
      const total = parseInt(match[2], 10)
      progressData[title] = { completed, total }
    }
  }

  return progressData
}

// Function to update Pinia store
const applyProgress = () => {
  const parsed = parseProgress(progressText.value);

  storeMissions.missions.forEach(pack => {
    const prog = parsed[pack.name]
    if (prog) {
      pack.missionsList.forEach((mission, idx) => {
        mission.selected = idx < prog.completed
      })
    }
  })

  dataUpdatePopupVisible.value = true;
}

const closePopupRouteMissions = () => {
  dataUpdatePopupVisible.value = false;
  router.push({ name: 'missions' })
}

function confirmDataReset() {
  resetIndexDB();
  dataResetPopupVisible.value = false;
  window.location.reload();
}
</script>
<template>
  <div class="content">
    <!-- POPUP DATA APPLY CONFIRMATION -->
    <Teleport to="body">
      <Popup
        title="Update data"
        confirmButtonText="OK"
        :show="dataUpdatePopupVisible"
        @confirmPopupAction="closePopupRouteMissions"
      >
        <slot>
          Your data is succesfully updated!
        </slot>
      </Popup>
    </Teleport>
    <!-- POPUP DATA RESET -->
    <Teleport to="body">
      <Popup
        title="Reset data"
        confirmButtonText="PROCEED"
        cancelButtonText="Cancel"
        :show="dataResetPopupVisible"
        @confirmPopupAction="confirmDataReset"
        @closePopupAction="dataResetPopupVisible = false"
      >
        <slot>
          This action will <span class="bold-text">DELETE</span> all your data!
        </slot>
      </Popup>
    </Teleport>
    
    <h2 class="section-title">Paste your data</h2>
    <textarea class="input-textarea mb-40" v-model="progressText">Paste missions here</textarea>
    <button class="btn mb-20" @click="applyProgress" :disabled="!progressText">Apply Progress</button>
    <button class="btn" @click="dataResetPopupVisible = true">Reset data</button>
    <div class="info-box">
      <img src="https://i.postimg.cc/cC8XwZ7R/petal-20250425-191033-ezgif-com-video-to-gif-converter.gif" />
    </div>
  </div>
</template>