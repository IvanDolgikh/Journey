<template>
  <div class="trip-chat">
    <div class="trip-chat__container">
      <div class="trip-chat__title-container">
        <img
          src="../public/icons/masccot-white.svg"
          alt=""
        >
        <p>Умный помощник</p>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 19H5V14M14 5H19V10"
              stroke="#F2F4FE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="trip-chat__description-container">
        <p class="trip-chat__description-1">Привет!<br> Я&nbsp;Vivi&nbsp;&mdash; ваш умный помощник</p>
        <img
          class="trip-chat__description-image"
          src="../public/icons/mascot-black.svg"
          alt=""
        >
        <p class="trip-chat__description-2">Задавайте вопросы о&nbsp;городе, его достопримечательностях или
          планировании поездки, и&nbsp;я&nbsp;вам
          помогу!</p>
      </div>

      <div class="trip-chat__suggestions-container">
        <p>Что&nbsp;бы вы&nbsp;хотели узнать о&nbsp;Париже?</p>
        <ul>
          <li>
            <button>Отели</button>
          </li>
          <li>
            <button>Кафе</button>
          </li>
          <li>
            <button>Места</button>
          </li>
        </ul>
      </div>

      <div class="trip-chat__input-container">
        <button class="trip-chat__file-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 17H19M5 12H19M5 7H19"
              stroke="#F2F4FE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="Сообщение"
        >

        <button class="trip-chat__send-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              opacity="0.5"
              clip-path="url(#clip0_1550_10130)"
            >
              <path
                d="M6.817 12.6075L13.6705 12.6075M19.2672 14.0216L6.97396 20.5297C5.87227 21.113 5.32112 21.4047 4.95785 21.3208C4.64276 21.2481 4.3824 21.0282 4.25883 20.7294C4.11635 20.3848 4.31332 19.7925 4.70764 18.6095L6.53972 13.1133C6.60229 12.9256 6.63329 12.8319 6.64572 12.7359C6.65674 12.6507 6.65729 12.5646 6.64626 12.4793C6.63412 12.3855 6.60348 12.2936 6.54369 12.1143L4.70739 6.60536C4.31307 5.4224 4.11606 4.8307 4.25854 4.48611C4.38211 4.18726 4.64242 3.96692 4.95752 3.89416C5.32084 3.81027 5.87215 4.10177 6.97419 4.6852L19.2674 11.1934C20.1338 11.652 20.567 11.8816 20.7087 12.1875C20.832 12.454 20.8322 12.7612 20.7088 13.0277C20.5672 13.3335 20.1341 13.5628 19.2686 14.021L19.2672 14.0216Z"
                stroke="#F2F4FE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1550_10130">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </div>

</template>

<script
  setup
  lang="ts"
>
</script>

<style
  scoped
  lang="scss"
>
.trip-chat {

  &__container {
    padding: 24px 20px;
    background-color: var(--color-accent);
    border-radius: 24px;
  }

  &__title-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 158px;

    p {
      font-size: 17px;
      font-weight: 600;
      color: var(--color-dark-secondary);
    }

    button {
      width: 48px;
      height: 48px;
      margin-left: auto;
      background-color: var(--color-dark-secondary);
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  }

  &__description-container {
    display: grid;
    grid-template-columns: 1fr min-content;
    column-gap: 20px;
    margin-bottom: 40px
  }

  &__description-1 {
    grid-column: 1;
    font-size: 28px;
    font-weight: 500;
    color: var(--color-dark-secondary);
    margin-bottom: 12px;
  }

  &__description-image {
    grid-column: 2;
  }

  &__description-2 {
    font-size: 18px;
    color: var(--color-dark-secondary);
    grid-column: 1 / 3;
  }

  &__suggestions-container {
    margin-bottom: 170px;

    p {
      font-size: 20px;
      font-weight: 500;
      color: var(--color-dark-secondary);
      margin-bottom: 16px
    }

    ul {
      display: flex;
      column-gap: 21px;
    }

    button {
      padding: 12px 31px;
      color: var(--color-light-primary);
      font-size: 17px;
      font-weight: 500;
      background-color: var(--color-dark-secondary);
      border-radius: 24px;
      border: none;
    }
  }

  &__input-container {
    background-color: var(--color-dark-secondary);
    border-radius: 24px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    column-gap: 16px;

    input {
      width: 100%;
      border: none;
      background-color: transparent;
      padding: 4px 6px;
      font-size: 18px;

      &:focus-visible {
        outline: none;
      }
    }
  }

  &__file-button {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }

  &__send-button {
    min-width: 48px;
    min-height: 48px;
    background-color: rgba(34, 38, 41, 1);
    border: none;
    border-radius: 50%;
    padding: 0;
    cursor: pointer;
  }
}
</style>