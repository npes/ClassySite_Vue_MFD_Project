<template>
  <div id="app">
    <div class="wrapper">
    <header-links></header-links>
    <router-view/>
    <section-footer-bg></section-footer-bg>
    <section-footer></section-footer>
    </div>
    </div>
</template>

<script>
import HeaderLinks from '@/components/HeaderLinks.vue'
import SectionFooterbg from '@/components/SectionFooterbg.vue'
import SectionFooter from '@/components/SectionFooter.vue'
export default {
  name: 'App',
  components: {
    'header-links': HeaderLinks,
    'section-footer': SectionFooter,
    'section-footer-bg': SectionFooterbg,
  }
}
</script>

<style lang="scss">
  @import './assets/scss/style.scss'
</style>
