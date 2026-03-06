<template>
  <component
    :is="resolvedComponent"
    :to="to"
    :href="to"
    class="base-button"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
  // 1. Импортируем computed
  import { computed } from 'vue'

  interface Props {
    // Обычно называют во множественном числе
    to?: string
    external?: boolean
  }

  const props = defineProps<Props>()

  // 2. Обертываем логику в computed
  const resolvedComponent = computed(() => {
    return props.to ? 'NuxtLink' : 'button'
  })
</script>

<style lang="scss" scoped>
  .base-button {
    // 3. Без этих стилей кнопка-ссылка будет выглядеть как обычный синий текст
    background: none;
    border: none;
    color: inherit; // Наследует белый цвет
    text-decoration: none; // Убирает подчеркивание NuxtLink
    font-family: inherit; // Наследует JetBrains Mono
    cursor: pointer;
    padding: 0;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s ease;

    &:hover {
      // Твои эффекты при наведении
    }
  }
</style>
