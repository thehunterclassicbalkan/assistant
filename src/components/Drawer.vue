<script setup>
import { storeToRefs } from 'pinia'
import { useDrawerStore } from '@/stores/drawer'
import { isVNode } from 'vue'

const drawer = useDrawerStore()
const { isOpen, activeTab } = storeToRefs(drawer)
const { close } = drawer
</script>

<template>
  <div class="drawer-wrapper" :class="{'opened': isOpen}">
    <button class="close-drawer" @click="close">✕</button>
    <div>
      <!-- Slot content based on active tab -->
      <slot name="weapons" v-if="activeTab === 'weapons'" />
      <slot name="missions" v-if="activeTab === 'missions'" />
      <slot name="equipment" v-if="activeTab === 'equipment'" />
    </div>
  </div>
</template>