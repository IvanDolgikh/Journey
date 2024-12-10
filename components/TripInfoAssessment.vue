<template>
  <div class="trip-assessment">
    <div class="trip-assessment__container">
      <div class="trip-assessment__title-container">
        <div class="trip-assessment__icon-container">
          <img
            src="../public/icons/heart.svg"
            alt=""
          />
        </div>
        <p>Оценки пользователей</p>
      </div>

      <div class="trip-assessment__assessment">
        <div
          class="trip-assessment__item"
          :class="{ 'trip-assessment__1': determineRating(0, 1) }"
        >
          <p
            class="trip-assessment__item-text"
            v-if="determineRating(0, 1)"
          >{{ rating }}</p>
        </div>
        <div
          class="trip-assessment__item"
          :class="{ 'trip-assessment__2': determineRating(1, 2) }"
        >
          <p
            class="trip-assessment__item-text"
            v-if="determineRating(1, 2)"
          >{{ rating }}</p>
        </div>
        <div
          class="trip-assessment__item"
          :class="{ 'trip-assessment__3': determineRating(2, 3) }"
        >
          <p
            class="trip-assessment__item-text"
            v-if="determineRating(2, 3)"
          >{{ rating }}</p>
        </div>
        <div
          class="trip-assessment__item"
          :class="{ 'trip-assessment__4': determineRating(3, 4) }"
        >
          <p
            class="trip-assessment__item-text"
            v-if="determineRating(3, 4)"
          >{{ rating }}</p>
        </div>
        <div
          class="trip-assessment__item"
          :class="{ 'trip-assessment__5': determineRating(4, 5) }"
        >
          <p
            class="trip-assessment__item-text"
            v-if="determineRating(4, 5)"
          >{{ rating }}</p>
        </div>
      </div>

      <p class="trip-assessment__description">Рейтинг</p>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>

const rating = 5



const determineRating = (min: number, max: number): boolean => {
  return rating > min && rating <= max;
}
</script>

<style
  scoped
  lang="scss"
>
.trip-assessment {
  &__container {
    position: relative;
    background-color: var(--color-light-secondary);
    border-radius: 24px;
    width: 100%;
    height: 100%;
    width: fit-content;
  }

  &__title-container {
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding: 18px 18px 0 18px;
    margin-bottom: 74px;

    p {
      font-size: 17px;
      font-weight: 500;
      color: var(--color-dark-secondary);
    }
  }

  &__icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    min-height: 40px;
    background-color: var(--color-dark-secondary);
    border-radius: 50%;
  }

  &__assessment {
    display: flex;
    align-items: end;
    justify-content: center;
    column-gap: 4px;
    padding: 0 31px;
  }

  &__item {
    position: relative;
    background: linear-gradient(0deg, #F2F4FE 10%, rgba(190, 190, 190, 0.39) 100%);
    border-radius: 4px 4px 0 0;

    &:nth-child(1) {
      height: 20px;
      width: 36px;
    }

    &:nth-child(2) {
      height: 40px;
      width: 36px;
    }

    &:nth-child(3) {
      height: 60px;
      width: 36px;
    }

    &:nth-child(4) {
      height: 80px;
      width: 36px;
    }

    &:nth-child(5) {
      height: 100px;
      width: 36px;
    }
  }

  &__item-text {
    position: absolute;
    top: -60px;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: var(--color-dark-secondary);

    &::after {
      content: "";
      position: absolute;
      bottom: -16px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 3px;
      height: 16px;
      border-radius: 3px;
    }
  }

  &__1 {
    background: rgba(239, 40, 40, 1);
  }

  &__2 {
    background: rgba(241, 118, 73, 1);
  }

  &__3 {
    background: rgba(244, 210, 20, 1);
  }

  &__4 {
    background: rgba(91, 150, 9, 1);
  }

  &__5 {
    background: rgba(9, 150, 96, 1);
  }

  .trip-assessment__1 .trip-assessment__item-text::after {
    background: rgba(239, 40, 40, 1);
  }

  .trip-assessment__2 .trip-assessment__item-text::after {
    background: rgba(241, 118, 73, 1);
  }

  .trip-assessment__3 .trip-assessment__item-text::after {
    background: rgba(244, 210, 20, 1);
  }

  .trip-assessment__4 .trip-assessment__item-text::after {
    background: rgba(91, 150, 9, 1);
  }

  .trip-assessment__5 .trip-assessment__item-text::after {
    background: rgba(9, 150, 96, 1);
  }

  &__description {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 10px;
    text-align: center;
    font-size: 17px;
    color: rgba(26, 23, 28, 1);
  }
}
</style>