<template>
  <section class="trip">
    <div
      class="trip__container"
      v-if="data"
    >
      <TripPromo
        class="trip__promo"
        :data="data"
        :isActiveTab="isActiveTab"
        @switch-tabs="isActiveTab = !isActiveTab"
      />


      <TripPlan
        v-if="isActiveTab"
        :data="data?.days"
      />
      <TripInfo
        v-else
        :data="data"
      />

    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
import { ref, onMounted } from 'vue'
import { useTripsStore } from "../../stores/tripsStore";
import type { ITripsList } from '../../types/trips'
import { useRouter } from 'vue-router'

const router = useRouter()

const tripsStore = useTripsStore()
const isActiveTab = ref<boolean>(false)

const data = ref<ITripsList>()

onMounted(() => {
  if (tripsStore.trips) {
    const filteredTrips = tripsStore.trips.filter(item => {
      return item.id === router.currentRoute.value.params.id
    })
    data.value = filteredTrips[0]
  }
})

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

}
</style>