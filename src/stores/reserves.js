import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreReserves = defineStore('reserves', () => {
  const reserves = ref([
    {
      id: 'r1',
      name: 'Whitehart Island',
      icon: 'Whitehart_icon',
      animals: ['an39', 'an9', 'an47', 'an14', 'an10', 'an45'], // 6
      missions: [],
    },
    {
      id: 'r2',
      name: 'Logers Point',
      icon: 'Lp_icon',
      animals: ['an20', 'an27', 'an47', 'an14', 'an10', 'an29', 'an13'], // 7
      missions: [],
    },
    {
      id: 'r3',
      name: 'Settler Creeks',
      icon: 'Settler_Creeks_EW_icon',
      animals: ['an39', 'an8', 'an20', 'an47', 'an10', 'an45', 'an13'], // 7
      missions: [],
    },
    {
      id: 'r4',
      name: 'Redfeather Falls',
      icon: 'RFF_icon2',
      animals: ['an26', 'an39', 'an8', 'an9', 'an47'], // 5
      missions: [],
    },
    {
      id: 'r5',
      name: 'Hirschfelden',
      icon: 'Hirschfelden_icon',
      animals: ['an32', 'an18', 'an49', 'an38', 'an33', 'an51', 'an12', 'an29'], // 8
      missions: [],
    },
    {
      id: 'r6',
      name: 'Hemmeldal',
      icon: 'Hemmeldal_Icon',
      animals: ['an26', 'an11', 'an35', 'an38', 'an33', 'an16', 'an51', 'an50'], // 8
      missions: [],
    },
    {
      id: 'r7',
      name: 'Rougarou Bayou',
      icon: 'Rougarou_Icon',
      animals: ['an8', 'an20', 'an47', 'an10', 'an25', 'an2', 'an28', 'an21'], // 8
      missions: [],
    },
    {
      id: 'r8',
      name: 'Val-des-Bois',
      icon: 'Val-des-bois_icon',
      animals: ['an11', 'an32', 'an1', 'an38', 'an33', 'an17', 'an51', 'an36'], // 8
      missions: [],
    },
    {
      id: 'r9',
      name: 'Bushrangers Run',
      icon: 'Bushrangers_run_icon',
      animals: ['an4', 'an20', 'an34', 'an19', 'an33', 'an17'], // 6
      missions: [],
    },
    {
      id: 'r10',
      name: 'Whiterime Ridge',
      icon: 'WR_icon',
      animals: ['an7', 'an26', 'an30', 'an42', 'an15', 'an3', 'an44', 'an43'], // 8
      missions: [],
    },
    {
      id: 'r11',
      name: 'Timbergold Trails',
      icon: 'TT_icon',
      animals: ['an37', 'an23', 'an27', 'an22', 'an31', 'an6', 'an48'], // 7
      missions: [],
    },
    {
      id: 'r12',
      name: 'Piccabeen Bay',
      icon: 'PB_icon',
      animals: ['an46', 'an5', 'an41', 'an40', 'an20', 'an24'], // 6
      missions: [],
    },
  ])

  return { reserves }
})