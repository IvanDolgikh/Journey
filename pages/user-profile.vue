<template>
  <section class="user-profile">
    <div class="user-profile__container">
      <h2 class="visually-hidden">Личный кабинет пользователя</h2>
      <button
        class="user-profile__button-back"
        @click="$router.go(-1)"
      >
        <svg
          class="user-profile__button-icon"
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
      <p class="user-profile__title">Профиль</p>

      <div class="user-profile__info">
        <div class="user-profile__image-container">
          <img
            v-if="dataUser.avatarUrl"
            :src="dataUser.avatarUrl"
            :alt="dataUser.name"
          >
          <div
            v-else
            class="user-profile__spare-image"
          >
            <span class="pi pi-user"></span>
          </div>

          <label class="user-profile__label-change">
            <input
              type="file"
              class="visually-hidden"
              accept=".jpg, .png, .jpeg"
            >
            <span class="pi pi-camera"></span>
            </input>
          </label>

        </div>

        <p class="user-profile__name">{{ dataUser.name }}</p>
        <p class="user-profile__email">{{ dataUser.email }}</p>
      </div>

      <form class="user-profile__form">

        <label
          class="user-profile__label"
          :class="{ 'user-profile__label--filled': dataUser.name ? 'user-profile__label--filled' : '' }"
        >
          <span>Имя</span>
          <InputText
            id="name"
            type="text"
            v-model="dataUser.name"
            :value="dataUser.name"
          />
        </label>

        <label
          class="user-profile__label"
          :class="{ 'user-profile__label--filled': dataUser.surname ? 'user-profile__label--filled' : '' }"
        >
          <span>Фамилия</span>
          <InputText
            id="surname"
            type="text"
            v-model="dataUser.surname"
            :value="dataUser.surname"
          />
        </label>

        <label
          class="user-profile__label"
          :class="{ 'user-profile__label--filled': dataUser.email ? 'user-profile__label--filled' : '' }"
        >
          <span>Почта</span>
          <InputText
            id="email"
            type="text"
            v-model="dataUser.email"
            :value="dataUser.email"
          />
        </label>

        <!-- <label
          class="user-profile__label"
          :class="{ 'user-profile__label--filled': dataUser.password ? 'user-profile__label--filled' : '' }"
        >
          <span>Пароль</span>
          <InputText
            id="password"
            type="password"
            v-model="dataUser.password"
            :value="dataUser.password"
          />
        </label> -->

        <button class="user-profile__button-send">Сохранить изменения</button>
      </form>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
import { getData, baseUrl } from '@/api/api'
import type { IDataProfile } from '@/types/profile';

const dataUser = reactive<IDataProfile>({
  name: '',
  surname: '',
  email: '',
  avatarUrl: ''
})

onMounted(async () => {
  const url = `${baseUrl}/authentication/profile`
  const data: IDataProfile = await getData(url)
  dataUser.name = data.name
  dataUser.surname = data.surname
  dataUser.email = data.email
  dataUser.avatarUrl = data.avatarUrl
})

</script>

<style
  scoped
  lang="scss"
>
.user-profile {
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
    margin-bottom: 36px;
    cursor: pointer;
  }

  &__button-icon {
    stroke: var(--color-light-secondary);
  }

  &__title {
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(242, 244, 254, 0.6);
    margin-bottom: 40px;
  }

  &__info {
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 16px;
    margin-bottom: 16px;
    padding: 0 36px
  }

  &__image-container {
    position: relative;
    grid-column: 1;
    grid-row: 1 / 3;
  }

  &__spare-image {
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(117, 117, 117, 0.6);
    border-radius: 50%;

    span {
      font-size: 30px;
      color: var(--color-light-secondary);
    }
  }

  &__label-change {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--color-light-primary);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    span {
      font-size: 18px;
      color: var(--color-dark-primary);
    }
  }

  &__name {
    align-self: flex-end;
    font-size: 32px;
    font-weight: 500;
    color: var(--color-light-primary);
    margin-bottom: 8px;
  }

  &__email {
    font-size: 20px;
    color: var(--color-light-primary);
    opacity: 0.6;
  }

  &__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 52px 24px;
    width: 72%;
    margin: 0 auto
  }

  &__label {
    position: relative;
    width: fit-content;
    width: 100%;

    span {
      display: block;
      font-size: 20px;
      font-weight: 300;
      color: var(--color-light-secondary);
      opacity: 0.6;
      margin-bottom: 4px;
    }
  }

  .user-profile__label--filled::after {
    content: url(../public/icons/tick.svg);
    position: absolute;
    top: 50%;
    right: 10px;
    z-index: 100;
  }

  &__button-send {
    grid-column: 2;
    align-self: end;
    margin-left: auto;
    padding: 12px 20px;
    color: var(--color-dark-secondary);
    font-family: 'Geist', sans-serif;
    font-weight: 400;
    background-color: var(--color-light-secondary);
    opacity: 0.4;
    width: fit-content;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }

  .p-inputtext {
    position: relative;
    padding: 18px 16px;
    font-size: 24px;
    font-weight: 300;
    background-color: transparent;
    line-height: 1;
    width: 100%;
  }

  .p-inputtext:enabled:focus {
    border-color: var(--color-accent);
  }
}
</style>
