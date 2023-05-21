<template>
  <TrendingSection />
</template>

<script setup lang="ts">
import TrendingSection from "~~/components/TrendingSection.vue";
import {
  symbols,
  useTrendingQuestions,
  useVote,
} from "~~/composables/services";

const voteSvc = useVote();
const trendingQuestionsSvc = useTrendingQuestions();
provide(symbols.voteSvc, voteSvc);
provide(symbols.trendingQuestionsSvc, trendingQuestionsSvc);
</script>
