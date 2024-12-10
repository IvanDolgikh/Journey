<template>
  <div class="authorization">
    <div class="authorization__container">
      <img
        class="authorization__logo"
        src="../public/icons/logo.svg"
        alt="Логотип"
        width="250"
        height="64"
      >
      <h1 class="authorization__title">Вход</h1>

      <form
        class="authorization__form"
        action="post"
      >
        <label class="authorization__label">
          <input
            type="text"
            name="Email"
            placeholder="example@mail.com"
            v-model="data.email"
            :class="{ 'authorization__full-field': !isFocused && data.email }"
            @focus="isFocused = true"
            @blur="isFocused = false"
          >
        </label>
        <label class="authorization__label">
          <Password
            v-model="data.password"
            :class="{ 'authorization__full-field': !isFocused && data.password }"
            promptLabel="Choose a password"
            weakLabel="Слишком короткий пароль"
            mediumLabel="Слабый пароль"
            strongLabel="Надежный пароль"
            toggleMask
            placeholder="Введите пароль"
          />
        </label>

        <div class="authorization__password-features">
          <div class="flex items-center">
            <Checkbox
              inputId="ingredient1"
              name="pizza"
              value="Cheese"
            />
            <label
              for="ingredient1"
              class="ml-2"
            > Запомнить меня </label>
          </div>

          <a href="">Забыли пароль?</a>
        </div>


        <button
          type="submit"
          class="authorization__send-button"
          @click.prevent="signIn()"
        >
          Войти
        </button>

        <nuxt-link
          class="authorization__sign-in"
          to="/registration"
        >Зарегистрироваться</nuxt-link>
      </form>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { sendData, baseUrl } from '@/api/api'
import type { IDataAuth } from '@/types/authentication';
const authStore = useAuthStore()

const router = useRouter()
const isFocused = ref<boolean>(false)

const data = reactive<IDataAuth>({
  email: '',
  password: '',
})

const signIn = async () => {
  const url: string = `${baseUrl}/authentication/login`
  const response = await sendData(url, data)
  if (response.token) {
    localStorage.setItem('token', response.token)
    authStore.isAuthUser = true
  }
  router.push('/')
}
</script>


<style lang="scss">
.authorization {
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
    width: 100%;
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

    .authorization__full-field {
      border-color: var(--color-accent);
    }
  }

  &__password-features {
    display: flex;
    justify-content: space-between;
    width: 100%;

    label {
      font-size: 14px;
      margin-left: 8px;
    }

    a {
      color: var(--color-light-primary);
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
    font-size: 28px;
    font-weight: 500;
    color: #000000;
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

  .authorization__full-field .p-inputtext {
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

  .p-checkbox-checked .p-checkbox-box {
    border-color: var(--color-accent);
    background: var(--color-accent);
  }
}
</style>