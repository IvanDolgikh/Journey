<template>
  <section class="features">
    <div class="features__container">
      <div class="features__title-container">
        <h2>Почему<br>WanderLust</h2>
        <p>?</p>
      </div>

      <div class="features__col-1">
        <img
          class="features__image"
          src="../public/images/long-road.png"
          alt="Long road."
        >
        <div class="features__description-container">
          <p>Все в одном месте</p>
          <span>Получите лучшие предложения на полный туристический пакет.</span>
        </div>

        <!-- <div class="features__text">
          <p>WanderLust offers you more than just a&nbsp;travel search engine.
            Our AI-driven platform analyzes your preferences to&nbsp;provide tailored trip suggestions, from
            destinations to&nbsp;activities. </p>
          <p>Save time with curated recommendations, enjoy personalized itineraries, and discover hidden gems you might
            never have found on&nbsp;your own.</p>
          <p>Whether you&rsquo;re seeking adventure, relaxation, or&nbsp;cultural exploration</p>
        </div> -->
      </div>

      <div class="features__col-2">
        <img
          class="features__image"
          src="../public/images/road-van.png"
          alt="Van on road."
        >

        <div class="features__description-container">
          <p>Оптимальное планирование маршрутов</p>
          <span>Наш ИИ подбирает маршруты, соответствующие вашим интересам и стилю путешествия.</span>
        </div>
      </div>

      <div class="features__col-3">
        <img
          class="features__image"
          src="../public/images/man-in-airport.png"
          alt="Man in airport."
        >

        <div class="features__description-container">
          <p>Персонализируйте свои туры</p>
          <span>Настройте своё путешествие, свободно добавляя, редактируя или удаляя активности.</span>
        </div>
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
.features {
  &__container {
    display: grid;
    grid-template-rows: min-content auto;
    grid-template-columns: repeat(3, auto);
    column-gap: 40px;
    max-width: 1440px;
    margin: 0 auto 100px auto;
    padding: 0 96px;
  }

  &__title-container {
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    column-gap: 54px;
    margin-bottom: 38px;

    h2 {
      font-size: 72px;
    }

    p {
      color: var(--color-accent);
      font-size: 140px;
      font-weight: 600;
    }
  }

  &__col-1,
  &__col-2,
  &__col-3 {
    grid-row: 2;
    width: min-content;
  }

  &__image {
    grid-column: 1;
    margin-bottom: 16px;
  }

  &__description-container {
    grid-column: 1;
    grid-row: 2;

    p {
      font-size: 20px;
      margin-bottom: 4px;
    }

    span {
      font-size: 17px;
      font-weight: 200;
      color: var(--color-light-secondary);
      opacity: 0.7;
    }
  }

  &__text {
    grid-column: 2;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    margin-left: 22px;

    p {
      font-size: 18px;
      font-weight: 300;
    }
  }
}
</style>
