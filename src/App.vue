<template lang="html">
  <div id="app">
    <div class="wrapper">
      <navigation></navigation>
        <router-view/>
        <so-me></so-me>
      <sitefooter></sitefooter>
    </div>
  </div>
</template>

// This is a test

<script>
import Navigation from '@/components/Navigation.vue'
import SoMe from '@/components/SoMe.vue'
import SiteFooter from '@/components/SiteFooter.vue'
export default {
  name: 'App',
  components: {
    'navigation': Navigation,
    'so-me': SoMe,
    'sitefooter': SiteFooter,
  },
}
</script>

<style lang="scss">
  @import './assets/scss/style.scss'
</style>
