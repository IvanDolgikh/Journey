<template>
  <div class="registration">
    <div class="registration__container">
      <img
        class="registration__logo"
        src="../public/icons/logo.svg"
        alt="Логотип"
        width="250"
        height="64"
      >
      <h1 class="registration__title">Регистрация</h1>

      <form
        class="registration__form"
        action="post"
      >
        <label class="registration__label">
          <input
            type="text"
            name="Name"
            placeholder="Имя"
            v-model="data.name"
            :class="{ 'registration__full-field': !isFocused && data.name }"
            @focus="isFocused = true"
            @blur="isFocused = false"
          >
        </label>
        <label class="registration__label">
          <input
            type="text"
            name="Surname"
            v-model="data.surname"
            :class="{ 'registration__full-field': !isFocused && data.surname }"
            placeholder="Фамилия"
          >
        </label>
        <label class="registration__label">
          <input
            type="text"
            name="Email"
            placeholder="example@mail.com"
            v-model="data.email"
            :class="{ 'registration__full-field': !isFocused && data.email }"
          >
        </label>
        <label class="registration__label">
          <Password
            v-model="data.password"
            :class="{ 'registration__full-field': !isFocused && data.password }"
            promptLabel="Choose a password"
            weakLabel="Слишком короткий пароль"
            mediumLabel="Слабый пароль"
            strongLabel="Надежный пароль"
            toggleMask
            placeholder="Введите пароль"
          />
        </label>


        <button
          type="submit"
          class="registration__send-button"
          @click.prevent="signUp"
        >
          <span>Продолжить</span>
          <span class="pi pi-arrow-right"></span>
        </button>

        <p class="registration__agreement">
          Регистрируясь, вы соглашаетесь на <a>обработку персональных данных</a>. Нажимая
          «Зарегистрироваться», вы подтверждаете свое согласие.
        </p>

        <nuxt-link
          class="registration__sign-in"
          to="/authorization"
        >Войти в аккаунт</nuxt-link>

      </form>
    </div>

  </div>
</template>

<script
  setup
  lang="ts"
>
import { sendData, baseUrl } from '@/api/api'
import type { IDataReg } from '@/types/authentication';

const router = useRouter()

const isFocused = ref<boolean>(false)

const data = reactive<IDataReg>({
  name: '',
  surname: '',
  email: '',
  password: '',
})

const signUp = async () => {
  const url = `${baseUrl}/authentication/register`
  await sendData(url, data)
  router.push('/authorization')
}

// sd@mail.ru
// 1Q2w3e4r5t!
</script>

<style lang="scss">
.registration {
  flex: auto;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background-color: transparent;
  background-image: url("../public/images/auth-background.png");
  background-repeat: no-repeat;
  background-size: cover;


  &__container {
    background-color: var(--color-dark-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 31px 56px;
    border-radius: 24px;
    width: 526px;
  }

  &__logo {
    margin-bottom: 4px;
  }

  &__title {
    margin-bottom: 40px;
    color: var(--color-light-primary);
    font-size: 32px;
    opacity: 80%;
    font-weight: 400;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;
    margin-bottom: 32px;
  }

  &__label {
    width: 100%;

    input {
      width: 100%;
      background-color: transparent;
      padding: 15px 12px;
      border: 1px solid #f2f4fe8f;
      border-radius: 8px;
      font-family: 'Geist', sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: var(--color-light-primary);
      transition: 0.3s;

      &:hover {
        border-color: var(--color-light-secondary);
      }

      &:focus-visible {
        outline: none;
      }

      &::placeholder {
        color: var(--color-light-secondary);
        opacity: 40%;
      }
    }

    .registration__full-field {
      border-color: var(--color-accent);
    }
  }

  &__send-button {
    background-color: var(--color-light-secondary);
    padding: 16px 0;
    margin-bottom: 12px;
    border: none;
    border-radius: 24px;
    width: 100%;
    cursor: pointer;

    span {
      font-size: 28px;
      font-weight: 500;
      color: #000000;

      &:nth-child(2) {
        font-size: 18px;
        font-weight: 500;
        margin-left: 10px;
      }
    }
  }

  &__agreement {
    margin-bottom: 32px;
    text-align: center;
    font-size: 14px;
    color: var(--color-light-secondary);

    a {
      color: var(--color-accent);
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &__sign-in {
    padding: 8px 16px;
    width: fit-content;
    font-family: 'Geist', sans-serif;
    font-weight: 400;
    color: var(--color-light-secondary);
    font-size: 20px;
    border: 1px solid var(--color-light-secondary);
    background-color: transparent;
    border-radius: 16px;
    opacity: 60%;
    cursor: pointer;
  }

  .registration__full-field .p-inputtext {
    border-color: var(--color-accent);
  }

  .p-password,
  .p-inputtext {
    width: 100%;
  }

  .p-inputtext:enabled:hover {
    border-color: var(--color-light-secondary);
  }

  .p-inputtext:enabled:focus {
    border-color: var(--color-light-secondary);
  }
}
</style>