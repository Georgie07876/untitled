<template>
  <div class="dashboard-container">
    <div class="dashboard-grid">
      <Explorer class="explorer-frame" />
      <Terminal class="terminal-frame" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Explorer from './Explorer.vue'
  import Terminal from './Terminal.vue'
</script>

<style lang="scss" scoped>
  .dashboard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
  }

  .dashboard-grid {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    max-width: 90%;
    @media (max-width: 400px) {
      flex-direction: column;
    }
  }
</style>
