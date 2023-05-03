<template>
  <TotModal :modal-id="modalSymbols.REASON_MODAL">
    <div class="container">
      <label for="container__reason">Why did you choose this option?</label>
      <textarea
        type="text"
        placeholder="Write your thoughts (Optional)"
        ref="textarea"
      />
      <div class="container__actions">
        <button class="container__actions__cancel" @click="emit('cancel')">
          Cancel
        </button>
        <button class="container__actions__submit" @click="submit">
          Submit
        </button>
      </div>
    </div>
  </TotModal>
</template>

<script setup lang="ts">
import TotModal from "~/components/shares/TotModal.vue";
import { modalSymbols } from "~/constants";

const textarea: Ref<HTMLTextAreaElement | null> = ref(null);

const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "submit", reason: string): void;
}>();

onMounted(() => {
  textarea.value?.focus();
});

function submit() {
  emit("submit", textarea.value?.value ?? "");
}
</script>

<style scoped lang="scss">
.container {
  width: 36rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 1.6rem;
  margin-bottom: -1.6rem;

  label {
    font-size: 1.8rem;
    color: $grey-800;
  }

  textarea {
    width: 100%;
    height: 8rem;
    border-radius: 0.8rem;
    border: 1px solid $grey-300;
    font-size: 1.6rem;
    padding: 1.6rem;
    color: $grey-800;
    resize: none;
    outline: none;
  }

  &__actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    column-gap: 1.6rem;
  }
}

.container__actions__cancel {
  color: $grey-800;
  background-color: $grey-200;
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  border: none;
  outline: none;
  cursor: pointer;
}

.container__actions__submit {
  color: $primary-contrast;
  background-color: $primary;
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
