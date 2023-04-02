<template>
  <div v-for="question in data" :key="question.id">
    <p>{{ question.question }}</p>
    <div v-for="option in question.options">
      <input type="radio" :value="option.id" />
      <label>{{ option.option }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useService, symbols } from "~/composables/use-service";

const { data } = useService(symbols.question);
</script>
