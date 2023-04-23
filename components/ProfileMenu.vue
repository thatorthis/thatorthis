<template>
  <div class="profile-menu">
    <div class="profile-menu__item">
      <button>😎 My Activities</button>
    </div>
    <div class="profile-menu__item">
      <button>👋 Sign Out</button>
    </div>
  </div>
</template>

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
    padding: 1.6rem 1.6rem;
    border-bottom: 1px solid $grey-200;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }

    button {
      width: 100%;
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
