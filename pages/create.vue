<template>
  <TotShadowCard class="create-card">
    <h2>나만의 밸런스 만들기</h2>
    <h3>질문</h3>
    <input type="text" placeholder="질문을 입력하세요" class="text-input" />
    <div class="option">
      <h3>선택지 1</h3>
      <input
        type="text"
        placeholder="첫번째 선택지를 입력하세요"
        class="text-input"
      />
      <div class="preview-image">
        <img src="https://picsum.photos/400?random=1" alt="preview" />
      </div>
      <input type="file" accept="image/*" class="image-input" />
    </div>
    <div class="option">
      <h3>선택지 2</h3>
      <input
        type="text"
        placeholder="두번째 선택지를 입력하세요"
        class="text-input"
      />
      <div class="preview-image">
        <img src="https://picsum.photos/400?random=1" alt="preview" />
      </div>
      <input type="file" accept="image/*" class="image-input" />
    </div>
    <button>만들고 공유하기</button>
  </TotShadowCard>
</template>
<script setup lang="ts">
import TotShadowCard from "~~/components/shares/TotShadowCard.vue";
</script>

<style lang="scss" scoped>
.create-card {
  margin-top: 1.6rem;
  .text-input {
    width: 100%;
    padding: 1.6rem 0.8rem;
    border: 1px solid $grey-300;
    border-radius: 0.4rem;
    font-size: 1.6rem;
  }

  .text-input:focus {
    outline: none;
    border-color: $primary-contrast;
  }

  .option {
    margin-bottom: 1.6rem;
  }

  button {
    width: 100%;
    padding: 1.6rem;
    border: none;
    border-radius: 0.4rem;
    background-color: $primary-contrast;
    color: $white;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
  }
}

.option {
  .preview-image {
    width: 100%;
    padding: 1.6rem 0;
    aspect-ratio: 16/9;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .image-input {
    display: none;
  }
}
</style>
