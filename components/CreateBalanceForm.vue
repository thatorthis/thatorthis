<template>
  <TotShadowCard class="create-card">
    <form @submit.prevent>
      <h2>나만의 밸런스 만들기</h2>
      <h3>질문</h3>
      <TotInput placeholder="질문을 입력하세요" />
      <FormOption :number="1" class="option-input" v-model="option1" />
      <FormOption :number="2" class="option-input" v-model="option2" />
      <button>만들고 공유하기</button>
    </form>
  </TotShadowCard>
</template>

<script setup lang="ts">
import TotShadowCard from "~~/components/shares/TotShadowCard.vue";
import TotInput from "./shares/TotInput.vue";
import FormOption from "~~/components/CreateBalanceFormOption.vue";

const option1 = ref({
  title: "",
  image: null,
});
const option2 = ref({
  title: "",
  image: null,
});
</script>

<style lang="scss" scoped>
.create-card {
  margin-top: 1.6rem;

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
</style>
