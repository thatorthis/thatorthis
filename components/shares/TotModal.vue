<template>
  <VueFinalModal class="tot-modal" :modal-id="props.modalId">
    <div class="tot-modal__container">
      <div class="tot-modal__close-btn-container">
        <button @click="onClose()">
          <Icon name="ic:baseline-close" size="20px" />
        </button>
      </div>
      <slot />
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal, useVfm } from "vue-final-modal";
const props = defineProps<{
  modalId: symbol;
}>();
const vfm = useVfm();

function onClose() {
  vfm.close(props.modalId);
}
</script>

<style lang="scss">
.tot-modal {
  display: flex;
  justify-content: center;
  align-items: center;

  &__close-btn-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      width: 3.2rem;
      height: 3.2rem;
      text-align: center;
      padding: 0;
      border-radius: 100%;
      &:hover {
        background-color: $grey-200;
      }
    }

    svg {
      stroke: currentColor;
    }
  }

  &__container {
    width: 100%;
    height: 100%;
    background-color: $white;
    border-radius: 0.8rem;
    padding: 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
  }
}
</style>
