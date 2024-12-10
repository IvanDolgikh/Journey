<template>
  <section class="travel-package">
    <div class="travel-package__container">
      <h2 class="travel-package__title"><span>5</span> Steps to Your perfect <span>Travel</span> package</h2>

      <ul class="travel-package__list">
        <li class="travel-package__item">
          <img
            src="../public/icons/planet.svg"
            alt=""
          >
          <p>Country</p>
        </li>

        <li class="travel-package__item">
          <img
            src="../public/icons/dollar-sign.svg"
            alt=""
          >
          <p>Budget</p>
        </li>

        <li class="travel-package__item">
          <img
            src="../public/icons/lol.svg"
            alt=""
          >
          <p>Travel style</p>
        </li>

        <li class="travel-package__item">
          <img
            src="../public/icons/calendar.svg"
            alt=""
          >
          <p>Travel data</p>
        </li>
      </ul>

      <nuxt-link
        class="travel-package__button-create"
        to="/create-trip"
      >
        <span>Create new trip</span>
        <img
          src="../public/icons/arrow-up-right.svg"
          alt=""
        >
      </nuxt-link>

      <div class="travel-package__result">
        <img
          src="../public/icons/pipe.svg"
          alt=""
        >

        <p>242 result based on needs</p>

        <nuxt-link to="">
          <img
            src="../public/images/new-york-card.png"
            alt=""
          >
        </nuxt-link>
      </div>
    </div>

    <nuxt-view></nuxt-view>
  </section>

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
.travel-package {
  &__container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    column-gap: 40px;
    padding: 0 96px;
    margin: 0 auto 150px auto;
    max-width: 1440px;
  }

  &__title {
    grid-column: 1 / 3;
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 52px;

    span {
      color: var(--color-accent);
    }
  }

  &__list {
    grid-column: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 26px 40px;
    margin-bottom: 118px;
  }

  &__item {
    background-color: var(--color-dark-primary);
    border-radius: 24px;
    padding: 32px 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 32px;
    max-height: 107px;


    img {
      width: 36px;
      height: 36px;
    }

    p {
      font-size: 32px;
      font-weight: 500;
      color: var(--color-light-primary);
    }
  }

  &__button-create {
    display: flex;
    align-items: center;
    grid-column: 1;
    grid-row: 3;
    padding: 28px 36px;
    background-color: var(--color-accent);
    color: var(--color-dark-primary);
    font-size: 32px;
    width: fit-content;
    height: fit-content;
    border-radius: 200px;
    margin: 0 auto;

    img {
      width: 36px;
      height: 36px;
    }
  }

  &__result {
    grid-column: 2;
    grid-row: 2 / 4;
    padding: 30px 50px 36px 36px;
    background-color: var(--color-accent);
    border-radius: 22px;

    img {
      margin-bottom: 14px;
    }

    p {
      font-size: 36px;
      color: var(--color-dark-secondary);
      margin-bottom: 14px
    }

    a {
      img {
        margin: 0;
      }
    }
  }
}
</style>