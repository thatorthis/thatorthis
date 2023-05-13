<template>
  <input
    type="text"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    class="tot-input"
    @input="onInput"
    ref="input"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  placeholder?: string;
  modelValue?: string;
}>();
const input = ref<HTMLInputElement | null>(null);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}

function focus() {
  input.value?.focus();
}

defineExpose({
  focus,
});
</script>

<style lang="scss">
.tot-input {
  width: 100%;
  padding: 1.2rem 0.8rem;
  border: 1px solid $grey-300;
  border-radius: 0.4rem;
  font-size: 1.6rem;

  &:focus {
    outline: none;
    border-color: $grey-500;
  }
}
</style>
