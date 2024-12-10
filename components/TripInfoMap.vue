<template>
  <client-only>
    <YandexMap
      id="map"
      :coordinates="coordinate"
      :controls="controls"
      :detailed-controls="detailedControls"
    >
      <YandexMarker
        :coordinates="item"
        :marker-id="123"
        v-for="(item, index) in coordinates"
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
const coordinate = [55, 33];
const coordinates = [[55, 33], [57, 38], [56, 94]]
const controls = ['fullscreenControl'];
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };
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