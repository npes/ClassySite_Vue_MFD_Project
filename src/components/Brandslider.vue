<template lang="html">
<div class="brandSlider">
  <h3>Top Brands</h3>
  <div class="carrouselContainer">
  <carousel :perPage="5" :autoplay="true" :perPageCustom="[[480, 2], [981, 3], [1170, 5]]">
  <slide v-for="logo in logos" :key="logo.id">
    <img v-bind:src="logo.img" v-bind:alt="logo.name">
  </slide>
</carousel>
</div>

</div>
</template>

<script>
export default {
    name: 'Brandslider',
  data: function(){
    return{
    logos: [{name:'Pull & Bear', img: '../../static/static_images/Pull&BearTrans.png'},
            {name:'Michael Kors', img: '../../static/static_images/MichaelKorsTrans.png'},
            {name:'mango', img: '../../static/static_images/MangoTrans.png'},
            {name:'Missguided', img: '../../static/static_images/MissGuidedTrans.png'},
            {name:'Monki', img: '../../static/static_images/MonkiTrans.png'},
            {name:'mango', img: '../../static/static_images/MangoTrans.png'},
            {name:'mango', img: '../../static/static_images/MangoTrans.png'},
            {name:'Missguided', img: '../../static/static_images/MissGuidedTrans.png'},
            {name:'Monki', img: '../../static/static_images/MonkiTrans.png'},
            {name:'mango', img: '../../static/static_images/MangoTrans.png'},
  ]}
  }
}
</script>

<style lang="scss">

</style>
