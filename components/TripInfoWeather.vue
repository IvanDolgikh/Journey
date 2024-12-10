<template>
  <div class="trip-weather">
    <div class="trip-weather__container">
      <div class="trip-weather__title-container">
        <div class="trip-weather__icon-container">
          <img
            src="../public/icons/sun.svg"
            alt=""
          />
        </div>
        <p>Погода</p>
      </div>

      <img
        class="trip-weather__image"
        src="../public/icons/sun-big.svg"
        alt=""
      >

      <p
        class="trip-weather__degree"
        v-if="data"
      >{{ data.current.dewpoint_c }}<span>℃</span></p>
      <p class="trip-weather__description">Солнечно</p>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
const city: string = 'London'

const apiKey: string = '4fa846e5e7f1495d817173857230611'

interface WeatherData {
  current: {
    dewpoint_c: number;
  };
}

const { data } = await useFetch<WeatherData>(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`, {
  pick: ['current'],
  method: 'get',
})

console.log(
  'aaaaaa'
)


onMounted(() => {
  if (data.value) {
    console.log(data.value.current);
  }
});
</script>

<style
  scoped
  lang="scss"
>
.trip-weather {
  &__container {
    position: relative;
    background-color: var(--color-light-secondary);
    border-radius: 24px;
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

  &__image {
    width: 100%;
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

  &__degree {
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