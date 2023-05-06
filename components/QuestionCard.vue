<template>
  <div class="question-card">
    <h3>{{ props.question.question }}</h3>
    <div class="option-card-container">
      <OptionCard
        v-for="option in props.question.options"
        :option="option"
        :key="option.id"
        :selected="selected === option.id"
        @click="selectOption(option)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuestionWithOptions } from "~~/daos";
import { useModal } from "vue-final-modal";
import { useService } from "~~/composables/use-service";
import OptionCard from "./OptionCard.vue";
import ReasonModal from "./ReasonModal.vue";
import { ref } from "vue";

const props = defineProps<{
  question: QuestionWithOptions;
}>();

const authService = useService(symbols.auth);
const voteService = useService(symbols.vote);

const modal = useModal({
  component: ReasonModal,
  attrs: {
    onCancel: () => {
      selected.value = null;
      modal.close();
    },
    onSubmit: async (reason: string) => {
      await voteService.vote({
        userId: authService.user.value!.id,
        questionId: props.question.id,
        optionId: selected.value!,
        reason,
      });
      modal.close();
    },
  },
});

const selected = ref<string | null>(null);

function selectOption(option: { id: string }) {
  if (!authService.user.value) {
    navigateTo("/login");
  }
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

@media (min-width: 768px) {
  .option-card-container {
    display: flex;
    flex-direction: row;
  }
}
</style>
