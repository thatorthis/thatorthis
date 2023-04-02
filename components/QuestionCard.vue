<template>
  <div class="question-card">
    <p>{{ props.question.question }}</p>
    <QuestionCardOption
      v-for="option in props.question.options"
      :option="option"
      :key="option.id"
    >
    </QuestionCardOption>
  </div>
</template>

<script setup lang="ts">
import { QuestionWithOptions } from "~~/daos";
import QuestionCardOption from "./QuestionCardOption.vue";

const props = defineProps<{
  question: QuestionWithOptions;
}>();
</script>

<style scoped lang="scss">
.question-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
