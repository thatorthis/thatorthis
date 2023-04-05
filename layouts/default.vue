<template>
  <div class="default-layout">
    <div class="default-layout__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 1.6rem 1.6rem;

  &__content {
    max-width: 76.8rem;
    width: 100%;
  }
}
</style>
