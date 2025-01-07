<template>
  <div class="trip-filter">
    <div class="trip-filter__overlay">
      <div class="trip-filter__container">
        <button
          class="trip-filter__button-close"
          @click="$emit('close-filter')"
        >
          <span class="pi pi-times"></span>
        </button>
        <h2 class="trip-filter__title">План вашего путешествия</h2>
        <form
          class="trip-filter__form"
          action="post"
        >

          <label for="multiselect">
            <span>Какие страны вы хотели бы посетить?</span>
            <MultiSelect
              v-model="selectedCities"
              display="chip"
              :options="cities"
              optionLabel="name"
              filter
              placeholder="Выберите страну"
              :maxSelectedLabels="3"
              class="aaa w-full md:w-80"
            />
          </label>

          <label>
            <span>Когда вы бы хотели их посетить?</span>
            <DatePicker
              v-model="date"
              selectionMode="range"
              showIcon
              fluid
              iconDisplay="input"
              placeholder="Выберите дату"
            />
          </label>

          <label>
            <span>Какой у вас бюджет?</span>

            <div class="trip-filter__budget-container">
              <InputNumber
                class="trip-filter__budget-from"
                v-model="price[0]"
                suffix="$"
                fluid
              />
              <span>-</span>
              <InputNumber
                class="trip-filter__budget-to"
                v-model="price[1]"
                suffix="$"
                fluid
              />
            </div>
          </label>

          <label>
            <Slider
              class="trip-filter__budget-slider"
              v-model="price"
              range
              :min="0"
              :max="100000"
              @change="updateInputNumbers"
            />
          </label>


          <label for="multiselect">
            <span>Выберите стили путешествия</span>
            <MultiSelect
              v-model="style"
              display="chip"
              :options="styles"
              optionLabel="name"
              filter
              placeholder="Выберите стили"
              :maxSelectedLabels="3"
              class="w-full md:w-80"
            />
          </label>

          <button
            class="trip-filter__send-button"
            type="submit"
            @click.prevent="getTrips()"
          >
            <span>Продолжить</span>
            <img
              src="../public/icons/arrow-right.svg"
              alt=""
            >
          </button>

        </form>
      </div>
    </div>
  </div>
</template>


<script
  setup
  lang="ts"
>
import { getData, baseUrl } from '@/api/api'

const emit = defineEmits(['close-filter', 'update-filter'])

const tripsStore = useTripsStore()

interface ICity {
  name: string,
  code: string
}
const selectedCities = ref<ICity[]>([]);

const cities = ref<ICity[]>([
  { name: 'Сидней', code: '1' },
  { name: 'Токио', code: '2' },
  { name: 'Дубай', code: '3' },
  { name: 'Рим', code: '4' },
  { name: 'Санкт-Петербург', code: '5' },
  { name: 'Сочи', code: '7' },
  { name: 'Нью-Йорк', code: '8' },
  { name: 'Казань', code: '9' },
  { name: 'Париж', code: '10' },
  { name: 'Лондон', code: '11' },
  { name: 'Москва', code: '12' },
]);

const style = ref()
const styles = ref([
  { name: 'Религиозное путешествие' },
  { name: 'Спортивное путешествие' },
  { name: 'Груповое путешествие' },
  { name: 'Премимум' },
  { name: 'Люкс' }
])

const date = ref<any>([])
const priceFrom = ref<number>(0)
const priceTo = ref<number>(100000)
const price = ref<number[]>([0, 100000]);

const updateInputNumbers = () => {
  // Обновляем значения InputNumber при изменении слайдера
  priceFrom.value = price.value[0];
  priceTo.value = price.value[1];
};

const formatDate = (): string[] | string => {
  if (date.value.length !== 0) {
    const date1 = new Date(date.value[0]);
    const date2 = new Date(date.value[1]);
    const formattedDate: string = date1.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/(\d{4})-(\d{2})-(\d{2})/, '$1-$2-$3');

    const formattedDate1: string = date2.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/(\d{4})-(\d{2})-(\d{2})/, '$1-$2-$3');

    return [formattedDate, formattedDate1]
  }

  else {
    return ''
  }
}

