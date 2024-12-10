<template>
  <div class="trip-info">
    <div class="trip-info__container">
      <h2 class="visually-hidden">Общая информация</h2>

      <div class="trip-info__layout">
        <TripInfoChat class="trip-info__chat" />

        <TripInfoWeather />

        <TripInfoBudget />

        <TripInfoAssessment />

        <div class="trip-info__map-container">
          <TripInfoMap class="trip-info__map" />
        </div>
      </div>



      <div class="trip-info__reviews">
        <h3 class="trip-info__reviews-title">Отзывы</h3>

        <div class="trip-info__rating-container">
          <p class="trip-info__rating">4.7</p>
          <Rating
            v-model="rating"
            readonly
          />
          <p class="trip-info__amount">52 оценки</p>
        </div>


        <Swiper
          :height="300"
          :slidesPerView="'auto'"
          :spaceBetween="20"
          :loop="true"
          :centeredSlides="true"
        >
          <SwiperSlide
            v-for="(item, index) in dataSlider"
            :key="index"
          >
            <div class="trip-info__card">
              <Rating
                class="trip-info__card-rating"
                v-model="item.rating"
                readonly
              />
              <p class="trip-info__card-review">{{ item.reviewText }}</p>
              <div class="trip-info__person-info-container">
                <img
                  class="trip-info__person-image"
                  src="../public/images/moc-person-review.png"
                  :alt="item.name"
                >
                <p class="trip-info__person-name">{{ item.name }}</p>
                <p class="trip-info__review-date">{{ item.reviewDate }}</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperControls
            :direction="'horizontal'"
            class="trip-info__controls"
          />
        </Swiper>

      </div>

    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
const rating = ref<number>(3)
const dataSlider = ref([
  { rating: 2, image: '../public/images/moc-person-review.png', reviewText: 'A trip to Tokyo is an exciting journey into one of the most dynamic megacities in the world', name: 'Виктория Костина', reviewDate: "24 октября" },
  { rating: 3, image: '../public/images/moc-person-review.png', reviewText: 'A trip to Tokyo is an exciting journey into one of the most dynamic megacities in the world', name: 'Виктория Костина', reviewDate: "24 октября" },
  { rating: 5, image: '../public/images/moc-person-review.png', reviewText: 'A trip to Tokyo is an exciting journey into one of the most dynamic megacities in the world', name: 'Виктория Костина', reviewDate: "24 октября" },
  { rating: 3, image: '../public/images/moc-person-review.png', reviewText: 'A trip to Tokyo is an exciting journey into one of the most dynamic megacities in the world', name: 'Виктория Костина', reviewDate: "24 октября" },
  { rating: 4, image: '../public/images/moc-person-review.png', reviewText: 'A trip to Tokyo is an exciting journey into one of the most dynamic megacities in the world', name: 'Виктория Костина', reviewDate: "24 октября" },
  { rating: 1, image: '../public/images/moc-person-review.png', reviewText: 'A trip to Tokyo is an exciting journey into one of the most dynamic megacities in the world', name: 'Виктория Костина', reviewDate: "24 октября" }
])
</script>

<style lang="scss">
.trip-info {

  &__layout {
    max-width: 1440px;
    margin: 0 auto 150px auto;
    padding: 0 96px;
    display: grid;
    gap: 24px;
    grid-template-columns: min-content 1fr 1fr 1fr;
    grid-template-rows: min-content 1fr;
  }

  &__chat {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  &__map-container {
    width: 100%;
    display: block;
    grid-column: 2 / 5;
    grid-row: 2;
  }

  &__reviews {
    max-width: 1440px;
    margin: 0 auto 150px auto;
  }

  &__reviews-title {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
    padding: 0 96px;
  }

  &__rating-container {
    display: flex;
    column-gap: 8px;
    align-items: center;
    margin-bottom: 16px;
    padding: 0 96px;
  }

  &__rating {
    font-size: 25px;
    font-weight: 600;
  }

  &__amount {
    font-size: 17px;
    opacity: 0.5;
  }

  &__controls {
    width: fit-content;
    margin: 24px auto 0 auto;
  }

  &__card {
    padding: 40px 24px;
    background-color: var(--color-dark-primary);
    border-radius: 24px;
  }

  &__card-rating {
    margin-bottom: 12px
  }

  &__card-review {
    font-size: 17px;
    font-weight: 300;
    margin-bottom: 16px;
  }

  &__person-info-container {
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 16px;
  }

  &__person-image {
    grid-row: 1 / 3;
    width: 72px;
    height: 72px;
    border-radius: 50%;
  }

  &__person-name {
    grid-column: 2;
    font-size: 20px;
    font-weight: 500;
    align-content: center;
  }

  &__review-date {
    grid-column: 2;
    font-size: 17px;
    font-weight: 300;
    opacity: 0.5;
  }

  .swiper {
    margin: 0 auto;
  }

  .swiper-slide {
    width: 100%;
    height: 300px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    transition: opacity 0.2s;
    ;
  }

  .swiper-slide-active {
    opacity: 1;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    opacity: 1;
  }

  .p-rating-icon,
  .p-rating-option-active .p-rating-icon {
    color: var(--color-accent)
  }
}
</style>