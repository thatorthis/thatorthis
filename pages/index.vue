<template>
  <QuestionCard
    :question="question"
    v-for="question in data"
    :key="question.id"
  />
</template>

<script setup lang="ts">
import { useService, symbols } from "~/composables/use-service";
import QuestionCard from "~~/components/QuestionCard.vue";

const { data } = useService(symbols.trendingQuestions);
</script>
