<template>
  <div class="dashboard-container">
    <div class="dashboard-grid">
      <Explorer />
      <Terminal />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Explorer from './Explorer.vue'
  import Terminal from './Terminal.vue'
</script>

<style lang="scss" scoped>
  .dashboard-container {
    width: 90%;
    padding: 0 20px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .dashboard-grid {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
    max-width: 1200px;
    @media (max-width: 400px) {
      flex-direction: column;
    }
  }
</style>
