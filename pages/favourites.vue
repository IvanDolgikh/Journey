<template>
  <section class="favourites">
    <div class="favourites__container">
      <button
        class="favourites__button-back"
        @click="$router.go(-1)"
      >
        <svg
          class="favourites__button-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12L8 17M3 12L8 7M3 12H21"
            stroke-width="2.34146"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Назад</span>
      </button>

      <div class="favourites__title-container">
        <h2>Избранное</h2>

        <label class="favourites__choice-label">
          <Checkbox
            v-model="selectAll"
            binary
          />
          <span>Выбрать все</span>
        </label>

        <button
          class="favourites__button-delete"
          @click="removeTrip()"
        >
          <span
            v-if="isSelectedItem"
            class="pi pi-trash"
          ></span>
        </button>
      </div>

      <ul class="favourites__list">
        <li
          class="favourites__item"
          :style="{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${item.imageUrl})`,
          backgroundSize: 'cover'
        }"
          v-for="(item, index) in data"
          :key="index"
        >
          <Checkbox
            class="favourites__checkbox"
            v-model="item.selected"
            binary
          />

          <label>
            <div class="favourites__item-title-container">
              <p class="favourites__item-city">{{ item.city }}</p>
              <div class="favourites__item-details">
                <p>${{ item.price }}</p>
                <p>
                  <img
                    src="../public/icons/star.svg"
                    alt=""
                    width="12"
                    height="12"
                  >
                  <span>{{ item.averageRating }}/5</span>
                </p>
              </div>
            </div>

            <div class="favourites__item-country">
              <img
                src="../public/icons/map-pin.svg"
                alt=""
              >
              <p>{{ item.country }}</p>
            </div>

            <p class="favourites__description">{{ item.description }}</p>

            <!-- <div class="favourites__list-tags">
              <span v-for="(tag, index) in item.tags">{{ tag }}</span>
            </div> -->
          </label>
        </li>
      </ul>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>

import type { ITripsList } from '@/types/trips'
import { getData, baseUrl } from '@/api/api'

const data = ref<ITripsList[]>()
const selectAll = ref<boolean>(false);

const isSelectedItem = computed(() => data.value?.some(item => item.selected))


watch(selectAll, (newValue) => {
  data.value?.forEach(item => {
    return item.selected = newValue
  });
});

const getFavorites = async (): Promise<ITripsList[]> => {
  const url = `${baseUrl}/trips/favorites`
  const data: ITripsList[] = await getData(url)
  return data
}


const removeTrip = async () => {
  const url: string = `${baseUrl}/trips/favorites`
  let removeArr: string[] = []

  if (data.value) {
    removeArr = data.value.filter(item => {
      if (item.selected) {
        return item.id
      }
    }).map(item => item.id)
  }

  try {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(removeArr)
    })

    data.value = await getFavorites()
  }
  catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  data.value = await getFavorites()
})
</script>

<style lang="scss">
.favourites {
  &__container {
    max-width: 1440px;
    width: 100%;
    margin: 10% auto 100px auto;
    padding: 0 96px;
  }

  &__button-back {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    column-gap: 8px;
    color: var(--color-light-secondary);
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 40px;
    cursor: pointer;
  }

  &__button-icon {
    stroke: var(--color-light-secondary);
  }

  &__title-container {
    display: grid;
    grid-template-columns: 1fr auto auto;
    padding-bottom: 12px;
    margin-bottom: 40px;
    border-bottom: 1px solid var(--color-light-secondary);

    h2 {
      font-size: 40px;
      font-weight: 600;
    }
  }

  &__button-delete {
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      font-size: 20px;
      color: var(--color-light-secondary);
    }
  }

  &__choice-label {
    margin-left: auto;
    margin-right: 30px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: fit-content;

    span {
      font-size: 24px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 26px 24px;
  }

  &__item {
    position: relative;
    padding: 16px 12px 20px 12px;
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 12px;
    border-radius: 8px;
    max-width: 610px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;

    &::after {
      content: url(../public/icons/decorative-item-trip-list.svg);
      transform: rotate(90deg);
      position: absolute;
      top: 0;
      bottom: 0;
      right: -24px;
      height: fit-content;
      margin: auto 0;

    }
  }

  &__checkbox {
    grid-column: 1;
  }

  &__item-title-container {
    grid-column: 2;
    display: flex;
    align-items: center;
    column-gap: 16px;
    margin-bottom: 8px;
  }

  &__item-city {
    font-size: 27px;
    font-weight: 600;
    line-height: 1;
  }

  &__item-details {
    display: flex;
    align-items: center;
    column-gap: 6px;

    img {
      margin-right: 6px;
    }

    p {
      display: flex;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.3);
      color: var(--color-light-primary);
      border-radius: 6px;
      font-size: 12px;
      line-height: 1;
      font-weight: 300;
      padding: 4px 9px;
    }
  }

  &__item-country {
    grid-column: 2;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    p {
      font-size: 13px;
      font-weight: 300;
      color: var(--color-light-primary);
    }
  }

  &__description {
    grid-column: 2;
    font-size: 14px;
    margin-bottom: 28px;
  }

  &__list-tags {
    grid-column: 2;
    display: flex;
    column-gap: 12px;

    span {
      padding: 3px 11px;
      background-color: rgba(255, 255, 255, 0.3);
      color: var(--color-light-primary);
      font-size: 12px;
      font-weight: 300;
      border-radius: 23px;
    }
  }

  .p-checkbox-checked .p-checkbox-box {
    border-color: var(--color-accent);
    background: var(--color-accent);
  }
}
</style>