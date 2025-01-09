<template>
  <section class="popular-trip">
    <div class="popular-trip__container">
      <h2 class="popular-trip__title">Популярные туры</h2>
      <p class="popular-trip__description">Откройте для себя лучшие путешествия от&nbsp;прогулок по&nbsp;городу
        до&nbsp;приключений на&nbsp;природе.</p>

      <Swiper
        :height="430"
        :slidesPerView="'auto'"
        :spaceBetween="20"
        :loop="true"
        :centeredSlides="true"
      >
        <SwiperSlide
          v-for="(item, index) in dataSlider"
          :key="index"
        >
          <img
            class="popular-trip__card-image"
            :src="item.image"
            alt=""
          >
          <div class="popular-trip__card">
            <p class="popular-trip__card-title">{{ item.title }}</p>
            <p class="popular-trip__card-description">{{ item.description }}</p>
            <ul class="popular-trip__list-tags">
              <li
                class="popular-trip__item-tag"
                v-for="(tag, index) in item.tags"
                :key="index"
              >{{ tag }}</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperControls
          :direction="'horizontal'"
          class="popular-trip__controls"
        />
      </Swiper>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
import tokyoImage from '../public/images/tokyo-view.png';
import californiaImage from '../public/images/california-view.jpg';
import nevadaImage from '../public/images/nevada-view.png';
const dataSlider = ref([
  { title: 'Поездка в Токио', image: tokyoImage, description: 'Поездка в Токио - это увлекательное путешествие в один из самых динамичных мегаполисов мира', tags: ['Adventure', 'Solo travel', 'Relaxaction'] },
  { title: 'Поездка в Калифорнию', image: californiaImage, description: 'Поездка в Калифорнию — это увлекательное погружение в мир контрастов, где золотые пляжи соседствуют со снежными вершинами гор.', tags: ['Adventure', 'Solo travel', 'Relaxaction'] },
  { title: 'Поездка в Неваду', image: nevadaImage, description: 'Поездка в Неваду — это погружение в мир контрастов, где сияющие огни Лас-Вегаса соседствуют с величественным безмолвием пустыни.', tags: ['Adventure', 'Solo travel', 'Relaxaction'] },
  { title: 'Поездка в Токио', image: tokyoImage, description: 'Поездка в Токио - это увлекательное путешествие в один из самых динамичных мегаполисов мира', tags: ['Adventure', 'Solo travel', 'Relaxaction'] },
  { title: 'Поездка в Калифорнию', image: californiaImage, description: 'Поездка в Калифорнию — это увлекательное погружение в мир контрастов, где золотые пляжи соседствуют со снежными вершинами гор.', tags: ['Adventure', 'Solo travel', 'Relaxaction'] },
  { title: 'Поездка в Неваду', image: nevadaImage, description: 'Поездка в Неваду — это погружение в мир контрастов, где сияющие огни Лас-Вегаса соседствуют с величественным безмолвием пустыни.', tags: ['Adventure', 'Solo travel', 'Relaxaction'] }
])
</script>

<style lang="scss">
.popular-trip {

  &__container {
    max-width: 1440px;
    margin: 0 auto 100px auto;
  }

  &__title {
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 16px;
    padding: 0 96px;

    span {
      color: var(--color-accent);
    }
  }

  &__description {
    font-size: 18px;
    color: rgba(242, 244, 254, 0.65);
    margin-bottom: 32px;
    padding: 0 96px;
  }

  &__controls {
    width: fit-content;
    margin: 24px auto 0 auto;
  }

  &__card {
    position: absolute;
    bottom: 40px;
    padding: 0 26px;
  }

  &__card-image {
    width: 100%;
    height: 100%
  }

  &__card-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 6px
  }

  &__card-description {
    font-size: 18px;
    margin-bottom: 20px;
  }

  &__list-tags {
    display: flex;
    justify-content: space-between;
  }

  &__item-tag {
    padding: 4px 16px;
    background-color: rgba(255, 255, 255, 0.3);
    color: var(--color-light-primary);
    font-size: 14px;
    border-radius: 23px;
  }

  .swiper {
    margin: 0 auto;
  }

  .swiper-slide {
    width: 100%;
    height: 420px;
    max-width: 386px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .swiper-cards .swiper-slide {
    border-radius: 6px;
    border: 1px solid black;
  }
}
</style>