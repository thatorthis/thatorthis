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
import QuestionCardOption from "./QuestionCardOption.vue";
import { ref } from "vue";

const props = defineProps<{
  question: QuestionWithOptions;
}>();

const selected = ref<string | null>(null);

function selectOption(option: { id: string }) {
  selected.value = option.id;
}
</script>

<style scoped lang="scss">
.question-card {
  border-radius: 1.6rem;
  padding: 1.6rem;
  margin-bottom: 2.4rem;
  background-color: $white;
}
</style>
