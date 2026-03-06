<template>
  <div class="nav-container">
    <hr class="nav-divider" />
    <nav class="navbar">
      <ul class="nav-list">
        <li
          v-for="link in links"
          :key="link.to"
        >
          <BaseButton :to="link.to">
            {{ link.label }}
          </BaseButton>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    links?: NavLink[]
  }

  interface NavLink {
    label: string
    to: string
  }

  const props = withDefaults(defineProps<Props>(), {
    links: () => [
      { label: '[ ABOUT US ]', to: '#about' },
      { label: '[ SERVICES ]', to: '#services' },
      { label: '[ CONTACT ]', to: '#contact' }
    ]
  })
</script>

<style lang="scss" scoped>
  .nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .nav-divider {
    width: 100%;
    max-width: 90%;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1); // Мягкая белая линия
    margin: 1rem 0; // Отступы сверху и снизу от линии
  }

  .nav-list {
    display: flex; // Кнопки встают в ряд
    list-style: none; // Убираем точки
    padding: 0;
    margin: 0;
    gap: 2rem; // Расстояние между кнопками
  }

  .navbar {
    width: 90%;
    display: flex;
    justify-content: flex-start;
  }
</style>
