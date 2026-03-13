<template>
  <div class="nav-container">
    <Divider class="nav-divider-layout" />
    <div class="father">
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
      <div class="other">
        <div class="other-date">
          <span>{{ dataUpdate }}</span>
        </div>
        <div class="other-text">
          <span>@UNTITLED_HOST</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Divider from '../base/Divider.vue'

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

  let time = ref(new Date())

  let timerId: number
  onMounted(() => {
    timerId = setInterval(() => {
      time.value = new Date()
    }, 1000)
  })
  const dataUpdate = computed(() => {
    return time.value.toLocaleTimeString()
  })

  onBeforeUnmount(() => clearInterval(timerId))
</script>

<style lang="scss" scoped>
  .nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .father {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 90%;
    margin: 1rem 0;

    @media (max-width: 785px) {
      flex-direction: column;
      gap: 1.5rem;
      align-items: flex-start;
    }
  }

  .nav-divider-layout {
    max-width: 90%;
    margin: 1rem 0;
  }
  .nav-divider {
    width: 100%;
    max-width: 90%;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1); // Мягкая белая линия
    margin: 1rem 0;
  }

  .nav-list {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    gap: 2rem;
    @media (max-width: 768px) {
      flex-direction: column; // Кнопки встают друг под другом
      gap: 0.5rem; // Уменьшаем расстояние между ними на мобилках
      width: 100%;
    }
  }

  .navbar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .other {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    white-space: nowrap;
    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      font-size: 0.8rem;
      width: 100%;
    }
  }

  .other-text {
    color: rgba(255, 255, 0, 0.775);
  }
</style>
