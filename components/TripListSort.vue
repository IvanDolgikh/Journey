<template>
  <div class="filter">
    <div class="filter__container">
      <div class="filter__radio-container">
        <RadioButton
          v-model="filter"
          inputId="filter1"
          name="Popular"
          value="Popular"
        />
        <label for="filter1">Популярные</label>
      </div>

      <div class="filter__radio-container">
        <RadioButton
          v-model="filter"
          inputId="filter2"
          name="Cheap"
          value="Cheap"
        />
        <label for="filter2">Сначала недорогие</label>
      </div>

      <div class="filter__radio-container">
        <RadioButton
          v-model="filter"
          inputId="filter3"
          name="Expensive"
          value="Expensive"
        />
        <label for="filter3">Сначало дорогие</label>
      </div>

      <div class="filter__radio-container">
        <RadioButton
          v-model="filter"
          inputId="filter4"
          name="Reviews"
          value="Reviews"
        />
        <label for="filter4">По количеству отзывов</label>
      </div>

      <div class="filter__radio-container">
        <RadioButton
          v-model="filter"
          inputId="filter5"
          name="Best-grade"
          value="Best-grade"
        />
        <label for="filter5">С лучшей оценкой</label>
      </div>
    </div>

  </div>
</template>

<script
  setup
  lang="ts"
>
import type { ITripsList } from '@/types/trips'

const props = defineProps<{
  data: ITripsList[]
}>()

const emit = defineEmits(['update-data'])

const filter = ref<string>('')

const sortCheapTrips = (): ITripsList[] => {
  return props.data.sort((a, b) => {
    return a.price - b.price
  })
}

const sortExpensiveTrips = (): ITripsList[] => {
  return props.data.sort((a, b) => {
    return b.price - a.price
  })
}

const sortBestGradeTrips = (): ITripsList[] => {
  return props.data.sort((a, b) => {
    return b.averageRating - a.averageRating
  })
}


const sortData = computed(() => {
  switch (filter.value) {
    case 'Expensive':
      return sortExpensiveTrips()
    case 'Cheap':
      return sortCheapTrips()
    case 'Best-grade':
      return sortBestGradeTrips()
    default:
      return props.data
  }
})

watchEffect(() => {
  emit('update-data', sortData.value);
});

</script>

<style lang="scss">
.filter {
  &__container {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding: 28px 20px;
    background-color: var(--color-dark-secondary);
    border-radius: 24px;
  }

  &__radio-container {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  .p-radiobutton-box {
    border: 3px solid var(--color-light-secondary);
    background: transparent;
    transition: 0.2s;
  }

  .p-radiobutton-checked .p-radiobutton-box {
    border-color: var(--color-accent);
    background: var(--color-accent);
  }

  .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: var(--color-accent);
    background: var(--color-accent);
    opacity: 0.8;
  }
}
</style>