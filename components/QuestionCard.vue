<template>
  <TotShadowCard class="question-card">
    <h3>{{ props.question.question }}</h3>
    <div class="option-card-container">
      <OptionCard
        v-for="option in props.question.options"
        :option="option"
        :key="option.id"
        :selected="selected === option.id"
        @click="selectOption(option)"
      />
      <div class="vs">
        <span class="v">V</span>
        <span class="s">S</span>
      </div>
    </div>
  </TotShadowCard>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuestionWithOptions } from "~~/apis";
import { useModal } from "vue-final-modal";
import OptionCard from "./OptionCard.vue";
import ReasonModal from "~/modals/ReasonModal.vue";
import TotShadowCard from "./shares/TotShadowCard.vue";
import { symbols } from "~/composables/services";

const props = defineProps<{
  question: QuestionWithOptions;
}>();

const voteSvc = inject(symbols.voteSvc)!;
const authSvc = inject(symbols.authSvc)!;

const modal = useModal({
  component: ReasonModal,
  attrs: {
    onCancel: () => {
      selected.value = null;
      modal.close();
    },
    onSubmit: async (reason: string) => {
      await voteSvc.vote({
        userId: authSvc.user.value!.id,
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
  if (!authSvc.user.value) {
    navigateTo("/login");
  }
  selected.value = option.id;
  modal.open();
}
</script>

<style scoped lang="scss">
.question-card {
  position: relative;

  .vs {
    display: none;
  }
}

@media (min-width: 768px) {
  .option-card-container {
    display: flex;
    flex-direction: row;
  }

  .vs {
    user-select: none;
    position: absolute;
    display: flex !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3.6rem;
    font-weight: bolder;
    color: $white;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: $primary-contrast;

    .v {
      margin-bottom: 1.6rem;
    }
    .s {
      margin-top: 1.6rem;
    }
  }
}
</style>
