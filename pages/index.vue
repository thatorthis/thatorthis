<template>
  <h1>Index page</h1>
</template>

<script setup lang="ts">
import { symbols, useService } from "~/composables/use-service";

const service = useService(symbols.auth, "MIKO");
</script>
