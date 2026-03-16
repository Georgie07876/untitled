<template>
  <div class="frame terminal">
    <div class="frame-header">
      <span class="path">project_info.exe</span>
    </div>
    <section class="terminal-content">
      <div class="info-block">
        <h3>[ PROJECT_INFO ]</h3>
        <p>A modular tool for data extraction and system monitoring.</p>
      </div>

      <button class="btn-execute">EXECUTE_PROJECT --open</button>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .terminal {
    flex: 1;
    min-height: 400px;
    border-radius: 2%;
    border: 1px solid gray;
  }

  .terminal-content {
    padding: 20px;
    font-family: $font-mono;

    h3 {
      color: $brand-blue;
      margin-bottom: 1rem;
    }

    p {
      color: rgba($color-white, 0.9);
      line-height: 1.6;
    }
  }

  .btn-execute {
    margin-top: 2rem;
    background: transparent;
    border: 1px solid $brand-blue;
    color: $brand-blue;
    padding: 10px 20px;
    font-family: $font-mono;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: $brand-blue;
      color: $bg-dark;
      box-shadow: 0 0 15px $brand-blue;
    }
  }
</style>
