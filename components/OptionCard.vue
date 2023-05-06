<template>
  <div :class="['option-card', { selected }]">
    <img
      :src="`https://picsum.photos/400?random=${Math.round(
        Math.random() * 10
      )}`"
      alt="option image"
    />
    <div class="text">
      <span>{{ props.option.option }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Option } from "~~/daos";
const props = defineProps<{
  option: Option;
  selected: boolean;
}>();
</script>

<style scoped lang="scss">
.option-card {
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;
  color: $grey-800;
  cursor: pointer;

  &.selected {
    background-color: $grey-200;

    .text {
      font-weight: bold;
    }
  }

  &:hover:not(.selected) {
    background-color: $grey-100;

    .text {
      font-weight: bold;
    }
  }

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .text {
    font-size: 1.6rem;
  }
}
</style>
