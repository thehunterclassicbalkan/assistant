<script setup>
import { computed } from 'vue'
import { useStoreEquipment } from '@/stores/equipment.js'
const equipment = useStoreEquipment();

</script>

<template>
  <div class="content">
      <div class="container group-section">
        <h2 class="section-title">Equipment</h2>
        <div class="row">
          <div
            v-for="eq in equipment.equipments"
            :key="eq.id"
            class="col-3">
            <div
              class="item-card"
              :class="{
                'selected': eq.selected
              }">
                <img class="card-image" :src="eq.imgUrl" />
                <p class="card-title">{{ eq.name }}</p>
                <p class="price-title">{{ eq.priceGM }} Gm$ or {{ eq.priceEM }} Em$</p>
                <button
                  @click="equipment.selectEquipment(eq.id)"
                  :class="{
                    'selected': eq.selected
                  }"
                  class="btn">{{ !eq.selected ? 'Select' : 'Remove' }}</button>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>
