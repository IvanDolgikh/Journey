<template>
  <section
    class="trip-promo"
    :style="{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.imageUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <div class="trip-promo__container">
      <nuxt-link
        class="trip-promo__link-back"
        to="/create-trip"
      >
        <svg
          class="trip-promo__link-icon"
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
      </nuxt-link>

      <div class="trip-promo__title-container">
        <h2 class="trip-promo__title">{{ data.city }}</h2>
        <p class="trip-promo__description">{{ data.description }}</p>
      </div>

      <!-- <ul class="trip-promo__list-images">
        <li
          class="trip-promo__item-images"
          v-for="(item, index) in 5"
          ::key="index"
        >
          <button>
            <img
              src="../public/images/luvr-bg.png"
              alt=""
            >
          </button>
        </li>
      </ul> -->

      <div class="trip-promo__details-container">
        <div class="trip-promo__details">
          <nuxt-link to="/favourites">
            <img
              src="../public/icons/star.svg"
              alt=""
            >
          </nuxt-link>

          <button @click="isOpenCommentForm = !isOpenCommentForm">
            <img
              src="../public/icons/comment.svg"
              alt=""
            >
          </button>
        </div>

        <div class="trip-promo__details-switch">
          <button
            class="trip-promo__details-switch-button"
            :class="{ 'trip-promo__active-button': !props.isActiveTab }"
            @click="$emit('switchTabs')"
          >Общая информация</button>
          <button
            class="trip-promo__details-switch-button"
            :class="{ 'trip-promo__active-button': props.isActiveTab }"
            @click="$emit('switchTabs')"
          >План путешествия</button>
        </div>

        <div class="trip-promo__details">
          <button>
            <img
              src="../public/icons/share.svg"
              alt=""
            >
          </button>
          <button>
            <img
              src="../public/icons/file-download.svg"
              alt=""
            >
          </button>
        </div>
      </div>

      <Teleport to="body">
        <transition>
          <TripCommentForm
            v-if="isOpenCommentForm"
            :data="data"
            @close-modal="isOpenCommentForm = !isOpenCommentForm"
          />
        </transition>

      </Teleport>

    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
import type { ITripsList } from '@/types/trips'

const props = defineProps<{
  data: ITripsList
  isActiveTab: Boolean,
}>()
const emit = defineEmits(['switchTabs'])

const isOpenCommentForm = ref<boolean>(false)

</script>

<style
  scoped
  lang="scss"
>
.trip-promo {
  background-size: cover;
  background-repeat: no-repeat;

  &__container {

    max-width: 1440px;
    margin: 0 auto;
    padding: 150px 96px 40px 96px;
  }

  &__link-back {
    display: flex;
    column-gap: 10px;
    align-items: center;
    margin-bottom: 114px;

    span {
      font-size: 17px;
      color: var(--color-light-primary);
      font-weight: 500;
    }
  }

  &__link-icon {
    stroke: var(--color-light-primary);
  }

  &__title-container {
    width: 50%;
    margin: 0 auto 150px auto;
  }

  &__title {
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 20px;
  }

  &__list-images {
    display: flex;
    justify-content: center;
    column-gap: 6px;
    margin-bottom: 24px
  }

  &__item-images {
    button {
      width: 48px;
      height: 48px;
      background-color: transparent;
      border-radius: 8px;
      border: none;
      object-fit: cover;

      img {
        width: 48px;
        height: 48px;
        border-radius: 8px;
        object-fit: cover;
      }
    }
  }

  &__details-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 50px;
  }

  &__details {
    display: flex;
    column-gap: 12px;

    button,
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      border: none;
      background-color: rgba(242, 244, 254, 0.3);
      cursor: pointer;
    }
  }

  &__details-switch-button {
    position: relative;
    padding: 14px 56px;
    color: var(--color-light-primary);
    background-color: rgba(242, 244, 254, 0.3);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    transition: all 0.3s;
    z-index: 1;

    &:first-child {
      margin-right: -14px;
    }

  }

  &__active-button {
    background-color: var(--color-dark-primary);
    color: var(--color-light-primary);
    z-index: 100;
  }
}
</style>