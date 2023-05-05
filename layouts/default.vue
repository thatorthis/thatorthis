<template>
  <div class="default-layout">
    <header class="default-layout__header">
      <div>
        <!-- Logo -->
      </div>
      <div class="default-layout__header__profile">
        <ProfileIcon @click="onIconClick" ref="profileIconEl" />
        <ProfileMenu
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
import { useService, symbols } from "~/composables/use-service";
import ProfileIcon from "~/components/ProfileIcon.vue";
import ProfileMenu from "~~/components/ProfileMenu.vue";
import { ModalsContainer } from "vue-final-modal";

const authService = useService(symbols.auth);
const profileIconEl = ref<HTMLButtonElement | null>(null);
const profileMenuEl = ref<HTMLDivElement | null>(null);
const menuOpen = ref(false);
const router = useRouter();

onMounted(() => {
  authService.refetchUser();
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
    await authService.signOut();
    await router.push("/login");
  } else if (name === "MY_ACTIVITIES") {
    await router.push("/mypage");
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
}
</style>
