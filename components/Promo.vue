<template>
  <section class="promo">
    <div class="promo__container">
      <h1 class="visually-hidden">WanderLust: Your AI Travel Companion</h1>
      <p class="promo__row-1">Perfect <span>Travel</span></p>
      <p class="promo__row-2">For <span>You</span></p>
      <p class="promo__row-3">with <span>AI</span> Technology</p>
      <p class="promo__row-4">Create your personalized travel experience.</p>

      <div class="promo__buttons-container">
        <NuxtLink
          to="/create-trip"
          class="promo__button-create-trip"
        >
          <span>Create new trip</span>
          <svg
            class="promo__button-icon"
            width="39"
            height="38"
            viewBox="0 0 39 38"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5278 9.09424H18.5212M29.5278 9.09424L29.5272 20.1014M29.5278 9.09424L9.71484 28.9072"
              stroke="#222629"
              stroke-width="3.1133"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>

    </div>
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
.promo {
  background-image: url("../public/images/promo-background.png");
  background-repeat: no-repeat;
  background-size: cover;

  &__container {
    margin: 0 auto 84px auto;
    padding: 16% 182px 0 182px;
    height: 100vh;
    max-width: 1440px;
  }

  &__row-1,
  &__row-2,
  &__row-3 {
    font-size: 72px;
    font-weight: 600;
    color: var(--color-light-primary);

    span {
      color: var(--color-accent);
    }
  }

  &__row-2 {
    margin-left: 26%;
  }

  &__row-3 {
    margin-left: 38%;
    margin-bottom: 18px;

    span {
      color: rgba(248, 212, 254, 1);
    }
  }

  &__row-4 {
    text-align: center;
    font-size: 22px;
    color: var(--color-light-secondary);
    margin-bottom: 42px;
  }

  &__buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
  }

  &__button-create-trip {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    border: none;
    border-radius: 129px;
    background-color: var(--color-accent);
    width: 100%;
    max-width: 28%;
    padding: 22px 28px;
    cursor: pointer;

    span {
      font-size: 22px;
      color: var(--color-dark-primary);
    }
  }

  &__button-icon {
    fill: var(--color-dark-primary);
    width: 24px;
    height: 24px
  }

  &__button-try-manual {
    border: 1px solid rgba(242, 244, 254, 0.2);
    border-radius: 129px;
    background-color: rgba(242, 244, 254, 0.2);
    font-size: 17px;
    color: var(--color-light-secondary);
    padding: 18px 24px;
  }

}
</style>