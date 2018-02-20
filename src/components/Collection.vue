<template>
  <div class="collection">
    <div class="hero-collection">
      <img src="../assets/images/Collection/HeaderImageDark.jpg" alt="">
    </div>
    
    <section class="headline-collection">
    <div class="most-wanted">
      <svg height="20" width="300">
      <line x1="-6" y1="0" x2="294" y2="0" style="stroke:#fff;stroke-width:1" />
      </svg>
      <p>most wanted</p>
      <svg height="20" width="300">
      <line x1="6" y1="0" x2="306" y2="0" style="stroke:#fff;stroke-width:1" />
      </svg>
    </div>
    <p class="new-collection">new collection</p>
    <button class="btn btn-collection">browse collection</button>
    </section>

    

    <section class="dropdown-collection">
      <p>Dropdown items here</p>
    </section>

    <section class="cards-collection">

      <div class="card" v-for="product in products.slice(0, 12)" :key="product.id">
        <router-link :to="/product/ + product.id">
          <img :src="product.image" alt="product image" class="card-image">
        </router-link>
        <p class="card-description">{{product.description}}</p>
        <p class="card-price">{{product.price}}</p>
        <div class="btn btn-card">
        <icon class="icon" name="shopping-bag"></icon>  
        <p href="#">add to bag</p>
        </div>
      </div>
        
    </section>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: "collection",
  data: function() {
    return {
      products: []
    };
  },
  created: function() {
    this.getProducts()
  },
  methods: {
    getProducts: function() {
      axios
        .get("/static/products.json")
        .then(response => {this.products = response.data})
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>

</style>
