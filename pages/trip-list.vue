<template>
  <section class="trips">
    <div class="trips__container">
      <h2 class="visually-hidden">Туры</h2>
      <div class="trips__filters">

        <button
          class="trips__button-filter"
          @click="isSortOpen = !isSortOpen"
        >
          <svg
            class="trips__button-filter-icon"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6.1001C20 5.54005 19.9996 5.25981 19.8906 5.0459C19.7948 4.85774 19.6423 4.70487 19.4542 4.60899C19.2403 4.5 18.9597 4.5 18.3996 4.5H5.59961C5.03956 4.5 4.75981 4.5 4.5459 4.60899C4.35774 4.70487 4.20487 4.85774 4.10899 5.0459C4 5.25981 4 5.54005 4 6.1001V6.83736C4 7.08195 4 7.20433 4.02763 7.31942C4.05213 7.42146 4.09263 7.51893 4.14746 7.6084C4.20928 7.70928 4.29591 7.79591 4.46875 7.96875L9.53149 13.0315C9.70443 13.2044 9.79044 13.2904 9.85228 13.3914C9.90711 13.4808 9.94816 13.5786 9.97266 13.6807C10 13.7946 10 13.9155 10 14.1552V18.911C10 19.7682 10 20.1971 10.1805 20.4552C10.3382 20.6806 10.5814 20.831 10.8535 20.8712C11.1651 20.9172 11.5487 20.7257 12.3154 20.3424L13.1154 19.9424C13.4365 19.7819 13.5966 19.7013 13.7139 19.5815C13.8176 19.4756 13.897 19.3485 13.9453 19.2084C14 19.0499 14 18.87 14 18.511V14.1626C14 13.918 14 13.7958 14.0276 13.6807C14.0521 13.5786 14.0926 13.4808 14.1475 13.3914C14.2089 13.2911 14.2947 13.2053 14.4653 13.0347L14.4688 13.0315L19.5315 7.96875C19.7044 7.7958 19.7904 7.70932 19.8523 7.6084C19.9071 7.51893 19.9482 7.42146 19.9727 7.31942C20 7.20551 20 7.08444 20 6.8448V6.1001Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Фильтр</span>
        </button>

        <TripListSort
          v-if="isSortOpen && tripsStore.trips"
          class="trips__filter"
          :data="tripsStore.trips"
          @update-data="updateData"
        />

        <p class="trips__findings">Найдено {{ tripsStore.trips?.length }} туров</p>

        <button
          class="trips__button-filter"
          @click="isFilterOpen = !isFilterOpen"
        >Изменить параметры</button>

        <Teleport to="body">
          <TripListFilter
            v-if="isFilterOpen"
            @update-filter="updateFilter"
            @close-filter="isFilterOpen = !isFilterOpen"
          />
        </Teleport>


      </div>

      <ul class="trips__list">
        <li
          class="trips__item"
          v-for="(item, index) in tripsStore.trips"
          :key="index"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${item.imageUrl})`,
            backgroundSize: 'cover'
          }"
        >
          <nuxt-link
            class="trips__link-container"
            event=""
            :to="{ name: 'trip-id', params: { id: item.id } }"
          >

            <div class="trips__item-title-container">
              <p>{{ item.city }}</p>
              <button @click.prevent="saveFavorite(item.id, index)">
                <svg
                  class="trips__icon-favorite"
                  :class="{ 'trips__icon-favorite--active': isFavorite[index] }"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

              </button>
            </div>

            <div class="trips__item-location">
              <img
                src="../public/icons/map-pin.svg"
                alt=""
              >
              <p>{{ item.country }}</p>
            </div>

            <div class="trips__item-details">
              <p>${{ item.price }}</p>
              <p>
                <svg
                  class="trips__icon-favorite"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>{{ parseFloat(item.averageRating.toFixed(1)) }}/5</span>
              </p>
            </div>

            <!-- <div class="trips__list-tags">
              <span
                v-for="(tag, index) in item.tags"
                :key="index"
              >{{ tag }}</span>
            </div> -->
          </nuxt-link>
        </li>
      </ul>

      <button class="trips__button-more">
        <span>Показать еще</span>
        <img
          src="../public/icons/redo.svg"
          alt=""
        >
      </button>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import { baseUrl, sendData } from '@/api/api'
import type { ITripsList } from '@/types/trips'

const tripsStore = useTripsStore()

const isFilterOpen = ref<boolean>(false)
const isSortOpen = ref<boolean>(false)


const isFavorite = ref<boolean[]>([]);

const saveFavorite = async (id: string, index: number): Promise<void> => {
  const url = `${baseUrl}/trips/${id}/favorites`
  isFavorite.value[index] = !isFavorite.value[index]
  await sendData(url, id)
}

const updateData = (data: ITripsList[]) => {
  return data
}

const updateFilter = (data: ITripsList[]) => {

  return data
}

onMounted(async () => {
  isFavorite.value = Array(tripsStore.trips?.length).fill(false)
})

</script>

<style
  scoped
  lang="scss"
>
.trips {
  flex: auto;
  flex-grow: 1;
  display: flex;

  &__container {
    max-width: 1440px;
    width: 100%;
    margin: 10% auto 0 auto;
    padding: 0 96px;
  }

  &__filters {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-bottom: 12px;
    margin-bottom: 100px;
    border-bottom: 1px solid rgba(242, 244, 254, 0.4);
  }

  &__button-filter {
    display: flex;
    column-gap: 6px;
    padding: 0;
    align-items: center;
    background-color: transparent;
    border: none;
    transition: 0.2s;
    cursor: pointer;

    span {
      font-size: 24px;
      font-weight: 500;
    }

    &:hover,
    &:active {
      color: var(--color-accent);
    }

    &:focus-visible {
      outline: none;
    }
  }

  &__button-filter-icon {
    stroke: var(--color-light-secondary);
    transition: 0.2s;
  }

  &__button-filter:hover .trips__button-filter-icon {
    stroke: var(--color-accent);
  }

  &__filter {
    position: absolute;
    top: 68px;
    left: 0;
    z-index: 100;
  }

  &__findings {
    font-size: 40px;
    font-weight: 600;
  }

  &__button-filter {
    background-color: transparent;
    border: none;
    font-size: 24px;
    font-weight: 500;
    transition: 0.2s;

    &:hover,
    &:active {
      color: var(--color-accent);
    }

    &:focus-visible {
      outline: none;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 72px;
  }

  &__item {
    position: relative;
    max-width: 294px;
    width: 100%;
    border-radius: 24px;
    padding: 20px 18px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('../public/images/moc-paris-list.png');
    background-size: cover;
    background-repeat: no-repeat;

    &::after {
      content: url(../public/icons/decorative-item-trip-list.svg);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: fit-content;
    }
  }

  &__item-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 3px;

    p {
      font-size: 26px;
      font-weight: 600;
      color: var(--color-light-primary);
    }

    button {
      width: 35px;
      height: 35px;
      background-color: rgba(242, 244, 254, 0.3);
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }
  }

  &__icon-favorite {
    fill: none;
    stroke: var(--color-light-secondary);
  }

  &__icon-favorite--active {
    fill: var(--color-light-secondary);
  }

  &__item-location {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    p {
      font-size: 13px;
      font-weight: 300;
      color: var(--color-light-primary);
    }
  }

  &__item-details {
    display: flex;
    align-items: center;
    column-gap: 6px;
    margin-bottom: 127px;

    p {
      display: flex;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.3);
      color: var(--color-light-primary);
      border-radius: 6px;
      font-size: 11px;
      font-weight: 300;
      padding: 3px 9px;
      line-height: 14px;

    }

    span {
      margin-left: 6px;
    }
  }


  &__list-tags {
    display: flex;
    justify-content: space-between;

    span {
      padding: 3px 11px;
      background-color: rgba(255, 255, 255, 0.3);
      color: var(--color-light-primary);
      font-size: 12px;
      font-weight: 300;
      border-radius: 23px;
    }
  }

  &__button-more {
    display: flex;
    align-items: center;
    column-gap: 8px;
    font-size: 23px;
    font-weight: 600;
    padding: 20px;
    border: none;
    border-radius: 8px;
    background-color: var(--color-dark-secondary);
    margin: 0 auto 150px auto;
    cursor: pointer;
  }

}
</style>