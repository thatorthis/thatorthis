<template>
  <div class="profile-menu">
    <div class="profile-menu__item">
      <button @click="onItemClicked('CREATE_BALANCE')">✍️ 밸런스 만들기</button>
    </div>
    <div class="profile-menu__item">
      <button @click="onItemClicked('MY_ACTIVITIES')">😎 마이페이지</button>
    </div>
    <div class="profile-menu__item">
      <button @click="onItemClicked('SIGN_OUT')">👋 로그아웃</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "item-clicked", name: string): void;
}>();

function onItemClicked(name: string) {
  emit("item-clicked", name);
}
</script>

<style scoped lang="scss">
.profile-menu {
  position: absolute;
  width: 30rem;
  background-color: #fff;
  box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.1);
  top: 6.4rem;
  right: 1.6rem;
  border-radius: 0.8rem;

  &__item {
    border-bottom: 1px solid $grey-200;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }

    button {
      width: 100%;
      padding: 1.6rem 1.6rem;
      text-align: left;
      color: #333;
    }
  }

  &__item:hover {
    background-color: $grey-100;
    overflow: hidden;
  }

  &__item:first-child:hover {
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
  }
  &__item:last-child:hover {
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
}
</style>
