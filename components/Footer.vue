<template>
  <footer class="main-footer">
    <div class="main-footer__container">
      <div class="main-footer__info">
        <nuxt-link
          class="main-footer__logo-link"
          to="/"
        >
          <img
            src="../public/icons/logo.svg"
            alt=""
            width="211"
            height="52"
          >
        </nuxt-link>
        <p class="main-footer__info-text">Customized itineraties with Your <nuxt-link to="/">WanderLust</nuxt-link>
          experience</p>
        <p class="main-footer__social-title">Social media</p>
        <ul class="main-footer__social-list">
          <li class="main-footer__social-item">
            <a href="">
              <img
                src="../public/icons/youtube.svg"
                alt=""
              >
            </a>
          </li>
          <li class="main-footer__social-item">
            <a href="">
              <img
                src="../public/icons/tiktok.svg"
                alt=""
              >
            </a>
          </li>
          <li class="main-footer__social-item">
            <a href="">
              <img
                src="../public/icons/instagram.svg"
                alt=""
              >
            </a>
          </li>
          <li class="main-footer__social-item">
            <a href="">
              <img
                src="../public/icons/telegram.svg"
                alt=""
              >
            </a>
          </li>
        </ul>
      </div>

      <div class="main-footer__nav-container">
        <nav class="main-footer__nav">
          <ul class="main-footer__nav-list">
            <li class="main-footer__nav-item">
              About
            </li>
            <li class="main-footer__nav-item">
              About
            </li>
            <li class="main-footer__nav-item">
              About
            </li>
            <li class="main-footer__nav-item">
              About
            </li>
          </ul>
        </nav>
      </div>

      <div class="main-footer__subscribe">
        <p>Subscribe to our newsletter</p>
        <form
          class="main-footer__subscribe-form"
          action="post"
        >
          <input
            type="text"
            placeholder="Enter your e-mail"
          >
          <button type="submit">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.29289 4.79289C8.68342 4.40237 9.31658 4.40237 9.70711 4.79289L16.7071 11.7929C17.0976 12.1834 17.0976 12.8166 16.7071 13.2071L9.70711 20.2071C9.31658 20.5976 8.68342 20.5976 8.29289 20.2071C7.90237 19.8166 7.90237 19.1834 8.29289 18.7929L14.5858 12.5L8.29289 6.20711C7.90237 5.81658 7.90237 5.18342 8.29289 4.79289Z"
                fill="#222629"
              />
            </svg>

          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<style
  scoped
  lang="scss"
>
.main-footer {
  background-color: rgba(34, 38, 41, 0.3);

  &__container {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    column-gap: 70px;
    margin: 0 auto;
    padding: 93px 96px;
    border-radius: 20px 20px 0 0;
    max-width: 1440px;
  }

  &__logo-link {
    margin-bottom: 14px;
  }

  &__info-text {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 14px;

    a {
      color: var(--color-accent);
    }
  }

  &__social-title {
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &__social-list {
    display: flex;
    justify-content: space-between;
  }

  &__social-item {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
      min-height: 40px;
      border-radius: 50%;
      border: 1px solid var(--color-accent);
    }
  }

  &__subscribe {
    margin: auto 0;

    p {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 16px;
    }
  }

  &__subscribe-form {
    display: flex;
    align-items: center;
    column-gap: 8px;

    input {
      padding: 21px 24px;
      border-radius: 66px;
      border: none;
      background-color: var(--color-dark-primary);
      font-size: 18px;
      font-weight: 300;
      width: 100%;

      &::placeholder {
        color: var(--color-light-secondary);
      }
    }

    button {
      background-color: var(--color-accent);
      border: none;
      border-radius: 50%;
      min-width: 48px;
      height: 48px
    }
  }
}
</style>