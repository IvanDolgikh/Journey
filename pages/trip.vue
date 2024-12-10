<template>
  <section class="trip">
    <div class="trip__container">
      <TripPromo
        class="trip__promo"
        :isActiveTab="isActiveTab"
        @switch-tabs="isActiveTab = !isActiveTab"
      />


      <TripPlan v-if="isActiveTab" />
      <TripInfo v-else />

    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>

const isActiveTab = ref<boolean>(false)
</script>

<style
  scoped
  lang="scss"
>
.trip {
  flex: auto;
  flex-grow: 1;
  display: flex;

  &__container {
    width: 100%;
    margin: 0 auto;
  }

  &__promo {
    margin-bottom: 75px;
  }

  &__active-tab {}
}
</style>