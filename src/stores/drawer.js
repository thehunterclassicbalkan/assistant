// stores/drawer.js
import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    isOpen: false,
    activeTab: null, // 'weapons', 'missions', 'equipment'
    panelData: null,
  }),
  actions: {
    open(tab, data) {
      this.activeTab = tab
      this.panelData = data
      this.isOpen = true
    },
    close() {
      this.isOpen = false
      this.activeTab = ''
      this.panelData = null
    }
  }
})