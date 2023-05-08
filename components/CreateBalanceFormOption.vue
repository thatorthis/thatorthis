<template>
  <div class="option">
    <h3>선택지 {{ number }}</h3>
    <TotInput :placeholder="`${koreanOrder} 선택지를 입력하세요`" />
    <div class="preview-image">
      <img
        src="https://picsum.photos/seed/picsum/200/300"
        alt="preview"
        v-if="image"
      />
      <button class="image-placeholder" v-else>
        <span>클릭하여 이미지를 추가해주세요</span>
        <input type="file" accept="image/*" class="image-input" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TotInput from "./shares/TotInput.vue";

const props = defineProps<{
  number: 1 | 2;
  image?: string | null;
}>();

const koreanOrder = computed(() => {
  if (props.number === 1) {
    return "첫번째";
  } else {
    return "두번째";
  }
});
</script>

<style lang="scss" scoped>
.preview-image {
  width: 100%;
  margin-top: 1.6rem;
  padding: 1.6rem 0;
  aspect-ratio: 16/9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-color: $grey-100;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $grey-600;
  border-radius: 0.4rem;
  padding: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: $grey-200;
  }
}

.image-input {
  display: none;
}
</style>
