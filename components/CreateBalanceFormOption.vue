<template>
  <div class="option">
    <h3>선택지 {{ props.number }}</h3>
    <TotInput
      :placeholder="`${koreanOrder} 선택지를 입력하세요`"
      :value="modelValue.title"
      @update:model-value="onInput"
    />
    <div class="preview-image">
      <img :src="image.url" :alt="image.alt" v-if="image" />
      <button class="image-placeholder" v-else @click="openImageSelectModal">
        <span>클릭하여 이미지를 추가해주세요</span>
        <input type="file" accept="image/*" class="image-input" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useModal } from "vue-final-modal";

import TotInput from "./shares/TotInput.vue";
import ImageSelectModal from "~/modals/ImageSelectModal.vue";
import { Image } from "~~/apis";

interface ModelValue {
  title: string;
  image: Image | null;
}

const props = defineProps<{
  number: 1 | 2;
  modelValue: ModelValue;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: ModelValue): void;
}>();

const modal = useModal({
  component: ImageSelectModal,
  attrs: {
    onSelect: (image: Image) => {
      emit("update:modelValue", {
        ...props.modelValue,
        image,
      });
      modal.close();
    },
  },
});

const koreanOrder = computed(() => {
  if (props.number === 1) {
    return "첫번째";
  } else {
    return "두번째";
  }
});

const image = computed(() => props.modelValue.image);

function openImageSelectModal() {
  modal.open();
}

function onInput(title: string) {
  emit("update:modelValue", {
    ...props.modelValue,
    title,
  });
}
</script>

<style lang="scss" scoped>
.preview-image {
  width: 100%;
  margin: 1.6rem 0;
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
