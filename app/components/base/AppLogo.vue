<template>
  <div class="logo">
    <h1 class="logo__name">UNTITLED</h1>
    <h2 class="logo__tagline">development studio</h2>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    width: 100%;
  }

  .logo__name {
    font-family: $font-mono;
    font-size: clamp(2rem, 10vw, 7rem);
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    color: $bg-dark;
    -webkit-text-stroke: 1px $brand-blue; // линия контура

    // СВЕЧЕНИЕ
    text-shadow:
      0 0 10px rgba($brand-blue, 0.6),
      0 0 20px rgba($brand-blue, 0.2);
  }

  .logo__tagline {
    font-family: $font-mono;
    font-size: clamp(0.8rem, 4vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: $color-white;
    opacity: 0.8;
    margin-top: 0.5rem;
    white-space: nowrap;
  }
</style>
