```vue
<template>
  <div class="terminal-container">
    <div class="frame-header">
      <span class="path">project_info.exe</span>
    </div>
    <section class="terminal-content">
      <div class="info-block">
        <h3>[ PROJECT_INFO ]</h3>
        <p>
          A modular tool for data extraction and system monitoring. Optimized for high-latency
          environments and decentralized networks.
        </p>
      </div>

      <div class="specs-grid">
        <div class="spec-item">
          <span class="label">STATUS:</span>
          <span class="value">DEPLOYED</span>
        </div>
        <div class="spec-item">
          <span class="label">VERSION:</span>
          <span class="value">2.0.4-beta</span>
        </div>
        <div class="spec-item">
          <span class="label">ACCESS:</span>
          <span class="value">GRANTED</span>
        </div>
        <div class="spec-item">
          <span class="label">CORE:</span>
          <span class="value">NUXT_ENGINE</span>
        </div>
      </div>

      <div class="logs-container">
        <div class="log-entry">> Initializing neural network layers... [DONE]</div>
        <div class="log-entry">> Establishing secure tunnel to untitled_host...</div>
        <div class="log-entry active">> Streaming real-time data packets...</div>
      </div>

      <button class="btn-execute">EXECUTE_PROJECT --open</button>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .terminal-container {
    flex: 3;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;

    border: 1px solid rgba($brand-blue, 0.3);
    border-radius: 10px;
    background: rgba($bg-accent, 0.15);
    backdrop-filter: blur(8px);

    box-shadow:
      0 0 15px rgba($brand-blue, 0.15),
      inset 0 0 10px rgba($brand-blue, 0.1);
  }

  .frame-header {
    padding: 10px 15px;
    border-bottom: 1px solid rgba($brand-blue, 0.2);
    background: rgba($brand-blue, 0.05);

    .path {
      font-family: $font-mono;
      font-size: 0.8rem;
      color: $brand-blue;
      opacity: 0.8;
    }
  }

  .terminal-content {
    padding: 24px;
    font-family: $font-mono;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    h3 {
      color: $brand-blue;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    p {
      color: rgba($color-white, 0.8);
      font-size: 0.9rem;
      line-height: 1.4;
      max-width: 80%;
    }
  }

  .specs-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    border-top: 1px solid rgba($brand-blue, 0.1);
    padding-top: 20px;

    .spec-item {
      display: flex;
      gap: 10px;
      font-size: 0.8rem;

      .label {
        color: rgba($color-white, 0.4);
      }
      .value {
        color: $brand-blue;
      }
    }
  }

  .logs-container {
    background: rgba(0, 0, 0, 0.2);
    padding: 12px;
    border-radius: 4px;
    font-size: 0.75rem;
    color: rgba($brand-blue, 0.6);

    .log-entry {
      margin-bottom: 4px;

      &.active {
        color: $brand-blue;
        &::after {
          content: '';
          display: inline-block;
          width: 8px;
          height: 2px;
          background: $brand-blue;
          margin-left: 5px;
          animation: blink 1s infinite;
        }
      }
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .btn-execute {
    align-self: flex-start;
    margin-top: auto;
    border: 1px solid $brand-blue;
    color: $brand-blue;
    background: transparent;
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