const createUrl = (): string => {
  let url = `${baseUrl}/trips?Page=${1}&PageSize=${11}`

  if (selectedCities.value[0]?.name) {
    url += `&City=${selectedCities.value[0]?.name}`
  }

  if (price.value) {
    url += `&MinPrice=${price.value[0]}&MaxPrice=${price.value[1]}`
  }

  if (formatDate()) {
    const [startDate, endDate] = formatDate();
    url += `&StartDate=${startDate}&EndDate=${endDate}`
  }

  return url
}

const getTrips = async (): Promise<void> => {
  const url = createUrl()
  tripsStore.trips = await getData(url)
  console.log(tripsStore.trips)
  emit('close-filter')
  emit('update-filter', tripsStore.trips)
}
</script>

<style lang="scss">
.trip-filter {
  &__container {
    background-color: var(--color-dark-secondary);
    width: fit-content;
    max-width: 530px;
    height: 100%;
    margin-left: auto;
    padding: 42px 54px;
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

  &__button-close {
    display: block;
    background-color: transparent;
    border: none;
    width: fit-content;
    margin: 0 0 50px auto;
    cursor: pointer;

    span {
      font-size: 24px;
    }
  }

  &__title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 32px;
  }

  label {
    display: block;
    margin-bottom: 32px;

    span {
      display: block;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 12px;
    }
  }

  &__budget-container {
    display: flex;
    justify-content: flex-start;
    column-gap: 10px;
    margin-bottom: 40px;
  }

  &__send-button {
    display: flex;
    justify-content: flex-start;
    column-gap: 8px;
    align-items: center;
    padding: 12px 24px;
    font-size: 24px;
    font-weight: 500;
    color: var(--color-dark-primary);
    background-color: var(--color-light-secondary);
    border: none;
    border-radius: 8px;
    opacity: 50%;
    cursor: pointer;
    margin: 84px auto 0 auto;
  }

  &__form {
    overflow: hidden;
  }

  .p-multiselect {
    width: 100%;
    border-radius: 16px;
    background: transparent;
    border: 2px solid rgba(242, 244, 254, 0.4);
  }

  .p-multiselect-label {
    padding: 19px 16px;
    font-size: 16px;

    span {
      font-size: 16px;
      margin: 0
    }
  }

  .p-multiselect-chip-item {
    margin: 0;
  }

  .p-chip {
    font-size: 16px;
  }

  .p-multiselect-label:has(.p-chip) {
    padding: 17px 16px;
  }

  .p-multiselect-option {
    font-size: 16px;
    font-family: 'Geist', sans-serif;
  }

  .p-multiselect:not(.p-disabled).p-focus {
    border-color: var(--color-accent);
  }

  .p-checkbox-checked .p-checkbox-box {
    border-color: var(--color-accent);
    background: var(--color-accent);
  }

  .p-datepicker-fluid .p-datepicker-input {
    width: 100%;
    padding: 19px 16px;
    border-radius: 16px;
    background: transparent;
    border: 2px solid rgba(242, 244, 254, 0.4);
    font-size: 16px;
  }

  .p-datepicker-input-icon-container {
    margin: 0;
    transform: translateY(-50%);
  }

  .p-inputtext:enabled:focus {
    border-color: var(--color-accent);
  }

  .p-datepicker-day-selected {
    background: var(--color-accent);
  }

  .p-inputnumber {
    width: 25%;
    margin: 0;

  }

  .p-inputnumber-fluid .p-inputnumber-input {
    width: 100%;
    border-radius: 8px;
    background: transparent;
    border: 2px solid rgba(242, 244, 254, 0.4);
    font-size: 16px;
    text-align: center;
  }

  .p-slider-handle::before {
    background: var(--color-dark-primary);
  }

  .p-slider-range {
    background: var(--color-accent);
  }

  .p-slider-handle {
    display: flex;
    margin: 0;
    background: var(--color-accent);
  }


}

.p-checkbox-checked .p-checkbox-box {
  border-color: var(--color-accent) !important;
  background: var(--color-accent) !important;
}

.p-multiselect-option {
  font-family: 'Geist', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

.p-datepicker-day-selected {
  background: var(--color-accent) !important;
}

.p-datepicker-day-selected-range {
  background: #e7fe5538 !important;
}
</style>