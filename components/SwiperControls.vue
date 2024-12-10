<template>
  <div
    class="swiper-controls"
    :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }"
  >
    <button
      @click="swiper.slidePrev()"
      :style="{ transform: direction === 'horizontal' ? '' : 'rotate(90deg)' }"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12L8 17M3 12L8 7M3 12H21"
          stroke="#222629"
          stroke-width="2.34146"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      @click="swiper.slideNext()"
      :style="{ transform: direction === 'horizontal' ? '' : 'rotate(90deg)' }"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12L16 7M21 12L16 17M21 12L3 12"
          stroke="#222629"
          stroke-width="2.34146"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script
  setup
  lang="ts"
>
const swiper = useSwiper()

const props = defineProps<{
  direction: 'horizontal' | 'vertical';
}>()
</script>

<style
  scoped
  lang="scss"
>
.swiper-controls {
  display: flex;
  gap: 14px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-accent);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
}
</style>