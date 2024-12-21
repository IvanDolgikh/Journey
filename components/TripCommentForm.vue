<template>
  <div
    class="comment-form"
    @click.stop="closeModal"
  >
    <div class="comment-form__overlay">
      <div class="comment-form__container">
        <p class="comment-form__city">{{ data.city }}</p>
        <div class="comment-form__location">
          <img
            src="../public/icons/map-pin.svg"
            alt=""
          >
          <p>{{ data.country }}</p>
        </div>

        <Rating
          class="comment-form__rating"
          v-model="commentData.rating"
        />

        <label class="comment-form__label">
          <span class="comment-form__label-title">Отзыв</span>
          <input
            type="text"
            class="comment-form__input"
            v-model="commentData.comment"
            placeholder="Поделитесь своим впечатлением"
          >
        </label>

        <div class="comment-form__buttons-container">
          <button
            class="comment-form__button-cancel"
            @click="clearData"
          >Отменить</button>
          <button
            @click="sendComment"
            class="comment-form__button-send"
            :disabled="commentData.rating < 1"
          >Опубликовать</button>

        </div>

      </div>
    </div>

  </div>
</template>

<script
  setup
  lang="ts"
>
import { baseUrl } from '@/api/api'
import type { ITripsList } from '@/types/trips'
import type { IComment } from '@/types/comment'

const props = defineProps<{
  data: ITripsList
}>()
const emit = defineEmits(['closeModal'])

const commentData = reactive<IComment>({
  rating: 0,
  comment: ''
})

const closeModal = (evt: Event) => {
  const target = evt.target;
  if (target instanceof HTMLElement && target.classList.contains('comment-form__overlay')) {
    emit('closeModal');
  }
}

const clearData = () => {
  commentData.rating = 0
  commentData.comment = ''
}

const sendComment = async () => {
  const url = `${baseUrl}/trips/${props.data.id}/reviews`

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(commentData)
    })
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss">
.comment-form {
  &__container {
    padding: 28px 32px;
    border-radius: 16px;
    width: 680px;
    height: 350px;
    background-color: var(--color-dark-secondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
  }

  &__city {
    font-size: 40px;
    margin-bottom: 6px;
  }

  &__location {
    display: flex;
    column-gap: 4px;
    align-items: center;
    margin-bottom: 20px;
    opacity: 0.6;

    p {
      font-size: 16px;
      font-weight: 300;
    }
  }

  &__rating {
    margin-bottom: 24px;
  }

  .p-rating-icon,
  .p-rating-option-active .p-rating-icon {
    color: var(--color-accent)
  }

  .p-rating-icon {
    width: 28px;
    height: 28px;
  }

  &__label {
    display: block;
    margin-bottom: 40px;
  }

  &__label-title {
    display: block;
    font-size: 12px;
    opacity: 0.5;
    margin-bottom: 12px;
    font-weight: 300
  }

  &__input {
    border: none;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    background-color: transparent;
    width: 100%;
    padding: 4px 0;
    font-family: 'Geist', sans-serif;
    font-weight: 400;

    &:focus-visible {
      outline: none;
    }
  }

  &__buttons-container {
    display: flex;
    justify-content: flex-end;
    column-gap: 16px;
  }

  &__button-cancel {
    padding: 12px 16px;
    border: 1px solid var(--color-light-secondary);
    background-color: transparent;
    border-radius: 8px;
    font-size: 17px;
    font-family: 'Geist', sans-serif;
    font-weight: 400;
    cursor: pointer;
  }

  &__button-send {
    padding: 12px 16px;
    border: none;
    color: var(--color-dark-secondary);
    background-color: var(--color-accent);
    border-radius: 8px;
    font-size: 17px;
    font-family: 'Geist', sans-serif;
    font-weight: 400;
    cursor: pointer;
    transition: 0.2s;

    &:disabled {
      opacity: 0.3;
    }
  }
}
</style>