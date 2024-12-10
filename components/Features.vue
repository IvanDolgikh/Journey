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
          <p>All thing in&nbsp;one place</p>
          <span>Get the best deals on complete trip package</span>
        </div>

        <div class="features__text">
          <p>WanderLust offers you more than just a&nbsp;travel search engine.
            Our AI-driven platform analyzes your preferences to&nbsp;provide tailored trip suggestions, from
            destinations to&nbsp;activities. </p>
          <p>Save time with curated recommendations, enjoy personalized itineraries, and discover hidden gems you might
            never have found on&nbsp;your own.</p>
          <p>Whether you&rsquo;re seeking adventure, relaxation, or&nbsp;cultural exploration</p>
        </div>
      </div>

      <div class="features__col-2">
        <img
          class="features__image"
          src="../public/images/road-van.png"
          alt="Van on road."
        >

        <div class="features__description-container">
          <p>Optimal Route Planning</p>
          <span>Our AI&nbsp;selects itineraries tailored to&nbsp;your interests and travel style.</span>
        </div>
      </div>

      <div class="features__col-3">
        <img
          class="features__image"
          src="../public/images/man-in-airport.png"
          alt="Man in airport."
        >

        <div class="features__description-container">
          <p>Personalized Your tours </p>
          <span>Shape your journey by&nbsp;freely adding, editing, or&nbsp;deleting activities</span>
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
    grid-template-columns: auto min-content min-content;
    column-gap: 18px;
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

  &__col-1 {
    grid-row: 2;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-auto-rows: minmax(min-content, 1fr);
  }

  &__col-2,
  &__col-3 {
    grid-row: 2;
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
