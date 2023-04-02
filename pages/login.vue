<template>
  <h1>Index page</h1>
  <div class="google-signin">
    <button @click="signInWith('google')" class="google-btn">
      Google Sign In
    </button>
    <button class="signout-btn" @click="signOut">Sign Out</button>
  </div>
</template>

<script setup lang="ts">
import { symbols, useService } from "~/composables/use-service";
const service = useService(symbols.auth);

async function signInWith(provider: "google" | "facebook"): Promise<void> {
  await service.signInWithOAuth({ provider });
}

async function signOut(): Promise<void> {
  await service.signOut();
}
</script>

<style scoped>
.google-signin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.google-btn {
  background-color: #4285f4;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.signout-btn {
  background-color: #f44336;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}
</style>
