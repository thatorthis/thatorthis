<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { provideDaos } from "./utils";
provideDaos();
</script>
