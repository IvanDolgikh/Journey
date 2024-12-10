<template>
  <Header class="main-header" />
  <main :class="{ active: hideFooter }">
    <NuxtPage />
  </main>
  <Footer v-if="hideFooter" />
</template>

<script
  setup
  lang="ts"
>

const router = useRoute();
const hideFooter = computed<boolean>(() => {
  return router.matched.some(direct => direct.name !== 'registration' && direct.name !== 'authorization' && direct.name !== 'create-trip')
})
</script>

<style
  scoped
  lang="scss"
>
.main-header {
  position: absolute;
  top: 52px;
  left: 0;
  right: 0;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 100;
}

main {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;
  margin: 0 auto;
}
</style>
