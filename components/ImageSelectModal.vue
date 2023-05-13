<template>
  <TotModal :modal-id="modalSymbols.IMAGE_SELECT_MODAL">
    <div class="image-select-modal">
      <TotInput
        placeholder="이미지 검색"
        :model-value="keyword"
        @update:model-value="onInput"
        ref="input"
      />
      <div class="image-select-modal__empty-image" v-if="images?.length === 0">
        <span>검색 결과가 없습니다.</span>
      </div>
      <div class="image-select-modal__image-grids" v-else>
        <div
          v-for="image in images"
          :key="image.url"
          @click="onImageClick(image)"
        >
          <img :src="image.url" :alt="image.alt" />
        </div>
      </div>
    </div>
  </TotModal>
</template>

<script setup lang="ts">
import TotInput from "./shares/TotInput.vue";
import TotModal from "./shares/TotModal.vue";
import { modalSymbols } from "~~/constants";
import { useService } from "~~/composables/use-service";
import { useDebounceFn } from "@vueuse/core";
import { Image } from "~~/daos";

const emit = defineEmits<{
  (e: "select", image: Image): void;
}>();

const keyword = ref("");
const input = ref<typeof TotInput | null>(null);
// @ts-ignore
const { images } = useService(symbols.searchImages, keyword);
const onInput = useDebounceFn((v) => {
  keyword.value = v;
}, 500);

onMounted(() => {
  input.value!.focus();
});

function onImageClick(image: Image) {
  emit("select", image);
}
</script>

<style lang="scss" scoped>
.image-select-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60rem;
  height: 80rem;
  padding: 1.6rem 0;

  &__empty-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: $grey-500;
  }

  &__image-grids {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.8rem;
    margin-top: 1.6rem;
    overflow: auto;

    img {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
