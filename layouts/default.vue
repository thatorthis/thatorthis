<template>
  <div class="default-layout">
    <header class="default-layout__header">
      <div>
        <!-- Logo -->
      </div>
      <div class="default-layout__header__profile">
        <ProfileIcon @click="onIconClick" ref="profileIconEl" />
        <ProfileMenu ref="profileMenuEl" v-if="menuOpen" />
      </div>
    </header>
    <div class="default-layout__content">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import ProfileIcon from "~/components/ProfileIcon.vue";
import ProfileMenu from "~~/components/ProfileMenu.vue";

const profileIconEl = ref<HTMLButtonElement | null>(null);
const profileMenuEl = ref<HTMLDivElement | null>(null);
const menuOpen = ref(false);

onClickOutside(profileMenuEl, (event) => {
  menuOpen.value = false;
  event.stopPropagation();
});

function onIconClick() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 1.6rem 1.6rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__content {
    max-width: 76.8rem;
    width: 100%;
  }
}
</style>
