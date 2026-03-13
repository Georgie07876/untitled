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
  interface Props {
    to?: string
    external?: boolean
  }

  const props = defineProps<Props>()

  const resolvedComponent = computed(() => {
    return props.to ? 'NuxtLink' : 'button'
  })
</script>

<style lang="scss" scoped>
  .base-button {
    background: none;
    border: none;
    color: $brand-blue;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s ease;

    @media (max-width: 768px) {
      font-size: 0.875rem; // Чуть уменьшаем шрифт
      padding: 0.8rem; // Увеличиваем область нажатия (правило "жирного пальца")
      width: 100%; // Кнопка может растягиваться на всю ширину (опционально)
      justify-content: center;
    }

    &:hover {
      color: $brand-bl;
    }
  }
</style>
