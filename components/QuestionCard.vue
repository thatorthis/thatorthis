<template>
  <div class="question-card">
    <p>{{ props.question.question }}</p>
    <QuestionCardOption
      v-for="option in props.question.options"
      :option="option"
      :key="option.id"
      :selected="selected === option.id"
      @click="selectOption(option)"
    >
    </QuestionCardOption>
  </div>
</template>

<script setup lang="ts">
import { QuestionWithOptions } from "~~/daos";
import { useModal } from "vue-final-modal";
import QuestionCardOption from "./QuestionCardOption.vue";
import ReasonModal from "./ReasonModal.vue";
import { ref } from "vue";

const props = defineProps<{
  question: QuestionWithOptions;
}>();
const modal = useModal({
  component: ReasonModal,
  attrs: {
    onCancel: () => {
      selected.value = null;
      modal.close();
    },
    onSubmit: (reason: string) => {
      console.log(reason);
      modal.close();
    },
  },
});

const selected = ref<string | null>(null);

function selectOption(option: { id: string }) {
  selected.value = option.id;
  modal.open();
}
</script>

<style scoped lang="scss">
.question-card {
  border-radius: 1.6rem;
  padding: 1.6rem;
  margin-bottom: 2.4rem;
  background-color: $white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px 0px;
}
</style>
