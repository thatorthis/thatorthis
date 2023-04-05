<template>
  <button :class="['option-btn', { selected }]">
    <span>{{ props.option.option }}</span>
  </button>
</template>

<script setup lang="ts">
import { Option } from "~~/daos";
const props = defineProps<{
  option: Option;
  selected: boolean;
}>();
</script>

<style scoped lang="scss">
.option-btn {
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  background-color: $grey-100;
  text-align: left;
  cursor: pointer;
  color: $grey-800;

  &.selected {
    background-color: $primary;
    color: $primary-contrast;
  }
}
</style>
