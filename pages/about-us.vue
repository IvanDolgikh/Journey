<template>
  <section class="about">

    <div class="about__container">
      <img
        class="about__circle-image-1"
        src="../public/images/ellipse-1.svg"
        alt=""
      >
      <img
        class="about__circle-image-2"
        src="../public/images/ellipse-2.svg"
        alt=""
      >

      <img
        class="about__shadow-image-1"
        src="../public/images/shadow-circle.png"
        alt=""
      >
      <div class="about__promo">
        <div class="about__promo-container">
          <h1>О нас</h1>
          <p>Wanderlust</p>
          <span>Мы&nbsp;создаём путь к&nbsp;уникальным путешествиям, чтобы каждый мог открывать для себя мир
            и&nbsp;вдохновляться.</span>

          <img
            class="about__promo-image"
            src="../public/images/circle-with-airplane.png"
            alt=""
          >

          <img
            class="about__image-down"
            src="../public/icons/long-arrow-down.svg"
            alt=""
          >
        </div>
      </div>


      <div class="about__aim">
        <div class="about__aim-container">
          <p class="about__aim-title">Наша цель</p>
          <p class="about__aim-title">& наше виденье</p>
          <p class="about__aim-description"><span>WanderLust</span> создан для тех, кто жаждет новых открытий
            и&nbsp;вдохновляющих путешествий. Наша <span>цель&nbsp;&mdash;</span> облегчить поиск <span>идеальных</span>
            мест для отдыха, от&nbsp;популярных направлений до&nbsp;скрытых уголков, которые захватывают дух.</p>
          <div class="about__aim-images">
            <img
              src="../public/images/woman-lake.png"
              alt=""
            >
            <img
              src="../public/images/mountain.png"
              alt=""
            >
            <img
              src="../public/images/plane.png"
              alt=""
            >
            <img
              src="../public/images/beach.png"
              alt=""
            >
            <img
              src="../public/images/woman-in-pool.png"
              alt=""
            >
          </div>

          <img
            class="about__image-down"
            src="../public/icons/long-arrow-down.svg"
            alt=""
          >

          <div class="about__aim-decorative"></div>
        </div>
      </div>

      <div class="about__technologies">
        <div class="about__technologies-container">
          <p class="about__technologies-title">Идеальное путешествие</p>
          <p class="about__technologies-title">с умными технологиями</p>

          <div class="about__technologies-description">
            <div class="about__technologies-description-1">
              <p>WanderLust не&nbsp;просто ищет места для отдыха&nbsp;&mdash; мы&nbsp;создаём для вас идеальное
                путешествие.</p>
              <img
                src="../public/images/technology-1.png"
                alt=""
              >
              <img
                src="../public/images/technology-2.png"
                alt=""
              >
            </div>

            <div class="about__technologies-description-2">
              <img
                src="../public/images/technology-vivi.png"
                alt=""
              >
              <p>Мы используем современные технологии</p>
            </div>

            <div class="about__technologies-description-3">
              <img
                src="../public/images/technology-3.png"
                alt=""
              >
              <img
                src="../public/images/technology-4.png"
                alt=""
              >
              <p>Нейросеть найдёт для вас лучшие отели, рестораны и&nbsp;достопримечательности по&nbsp;вашим
                предпочтениям.</p>
            </div>
          </div>
        </div>

        <img
          class="about__image-down"
          src="../public/icons/long-arrow-down.svg"
          alt=""
        >

      </div>



      <div class="about__join">
        <div class="about__join-container">
          <p class="about__join-title">Присоединяйтесь</p>
          <p class="about__join-title">к WanderLust</p>

          <nuxt-link
            class="about__join-link"
            to="/create-trip"
          >
            Найти путешествие
          </nuxt-link>

          <p class="about__join-text">Позвольте нам помочь вам<br>
            Открыть для себя<br>
            <span>Мир по-новому!</span>
          </p>

          <img
            class="about__circle-image-3"
            src="../public/images/ellipse-3.svg"
            alt=""
          >

          <img
            class="about__circle-image-4"
            src="../public/images/ellipse-4.svg"
            alt=""
          >
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
.about {


  &__circle-image-1 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    user-select: none;
  }

  &__circle-image-2 {
    position: absolute;
    top: 0;
    left: 3%;
    user-select: none;
  }

  &__circle-image-3,
  &__circle-image-4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  &__shadow-image-1 {
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;
  }

  &__promo-container {
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 20px;
    position: relative;
    max-width: 1440px;
    padding: 16% 96px 0 96px;
    margin: 0 auto;

    h1 {
      grid-column: 1;
      font-size: 140px;
      color: var(--color-accent);
      font-weight: 500;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: -8px;
      margin-bottom: 20px;
    }

    p {
      grid-column: 1;
      font-size: 110px;
      line-height: 1;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: -8px;

      margin-bottom: 30px;
    }

    span {
      grid-column: 1;
      display: block;

      margin-left: 12%;
      margin: 0 0 170px 12%;
      font-size: 24px;
      color: var(--color-light-secondary);
    }
  }

  &__promo-image {
    display: flex;
    border-radius: 50%;
    position: relative;
    grid-column: 2;
    grid-row: 1 / 4;
    justify-self: end;
    box-shadow: 4px 4px 100px 0px rgba(147, 223, 93, 0.2);
  }

  &__image-down {
    display: block;
    margin: 0 auto 100px auto;
    grid-column: 1 / 3;
  }

  &__aim-container,
  &__technologies-container,
  &__join-container {
    position: relative;
    max-width: 1440px;
    margin: 0 auto 100px auto;
    padding: 0 96px;
  }

  &__join-container {
    padding: 175px 96px 200px 96px;
  }

  &__aim-title,
  &__technologies-title,
  &__join-title {
    position: relative;
    display: block;
    width: fit-content;
    font-size: 110px;
    line-height: 1;
    font-weight: 500;
    z-index: 100;
  }

  &__aim-title:nth-child(2) {
    margin-left: auto;
    margin: 0 0 30px auto;
  }

  &__technologies-title:nth-child(2),
  &__join-title:nth-child(2) {
    margin-left: auto;
    margin: 0 0 50px auto;
  }

  &__technologies-title,
  &__join-title {
    font-size: 80px;
  }

  &__aim-description {
    font-size: 24px;
    margin-left: auto;
    max-width: 60%;
    margin: 0 0 0 auto;

    span {
      color: var(--color-accent);
    }
  }

  &__aim-decorative {
    position: absolute;
    top: 56%;
    width: 70px;
    border-radius: 50%;
    box-shadow: 0px 0px 100px 100px rgba(248, 212, 254, 0.1);
  }

  &__aim-images {
    margin-bottom: 100px;
    display: flex;
    column-gap: 8px
  }

  &__technologies-description {
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 100px;
    justify-content: center;
    margin-bottom: 100px;
  }

  &__technologies-description-1,
  &__technologies-description-3 {
    display: grid;
    column-gap: 12px;
    grid-template-rows: min-content 1fr;
    grid-template-columns: repeat(2, auto);

    p {
      grid-column: 1 / 3;
      font-size: 18px;
      color: var(--color-light-secondary);
    }

    img {
      align-self: end;
    }
  }

  &__technologies-description-2 {

    p {
      font-size: 22px;
    }

    img {
      margin-bottom: 8px;
    }
  }

  &__technologies-description-3 {
    img {
      align-self: start;
    }

    p {
      align-self: end;
    }
  }

  &__join-link {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-dark-primary);
    font-size: 34px;
    font-weight: 500;
    text-align: center;
    width: 268px;
    height: 268px;
    border-radius: 50%;
    background-color: var(--color-accent);
    margin: 0 auto 52px auto;
    box-shadow: 0px 0px 100px 100px rgba(231, 254, 85, 0.1);
    z-index: 1;
  }

  &__join-text {
    position: relative;
    font-size: 34px;
    text-align: center;
    line-height: 1.4;
    z-index: 1;

    span {
      color: var(--color-accent);
    }
  }
}
</style>