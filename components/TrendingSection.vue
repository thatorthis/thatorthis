<template>
  <section>
    <h2>🚀 인기 밸런스</h2>
    <QuestionCard
      :question="question"
      v-for="question in data"
      :key="question.id"
    />
  </section>
</template>

<script setup lang="ts">
import QuestionCard from "~~/components/QuestionCard.vue";
import { symbols } from "~~/composables/services/symbols";

const { data } = inject(symbols.trendingQuestionsSvc)!;
</script>
