<template>
  <client-only>
    <YandexMap
      id="map"
      :coordinates="coordinate"
      :zoom="12"
      :controls="controls"
      :detailed-controls="detailedControls"
    >
      <YandexMarker
        :coordinates="coordinate"
        :marker-id="1"
      >
        <!-- <template #component>
        <CustomBalloon v-model="name" />
      </template> -->
      </YandexMarker>
    </YandexMap>
  </client-only>
</template>

<script
  setup
  lang="ts"
>
import { YandexMap, YandexMarker } from 'vue-yandex-maps'

const props = defineProps<{
  city: string
}>()

const coordinate = ref<number[]>([]);
const controls = ['fullscreenControl'];
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };



const getCoordsForAddress = async () => {
  const APIKEY: string = 'b9792c26-9b3a-42d8-a4f6-5160e8801ffc'
  try {
    const urlAddress: string = `https://geocode-maps.yandex.ru/1.x/?apikey=${APIKEY}&format=json&geocode=${props.city}`;

    const response: any = await fetch(urlAddress)
    if (response.ok) {
      const data: any = await response.json()
      const coordinates: string[] = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      coordinate.value = [Number(coordinates[1]), Number(coordinates[0])]
    }
  } catch (error) {
    console.log('Ошибка при получении координат по адресу:', props.city)
  }
}

onMounted(async () => {
  await getCoordsForAddress()
})
</script>

<style
  scoped
  lang="scss"
>
#map {
  height: 100%;
  width: 100%;
  border-radius: 24px;
  overflow: auto;
}
</style>