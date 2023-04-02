<template>
  <button class="option-btn">
    <span>{{ props.option.option }}</span>
  </button>
</template>

<script setup lang="ts">
import { Option } from "~~/daos";
const props = defineProps<{
  option: Option;
}>();
</script>

<style scoped lang="scss">
.option-btn {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;
  cursor: pointer;
}
</style>
