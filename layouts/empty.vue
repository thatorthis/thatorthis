<template>
  <div class="empty-layout">
    <div class="empty-layout__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.empty-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 1.6rem 1.6rem;

  &__content {
    max-width: 76.8rem;
    width: 100%;
  }
}
</style>
