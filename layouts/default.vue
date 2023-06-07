<template>
  <div class="default-layout">
    <header class="default-layout__header">
      <div>
        <!-- Logo -->
      </div>
      <div class="default-layout__header__profile">
        <button
          v-if="authSvc.signInStatus.value === 'SIGNED_OUT'"
          @click="() => router.push('/login')"
        >
          로그인
        </button>
        <ProfileIcon @click="onIconClick" ref="profileIconEl" v-else />
        <ProfileMenu
          class="profile-menu"
          ref="profileMenuEl"
          v-if="menuOpen"
          @item-clicked="onItemClicked"
        />
      </div>
    </header>
    <div class="default-layout__content">
      <slot />
      <ModalsContainer />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import ProfileIcon from "~/components/ProfileIcon.vue";
import ProfileMenu from "~~/components/ProfileMenu.vue";
import { ModalsContainer } from "vue-final-modal";
import { symbols, useAuth } from "~~/composables/services";

const authSvc = useAuth();
const profileIconEl = ref<HTMLButtonElement | null>(null);
const profileMenuEl = ref<HTMLDivElement | null>(null);
const menuOpen = ref(false);
const router = useRouter();

provide(symbols.authSvc, authSvc);

onMounted(() => {
  authSvc.refetchUser();
});

onClickOutside(profileMenuEl, (event) => {
  menuOpen.value = false;
  event.stopPropagation();
});

function onIconClick() {
  menuOpen.value = !menuOpen.value;
}

async function onItemClicked(name: string) {
  if (name === "SIGN_OUT") {
    await authSvc.signOut();
    await router.push("/login");
  } else if (name === "MY_ACTIVITIES") {
    await router.push("/mypage");
  } else if (name === "CREATE_BALANCE") {
    await router.push("/create");
  }
  menuOpen.value = false;
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

  &__header__profile {
    z-index: 900;
  }
}
</style>
