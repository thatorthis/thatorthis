<template>
  <div class="default-layout">
    <header class="default-layout__header">
      <div>
        <!-- Logo -->
      </div>
      <div class="default-layout__header__profile">
        <profile-icon />
      </div>
    </header>
    <div class="default-layout__content">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import ProfileIcon from "~/components/ProfileIcon.vue";
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
