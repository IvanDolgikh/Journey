<template>
  <section class="reviews">
    <div class="reviews__container">
      <div class="reviews__title-container">
        <h2>Клиенты <span>говорят</span></h2>
        <p><span>358+</span> Join us on this journey of reflection
          and anticipation, and here's to the countless adventures yet to unfold!</p>
      </div>

      <div>

      </div>

      <div class="reviews__slider">
        <Swiper
          ref="mySwiper"
          :height="640"
          :slidesPerView="'auto'"
          :spaceBetween="20"
          :direction="'vertical'"
          :loop="true"
          :centeredSlides="true"
        >
          <SwiperSlide
            v-for="(item, index) in clients"
            :key="index"
          >
            <div class="reviews__card-container">
              <div class="reviews__card-image">
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.name"
                  width="82"
                  height="82"
                >
                <div v-else>
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 19C18 16.7909 15.3137 15 12 15C8.68629 15 6 16.7909 6 19M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                </div>
              </div>
              <p class="reviews__card-name">{{ item.name }}</p>
              <p class="reviews__card-trips">{{ item.trips + " туров" }}</p>
            </div>
          </SwiperSlide>

          <SwiperControls
            :direction="'vertical'"
            class="reviews__controls"
          />
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>


const clients = ref([
  {
    name: 'Walter Stehr Sr.',
    trips: '2',
    text: 'I love how WanderLust finds unique places and activities that fit my interests and budget. It makes travel exciting and always feels personalized to my preferences, giving me great adventures every time'
  },
  {
    name: 'Pamela Crist',
    trips: '4',
    image: 'https://via.placeholder.com/150',
    text: 'I love how WanderLust finds unique places and activities that fit my interests and budget. It makes travel exciting and always feels personalized to my preferences, giving me great adventures every time'
  },
  {
    name: 'Jonathon Dare',
    trips: '16',
    image: 'https://via.placeholder.com/150',
    text: 'I love how WanderLust finds unique places and activities that fit my interests and budget. It makes travel exciting and always feels personalized to my preferences, giving me great adventures every time'
  },
  {
    name: 'Jeffrey Weber',
    trips: '8',
    image: 'https://via.placeholder.com/150',
    text: 'I love how WanderLust finds unique places and activities that fit my interests and budget. It makes travel exciting and always feels personalized to my preferences, giving me great adventures every time'
  },
  {
    name: 'Sophia Funk',
    trips: '22',
    image: 'https://via.placeholder.com/150',
    text: 'I love how WanderLust finds unique places and activities that fit my interests and budget. It makes travel exciting and always feels personalized to my preferences, giving me great adventures every time'
  },
  {
    name: 'Sophia Funk',
    trips: '22',
    image: 'https://via.placeholder.com/150',
    text: 'I love how WanderLust finds unique places and activities that fit my interests and budget. It makes travel exciting and always feels personalized to my preferences, giving me great adventures every time'
  },
  {
    name: 'Sophia Funk',
    trips: '22',
    image: 'https://via.placeholder.com/150',
    text: 'I love how WanderLust finds unique places and activities that fit my interests and budget. It makes travel exciting and always feels personalized to my preferences, giving me great adventures every time'
  }
]);

const mySwiper = ref(null);

onMounted(() => {
  console.log(mySwiper.value)
})
</script>


<style lang="scss">
.reviews {
  &__container {
    margin: 0 auto 150px auto;
    padding: 0 96px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    max-width: 1440px;
  }

  &__title-container {
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    margin-bottom: 5;

    h2 {
      font-size: 72px;
    }

    p {
      font-size: 25px;
      margin-top: 14px;

      span {
        font-size: 40px;
      }
    }

    span {

      font-weight: 500;
      color: var(--color-accent);
    }
  }

  &__card-container {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 8px 18px;
    padding: 12px;
    background-color: var(--color-dark-primary);
    border-radius: 24px;
    width: 100%;
  }

  &__card-image {
    grid-column: 1;
    grid-row: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    img {
      object-fit: cover;
      border-radius: 50%;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 82px;
      height: 82px;
      border-radius: 50%;
      background-color: gray;
    }
  }

  &__card-name {
    grid-column: 2;
    font-size: 24px;
    color: var(--color-light-secondary);
  }

  &__card-trips {
    grid-column: 2;
    font-size: 16px;
    color: var(--color-light-primary);
    background: rgba(255, 255, 255, 0.3);
    padding: 4px 16px;
    width: fit-content;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__slider {
    position: relative;
    height: 640px;
    width: 100%;
    overflow: hidden;
    grid-column: 2;
  }

  &__controls {
    top: 265px;
    right: 0;
    z-index: 1000;
    position: absolute;
  }

  .swiper-slide {
    width: 76%;
    height: auto;
    max-width: none;
    opacity: 20%;
    transform: translateX(50px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .swiper-slide-active {
    width: 86%;
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.3s ease, transform 0.3s ease;

    .reviews__card-container,
    .reviews__card-image {
      border: 1px solid var(--color-accent);
    }
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    width: 81%;
    opacity: 60%;
    transform: translateX(25px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

}
</style>
