<template lang="html">
  <div class="productList">
    <tabs>
      <tab name="new arrivals">
        <ul class="productContainer">
          <li v-for="product in newProducts" v-bind:key="product.id">
            <div class="productItem">
              <img class="productImage" v-bind:src="'./static/images/' + product.image" v-bind:alt="product.title">
              <h4 class="productTitle">{{product.brand}}{{product.title}}</h4>
              <div class="bottomLine">
              <span class="productPrice">${{product.price}}</span>
              <button type="button" name="addToBag"><img src="../../../static/images/bagGray.png" alt="add to bag">
                <span>Add to bag</span>
              </button>
              </div>
            </div>
          </li>
        </ul>
      </tab>
      <tab name="top sellers">
        <ul class="productContainer">
          <li v-for="product in topProducts" v-bind:key="product.id">
            <div class="productItem">
              <img class="productImage" v-bind:src="'./static/images/' + product.image" v-bind:alt="product.title">
              <h4 class="productTitle">{{product.brand}}{{product.title}}</h4>
              <div class="bottomLine">
              <span class="productPrice">${{product.price}}</span>
              <button type="button" name="addToBag"><img src="../../../static/images/bagGray.png" alt="add to bag">
                <span>Add to bag</span>
              </button>
              </div>
            </div>
          </li>
        </ul>
      </tab>
      <tab name="featured">
        <ul class="productContainer">
          <li v-for="product in featuredProducts" v-bind:key="product.id">
            <div class="productItem">
              <img class="productImage" v-bind:src="'./static/images/' + product.image" v-bind:alt="product.title">
              <h4 class="productTitle">{{product.brand}}{{product.title}}</h4>
              <div class="bottomLine">
              <span class="productPrice">${{product.price}}</span>
              <button type="button" name="addToBag"><img src="../../../static/images/bagGray.png" alt="add to bag">
                <span>Add to bag</span>
              </button>
              </div>
            </div>
          </li>
        </ul>
      </tab>
  </tabs>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'produt-list',
  data: function(){
    return {
      newProducts: [],
      featuredProducts: [],
      topProducts: []
    }
  },
  created: function() {
      this.getNewProducts(),
      this.getFeaturedProducts(),
      this.getTopProducts()
  },
  methods:{
    getNewProducts: function(){
      axios.get("/static/products.json")
        .then(response => {
          this.newProducts = response.data.filter(product => product.newArrival == true).slice(0, 4);
        })
        .catch(error =>{
          console.log(error);
        })
      },
    getFeaturedProducts: function(){
      axios.get("/static/products.json")
        .then(response => {
          this.featuredProducts = response.data.filter(product => product.featured == true).slice(0, 4);
        })
        .catch(error =>{
          console.log(error);
        })
      },
      getTopProducts: function(){
      axios.get("/static/products.json")
        .then(response => {
          this.topProducts = response.data.filter(product => product.topSeller == true).slice(0, 4);
        })
        .catch(error =>{
          console.log(error);
        })
      }
    }
  }
</script>

<style lang="scss">
@mixin transition($duration) {
    -webkit-transition: $duration;
    -moz-transition: $duration;
    -ms-transition: $duration;
    -o-transition: $duration;
    transition: $duration;
}
.productList{
  margin: 50px 0;
  .tabs-component-tabs{
    text-align: center;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    >li{
      margin: 0 20px;
      >a{
        text-decoration: none;
        text-transform: uppercase;
        color: #333;
      }
    }
    .is-active{
        text-decoration: underline;
    }
  }
}
</style>
