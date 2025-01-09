<template>
  <section class="ai-trip">
    <div class="ai-trip__container">
      <h2 class="ai-trip__title">Путешествуй
        с умным помощником</h2>

      <div class="ai-trip__description">
        <img
          src="../public/images/woman-yoga.png"
          alt="Женщина, занимающаяся йогой"
        >
        <span>Самое оптимальное</span>
        <p>Откройте лучшие варианты путешествий без лишних забот. Наш ИИ&nbsp;подбирает туры под ваши предпочтения,
          экономя время и&nbsp;делая каждую поездку идеальной.</p>
      </div>

      <div class="ai-trip__description">
        <span>Вдохновляйтесь</span>
        <p>Откройте новые идеи для путешествий и&nbsp;направления, о&nbsp;которых вы&nbsp;не&nbsp;задумывались. Наши
          рекомендации вдохновят вас на&nbsp;уникальные приключения по&nbsp;всему миру.
        </p>

        <div class="ai-trip__create">
          <img
            src="../public/images/decorative-green-circle.svg"
            alt=""
          >
          <img
            src="../public/images/decorative-pink-circle.svg"
            alt=""
          >
          <p>WanderLust поможет во всем этом</p>
          <nuxt-link to="/create-trip">
            Подобрать тур
            <span class="pi pi-arrow-up-right"></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style
  scoped
  lang="scss"
>
.ai-trip {

  &__container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    column-gap: 118px;
    padding: 0 96px;
    max-width: 1440px;
    margin: 0 auto 150px auto;
  }

  &__title {
    font-size: 72px;
    font-weight: 700;
    color: var(--color-light-primary);
    margin-bottom: 52px;
    grid-column: 1 / 3;

    span {
      color: var(--color-accent);
    }
  }

  &__description {
    img {
      margin-bottom: 40px;
      display: block;
    }

    span {
      display: block;
      font-size: 40px;
      font-weight: 600;
      color: var(--color-accent);
      margin-bottom: 16px;
    }

    p {
      font-size: 20px;
      color: var(--color-light-secondary);
      opacity: 80%;
    }
  }

  &__create {
    position: relative;
    background-color: var(--color-dark-primary);
    border-radius: 24px;
    padding: 127px 32px 30px 32px;
    margin-top: 58px;
    overflow: hidden;

    p {
      font-size: 48px;
      line-height: 52.8px;
      font-weight: 600;
      margin-bottom: 48px;
      color: var(--color-light-primary);
      opacity: 100%;
    }

    img {
      position: absolute;
      margin: 0;

      &:nth-child(1) {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        bottom: 0;
        right: 0;
      }
    }

    a {
      display: block;
      width: fit-content;
      background-color: var(--color-accent);
      padding: 19px 25px;
      color: var(--color-background);
      font-size: 17px;
      border-radius: 129px;

      span {
        display: inline;
        color: var(--color-background);
        font-size: 17px;
        margin-left: 6px;
      }
    }
  }
}
</style>