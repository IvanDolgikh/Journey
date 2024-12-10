<template>
  <div class="trip-budget">
    <div class="trip-budget__container">

      <div class="trip-budget__title-container">
        <div class="trip-budget__icon-container">
          <img
            src="../public/icons/dollar-circle.svg"
            alt=""
          />
        </div>
        <p>Бюджет</p>
      </div>

      <img
        class="trip-budget__image"
        src="../public/icons/dollar-big.svg"
        alt=""
      >

      <p class="trip-budget__price"><span>$</span>400</p>
      <p class="trip-budget__description">На весь тур</p>

    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
</script>


<style
  scoped
  lang="scss"
>
.trip-budget {
  &__container {
    position: relative;
    background-color: var(--color-light-secondary);
    border-radius: 24px;
    width: fit-content;
    height: 100%;
    width: 100%;
  }

  &__title-container {
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding: 18px 18px 0 18px;
    margin-bottom: 8px;

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
    width: 40px;
    height: 40px;
    background-color: var(--color-dark-secondary);
    border-radius: 50%;
  }

  &__image {
    padding: 0 31px;
  }

  &__price {
    position: absolute;
    display: block;
    bottom: 30px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 72px;
    font-weight: 500;
    color: rgba(34, 38, 41, 1);


    span {
      font-size: 24px;
    }
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