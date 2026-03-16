<template>
  <div class="frame explorer">
    <div class="frame-header">
      <span class="path">~/projects/explorer</span>
    </div>
    <section class="project-list">
      <ul>
        <li class="active">/home/untitled/project_01</li>
        <li>/home/untitled/project_02</li>
        <li>/home/untitled/project_03</li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .explorer {
    flex: 0 0 320px;
    border: 1px solid gray;
    border-radius: 2%;
  }

  .project-list {
    padding: 15px;

    ul {
      list-style: none;

      li {
        font-family: $font-mono;
        font-size: 0.9rem;
        color: rgba($color-white, 0.7);
        padding: 6px 10px;
        cursor: pointer;
        transition: all 0.2s ease;

        &.active,
        &:hover {
          background: rgba($brand-blue, 0.1);
          color: $brand-blue;
        }
      }
    }
  }
</style>
