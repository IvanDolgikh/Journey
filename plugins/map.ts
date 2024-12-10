import { defineNuxtPlugin } from '#app'
import plugin from 'vue-yandex-maps'


const settings = {
  apiKey: 'b9792c26-9b3a-42d8-a4f6-5160e8801ffc', // Индивидуальный ключ API
  // lang: 'ru_RU', // Используемый язык
  // coordorder: 'latlong', // Порядок задания географических координат
  // debug: false, // Режим отладки
  // version: '2.1' // Версия Я.Карт
}
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, settings)
});