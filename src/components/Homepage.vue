<template>
    <div class="homepage">
        <!-- HERO IMAGE BACKGROUND -->
        <div class="hero-home">
            <img src="../assets/images/Header/HEADER.jpg" alt="">
        </div>
        <button class="btn btn-hero-home">learn more about great deals</button>

<!-- SECTION A START - "LOOKBOOK" -->
        <section class="homeA">
            <div class="lookbook-img1">
                <div class=" btn btn-lookbook"><span>Men's</span> lookbook</div>
                <img src="../assets/images/Homepage/MensLookbookImage.jpg" alt="Lookbook picture 1">
            </div>
            <div class="newsletter">
                <div class="newsletter-inner">
                    <div class="icon-container">
                         <div class="circle">
                             <div class="icon-box">
                                 <icon class="icon" name="envelope-o" scale="1"></icon>
                             </div>
                        </div>
                    </div>
                   
                    <h2>get our newsletter</h2>
                    <h3>join our maillist to receive special discounts</h3>
                    <input type="email" placeholder="enter your email">
                    <button class="btn">subscribe</button>      
                </div>
            </div>
            <div class="lookbook-img2">
                    <div class="btn btn-lookbook"><span>Women's</span> lookbook</div>
                    <img src="../assets/images/Homepage/WomensLookBookImage.jpg" alt="Lookbook picture 2">
                </div>
        </section>
<!-- SECTION B START - "TOP BRANDS" -->
        <div class="homeB-BG">
            
        </div>
        <brandslider></brandslider>

<!-- SECTION C START - "MUST HAVE FOR HER" -->
        <section class="homeC">
            <div class="left-image">
                <img src="../assets/images/Homepage/MustHaveForHerFull.jpg" alt="">
            </div>
            <div class="right-image-top">
                <img src="../assets/images/Homepage/75PercentOffFull.jpg" alt="">
            </div>
            <div class="right-image-botm">
                <img src="../assets/images/Homepage/NewSummerStyleFull.jpg" alt="">
            </div>
        </section>
<!-- SECTION D START - "PRODUCTS SLIDER" -->
        <section class="homeD">
            <div class="productList">
                <tabs :options="{ useUrlFragment: false }">
                    <tab name="new arrivals">
                        <div class="card" v-for="product in newProducts" :key="product.id">
                            <router-link :to="/product/ + product.id">
                                <img :src="product.image" v-bind:alt="product.title" class="card-image">
                            </router-link>
                            <p class="card-description">{{product.description}}</p>
                            <p class="card-price">$ {{product.price}}</p>
                            <div class="btn btn-card">
                            <icon class="icon" name="shopping-bag"></icon>  
                            <p>add to bag</p>
                            </div>
                        </div>
                    </tab>
                    <tab name="top sellers">
                        <div class="card" v-for="product in topProducts" :key="product.id">
                            <router-link :to="/product/ + product.id">
                                <img :src="product.image" v-bind:alt="product.title" class="card-image">
                            </router-link>
                            <p class="card-description">{{product.description}}</p>
                            <p class="card-price">$ {{product.price}}</p>
                            <div class="btn btn-card">
                            <icon class="icon" name="shopping-bag"></icon>  
                            <p>add to bag</p>
                            </div>
                        </div>
                    </tab>
                    <tab name="featured">
                        <div class="card" v-for="product in featuredProducts" :key="product.id">
                            <router-link :to="/product/ + product.id">
                                <img :src="product.image" v-bind:alt="product.title" class="card-image">
                            </router-link>
                            <p class="card-description">{{product.description}}</p>
                            <p class="card-price">$ {{product.price}}</p>
                            <div class="btn btn-card">
                            <icon class="icon" name="shopping-bag"></icon>  
                            <p>add to bag</p>
                            </div>
                        </div>
                    </tab>
                </tabs>
            </div>

        </section>
<!-- SECTION E START - "OFFERS" -->
        <div class="homeE-bgImage">
            <img src="../assets/images/Homepage/25OffBG.jpg" alt="">
        </div>
        <section class="homeE">
            <div class="text-left">
                <p>all summer</p>
            </div>
            <div class="middle">
                <div class="icon-container">
                         <div class="circle">
                             <div class="icon-box">
                                 <img src="../assets/images/Homepage/Get25off.png" alt="get 25% off">
                                 <!-- <icon class="icon" name="envelope-o" scale="1"></icon> -->
                             </div>
                             
                             <!-- <img src="../assets/images/Homepage/MailIcon.png" alt="Mail icon"> -->
                        </div>
                        
                    </div>
            </div>
            <div class="text-right">
                <p>collection</p>
            </div>
        </section>
<!-- SECTION F START - "PRESENTATIONS SLIDER" -->
        <section class="homeF">
        </section>
<!-- SECTION G START - "SOCIAL MEDIA" -->
        <section class="homeG">

        </section>
    </div>
</template>

<script>
import Brandslider from '@/components/Brandslider.vue'
import axios from 'axios';
export default {
    name: 'Homepage',
    components: {
        'brandslider': Brandslider,
    },
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
            this.newProducts = response.data.filter(product => product.newArrival == true).slice(0, 12);
            })
            .catch(error =>{
            console.log(error);
            })
        },
        getFeaturedProducts: function(){
        axios.get("/static/products.json")
            .then(response => {
            this.featuredProducts = response.data.filter(product => product.featured == true).slice(0, 12);
            })
            .catch(error =>{
            console.log(error);
            })
        },
        getTopProducts: function(){
        axios.get("/static/products.json")
            .then(response => {
            this.topProducts = response.data.filter(product => product.topSeller == true).slice(0, 12);
            })
            .catch(error =>{
            console.log(error);
            })
        }
        }      
}
</script>