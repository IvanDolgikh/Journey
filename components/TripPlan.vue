<template>
  <section class="trip-plan">
    <div class="trip-plan__container">
      <h2 class="visually-hidden">План путешествия</h2>

      <nav class="trip-plan__nav">
        <ul class="trip-plan__nav-list">
          <li
            class="trip-plan__nav-item"
            v-for="(item, index) in amount"
            :key="index"
          >
            <a :href="`#${item}`">{{ item }}</a>
          </li>
        </ul>
      </nav>

      <ul class="trip-plan__list">
        <li
          class="trip-plan__item"
          v-for="(item, index) in amount"
          :key="index"
          :id="`${item}`"
        >
          <div class="trip-plan__item-details-container">
            <p class="trip-plan__item-days">{{ index + 1 }} день</p>
            <div></div>
            <p class="trip-plan__item-price">Стоимость: около <span>11</span>$</p>
            <button
              class="trip-plan__button-up"
              v-if="index === amount.length - 1"
              @click="goUp"
            >
              <svg
                class="trip-plan__button-up-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12L8 17M3 12L8 7M3 12H21"
                  stroke-width="2.34146"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

            </button>
          </div>

          <div class="trip-plan__item-info-container">
            <h3 class="trip-plan__item-title">Эйфелева башня </h3>
            <p class="trip-plan__item-description">Эйфелева башня&nbsp;&mdash; символ Парижа и&nbsp;одна из&nbsp;самых
              известных достопримечательностей
              в&nbsp;мире. Башня была построена в&nbsp;1889 году к&nbsp;Всемирной выставке. Со&nbsp;смотровой площадки
              на&nbsp;первом и&nbsp;втором уровнях башни открывается потрясающий вид на&nbsp;город, особенно
              в&nbsp;вечернее время
            </p>
            <img
              class="trip-plan__item-image"
              src="../public/images/moc-paris1.png"
              alt=""
            >
            <img
              class="trip-plan__item-image"
              src="../public/images/moc-paris2.png"
              alt=""
            >
          </div>
        </li>
      </ul>

      <div class="trip-plan__start-button-container">
        <button class="trip-plan__start-button">
          Отправится в тур
        </button>
      </div>

    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>

const amount: number[] = [1, 2, 3, 4, 5]

const goUp = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

</script>

<style
  scoped
  lang="scss"
>
.trip-plan {
  &__container {
    max-width: 1440px;
    margin: 0 auto 150px auto;
  }

  &__nav {
    position: sticky;
    top: 0;
    margin-left: auto;
    margin-bottom: -10%;
    margin: 0 0 -10% auto;
    padding-left: 16px;
    width: fit-content;
    border-left: 1px solid var(--color-light-secondary);
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  &__nav-item {
    a {
      font-size: 16px;
      color: var(--color-light-secondary);
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 150px;
    padding: 0 96px;
    margin-bottom: 100px;
  }

  &__item {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 66px;
  }

  &__item-details-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      position: absolute;
      top: 10%;
      bottom: 0;
      width: 1%;
      background-color: var(--color-light-primary);
    }
  }

  &__item-days {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  &__item-price {
    margin-left: 12px;
    font-size: 24px;

    span {
      color: var(--color-accent);
    }
  }

  &__item-info-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  &__item-title {
    grid-column: 1 / 3;
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 12px
  }

  &__item-description {
    grid-column: 1 / 3;
    font-size: 18px;
    margin-bottom: 12px
  }

  &__start-button-container {
    position: relative;
  }

  &__button-up {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--color-accent);
    background-color: transparent;
    margin-left: -70px;
    cursor: pointer;
  }

  &__button-up-icon {
    stroke: var(--color-light-primary);
    transform: rotate(90deg);
  }

  &__start-button {
    display: block;
    padding: 17px 62px;
    background-color: var(--color-accent);
    color: var(--color-dark-secondary);
    border-radius: 8px;
    font-family: 'Geist', sans-serif;
    font-size: 17px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin: 0 auto;

    &::before {
      content: "";
      position: absolute;
      height: 1px;
      background-color: var(--color-light-primary);
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 36%;
    }

    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background-color: var(--color-light-primary);
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 36%;
    }
  }
}
</style>