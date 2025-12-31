<script setup>

const props = defineProps({
  show: Boolean,
  title: String,
  confirmButtonText: String,
  cancelButtonText: String
})
</script>
<template>
  <Transition name="popup">
    <div class="popup-window" v-if="show">
      <div class="confirm-popup">
        <h3 class="popup-title">{{ title }}</h3>
        <p class="popup-text">
          <slot></slot>
        </p>
        <button
          class="btn mb-20"
          @click="$emit('confirmPopupAction')">{{ confirmButtonText ? confirmButtonText : 'OK'}}</button>
        <button
          v-if="cancelButtonText"
          class="btn empty"
          @click="$emit('closePopupAction')">{{ cancelButtonText ? cancelButtonText : 'Cancel'}}</button>
      </div>
    </div>
  </Transition>
</template>