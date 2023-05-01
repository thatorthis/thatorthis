<template>
  <vue-final-modal class="tot-modal" :modal-id="props.modalId">
    <div class="tot-modal__container">
      <slot />
    </div>
  </vue-final-modal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
const props = defineProps<{
  modalId: symbol;
}>();
</script>

<style lang="scss">
.tot-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  .tot-modal__container {
    width: 100%;
    height: 100%;
    background-color: $white;
    border-radius: 1.6rem;
    padding: 2.4rem 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
  }
}
</style>
