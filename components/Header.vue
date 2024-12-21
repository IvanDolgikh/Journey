<template>
  <header class="main-header">
    <div class="main-header__container">
      <nuxt-link to="/">
        <img
          src="../public/icons/logo.svg"
          alt="Логотип."
          width="212"
          height="52"
        >
      </nuxt-link>

      <nav>
        <ul class="main-header__nav-list">
          <li class="main-header__nav-item main-header__nav-item--active">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="main-header__nav-item">
            <NuxtLink to="/about-us">About us</NuxtLink>
          </li>
        </ul>
      </nav>

      <div
        v-if="authStore.isAuthUser || isAuthUser"
        class="main-header__lk-container"
      >
        <div class="main-header__image-container">
          <!-- <img src="" alt=""> -->
          <div class="main-header__image-spare">
            <span class="pi pi-user"></span>
          </div>
        </div>

        <NuxtLink
          class="main-header__lk-button"
          to="/user-profile"
        >
          <span class="pi pi-bars"></span>
        </NuxtLink>
      </div>

      <div
        v-else
        class="main-header__authentication"
      >
        <ul class="main-header__authentication-list">
          <li class="main-header__authentication-item">
            <NuxtLink
              class="main-header__authentication-link"
              to="/authorization"
            >Log in</NuxtLink>
          </li>
          <li class="main-header__authentication-item">
            <NuxtLink
              class="main-header__authentication-link"
              to="/registration"
            >Sign in</NuxtLink>
          </li>
        </ul>
      </div>



    </div>

  </header>
</template>

<script
  setup
  lang="ts"
>
const authStore = useAuthStore()

const isAuthUser = computed(() => {
  if (localStorage.getItem('isAuthUser')) {
    return localStorage.getItem('isAuthUser') === 'true' ? true : false
  }
})

onMounted(() => {
  console.log(isAuthUser.value)
})
</script>

<style
  scoped
  lang="scss"
>
.main-header {
  &__container {
    display: flex;
    justify-content: space-between;
    padding: 0 96px;
    max-width: 1440px;
    margin: 0 auto
  }

  &__nav-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    row-gap: 46px;
    background: rgba(242, 244, 254, 0.3);
    border-radius: 110px;
    padding: 6px 26px;
  }

  &__nav-item {
    padding: 9px 18px;
    background-color: transparent;
    border-radius: 110px;
    cursor: pointer;

    a {
      color: var(--color-light-primary);

    }
  }

  /* &__nav-item--active {
    background-color: --color-light-secondary;

    a {
      color: var(--color-background);
    }
  } */


  &__authentication-list {
    display: flex;
    row-gap: 16px;
  }

  &__authentication-item {
    padding: 12px 32px;
    border-radius: 109px;
    font-size: 17px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;

    a {
      color: var(--color-light-primary);
    }

    &:nth-child(2) {
      background-color: var(--color-accent);

      a {
        color: #000000;
      }
    }
  }

  &__lk-container {
    display: flex;
    align-items: center;
    column-gap: 14px;
  }

  &__image-spare {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #75757591;
    border-radius: 50%;

    span {
      font-size: 22px;
    }
  }

  &__lk-button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      font-size: 20px;
      color: var(--color-light-secondary);
    }
  }
}
</style>