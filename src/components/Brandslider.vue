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

// .brandSlider{
//   grid-area: slider;
//   margin: 20px 0; //container margin 
//   width: 100%;
//   background-color: #f6f6f6; //container bg color
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
//   text-align: center;
//   h3{
//     font-size: 2em;
//     text-transform: uppercase;
//     margin: 30px 0;
//     // black line left
//     &:before{
//       border-top: .1rem solid black;
//       content: "";
//       display: inline-block;
//       width: 100px;
//       margin-bottom: 7px;
//       margin-right: 10px;
//     }
//     //black line right
//     &:after{
//       border-top: .1rem solid black;
//       content: "";
//       display: inline-block;
//       width: 100px;
//       margin-bottom: 7px;
//       margin-left: 10px;
//     }
//   }
//   //container for the logos
//   .carrouselContainer{
//     align-self: center;
//     margin: 40px 0 0px 0;
//     width: 100%;
//     .VueCarousel-pagination{
//       margin: 20px 0 0 0;
//       .VueCarousel-dot > div{
//         background: rgb(0,0,0)!important;
//       }
//       .VueCarousel-dot--active{
//         padding: 8px !important;
//          div{
//           background: transparent!important;
//           width: 12px !important;
//           height: 12px !important;
//           border: 1px solid black;
//         }
//       }
//     }
//   }
// }
</style>
