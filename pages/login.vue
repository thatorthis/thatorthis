<template>
  <div class="login-container">
    <div class="login-wrapper">
      <h1>밸런스 게임으로 친구를 알아가세요!</h1>
      <button @click="signInWith('google')" class="google-btn">
        <img
          src="~/assets/images/google-icon.svg"
          alt="google logo"
          class="google-logo"
        />
        <span class="google-btn-text">Google로 시작하기</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/services/auth";

definePageMeta({
  layout: "empty",
});

const authSvc = useAuth();

async function signInWith(provider: "google"): Promise<void> {
  await authSvc.signInWithOAuth({ provider });
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .login-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: $primary-contrast;
    font-size: 2.8rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 6.4rem;
  }
}
.google-btn {
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 0.4rem;
  background: $white;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0 4px 16px 0;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0 4px 16px 0;
    transform: translateY(-2px);
  }

  .google-logo {
    width: 2rem;
    height: 2rem;
  }

  .google-btn-text {
    margin-left: 1.2rem;
    text-align: center;
  }
}
</style>
