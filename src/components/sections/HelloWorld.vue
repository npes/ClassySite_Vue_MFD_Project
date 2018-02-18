<template>
  <section class='gallery' id="gallery">
  <div v-for="img in images" v-bind:key="img.id">
    <img :src="img">
  </div>
</section>
</template>

<script>
import Slick from 'vue-slick';
export default {
  name: 'Slick',
  data: function() {
    return {
      images: [],
      slider: null
    }
  },
  mounted() {
    var that = this
    setTimeout(function() {
      that.images.push('http://devcereal.com/wp-content/uploads/2016/05/URL-URI-URN-whats-difference.png')
      that.images.push('http://www.shawacademy.com/blog/wp-content/uploads/2015/10/URL-1000x605.jpg')

    }, 300)
  },
  updated () {
        $('.gallery').slick({
        autoplay: true,
        dots: true,
        responsive: [{
          breakpoint: 500,
          settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      });
  }
}

</script>

