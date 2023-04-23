<template>
  <!-- Profile Icon -->
  <button class="profile-icon" @click="onClick">
    <img src="~/assets/images/meerkat-profile.png" alt="Profile Icon" />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "click", $event: MouseEvent | TouchEvent): void;
}>();

function onClick($event: MouseEvent | TouchEvent) {
  emit("click", $event);
}
</script>

<style lang="scss" scoped>
.profile-icon {
  img {
    width: 4rem;
    border-radius: 100%;
    object-fit: cover;
  }
}
</style>
