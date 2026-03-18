<template>
  <div class="explorer-container">
    <div class="frame-header">
      <img
        src="~/assets/img/open-folder.svg"
        alt=""
      />
      <span class="path">~/projects/explorer</span>
    </div>
    <section class="project-list">
      <ul>
        <li>
          <img
            src="~/assets/img/file.svg"
            alt=""
          />
          <span>/home/untitled/project_01</span>
        </li>
        <li>
          <img
            src="~/assets/img/file.svg"
            alt=""
          />
          <span>/home/untitled/project_02</span>
        </li>
        <li>
          <img
            src="~/assets/img/file.svg"
            alt=""
          />
          <span>/home/untitled/project_02</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .explorer-container {
    flex: 1.5;
    width: 100%;
    height: 50vh;
    border: 1px solid rgba($brand-blue, 0.3);
    border-radius: 10px;
    background: rgba($bg-accent, 0.1);
    backdrop-filter: blur(5px);
    box-shadow:
      0 0 15px rgba($brand-blue, 0.15),
      inset 0 0 10px rgba($brand-blue, 0.1);
    background: rgba($bg-accent, 0.15);
    backdrop-filter: blur(8px);
  }

  .project-list {
    padding: 15px;

    ul {
      list-style: none;
      padding: 0; // Убираем дефолтные отступы списка
      margin: 0;

      li {
        font-family: $font-mono;
        font-size: 0.9rem;
        color: rgba($color-white, 0.7);
        padding: 8px 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px; // Чтобы фон при наведении был аккуратным

        // 1. ВКЛЮЧАЕМ FLEX ДЛЯ ВЫРАВНИВАНИЯ
        display: flex;
        align-items: center; // Выравнивание по центру высоты
        gap: 12px; // РАССТОЯНИЕ МЕЖДУ ИКОНКОЙ И ТЕКСТОМ

        img {
          // 2. НАСТРОЙКА РАЗМЕРА ИКОНКИ
          width: 18px;
          height: 18px;
          object-fit: contain; // Чтобы иконка не деформировалась
          opacity: 0.8; // Чуть приглушаем, чтобы не светилась ярче текста
        }

        &:hover {
          background: rgba($brand-blue, 0.1);
          color: $brand-blue;

          img {
            opacity: 1; // Делаем иконку ярче при наведении
            // Если хочешь подсветить саму иконку:
            filter: drop-shadow(0 0 5px rgba($brand-blue, 0.5));
          }
        }
      }
    }
  }
</style>
<style lang="scss" scoped>
  .explorer-container {
    flex: 1.5;
    width: 100%;
    height: 50vh;
    border: 1px solid rgba($brand-blue, 0.3);
    border-radius: 10px;
    background: rgba($bg-accent, 0.15);
    backdrop-filter: blur(8px);
    box-shadow:
      0 0 15px rgba($brand-blue, 0.15),
      inset 0 0 10px rgba($brand-blue, 0.1);
    display: flex;
    flex-direction: column;
  }

  .frame-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    border-bottom: 1px solid rgba($brand-blue, 0.2);
    background: rgba($brand-blue, 0.05);

    img {
      width: 18px;
      height: 18px;
      filter: invert(48%) sepia(79%) saturate(452%) hue-rotate(146%) brightness(91%) contrast(89%);
    }

    .path {
      font-family: $font-mono;
      font-size: 0.8rem;
      color: $brand-blue;
    }
  }

  .project-list {
    padding: 15px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-family: $font-mono;
        font-size: 0.9rem;
        color: rgba($color-white, 0.7);
        padding: 8px 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;

        display: flex;
        align-items: center;
        gap: 12px;

        img {
          width: 18px;
          height: 18px;
          object-fit: contain;
          opacity: 0.8;
          filter: brightness(0) invert(1);
        }

        &.active,
        &:hover {
          background: rgba($brand-blue, 0.1);
          color: $brand-blue;

          img {
            opacity: 1;
            filter: invert(48%) sepia(79%) saturate(452%) hue-rotate(146%) brightness(91%)
              contrast(89%) drop-shadow(0 0 5px rgba($brand-blue, 0.5));
          }
        }
      }
    }
  }
</style>
