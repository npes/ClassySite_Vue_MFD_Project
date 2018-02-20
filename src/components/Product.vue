<template>
<div class="product">
    <div class="product-banner">
        <img src="../assets/images/Product/50OffImg.jpg" alt="">
    </div>
    <h2 class="product-headline-banner">50% off summer collection</h2>
    
    <section class="product-detail">
        <div class="sideimages">
            <a href="#" class="img"><img src="../assets/images/Product/AdeliaDressSmall1.jpg" alt=""></a>
            <a href="#" class="img"><img src="../assets/images/Product/AdeliaDressSmall2.jpg" alt=""></a>
            <a href="#" class="img"><img src="../assets/images/Product/AdeliaDressSmall3.jpg" alt=""></a>
            <a href="#" class="img"><img src="../assets/images/Product/AdeliaDressSmall4.jpg" alt=""></a>
            <a href="#" class="img"><img src="../assets/images/Product/AdeliaDressSmall5.jpg" alt=""></a>
        </div>
        <div class="selected-image">
            <img :src="product.imageLrg" alt="product image" class="card-image">
            <!-- insert heart circle button -->
        </div>
        <div class="product-options">
            <h2 class="product-head">{{product.description}}</h2>
            <div class="inline">
                <h3 class="product-price">${{product.price}}</h3>
                <a href="#" class="inline"><icon class="icon" name="globe"></icon> Free Shipping Worldwide</a> 
            </div>

            <div class="dropdown">
                <button class="btn btn-dropdown">Color<icon class="icon" name="chevron-down"></icon></button>  
                <div class="dropdown-content">
                    <a href="#">Red</a>
                    <a href="#">Green</a>
                    <a href="#">Blue</a>
                </div>
            </div>
            <div class="inline">
                <div class="dropdown">
                    <button class="btn btn-dropdown">Select Size<icon class="icon" name="chevron-down"></icon></button>  
                    
                    <div class="dropdown-content">
                        <a href="#">Small</a>
                        <a href="#">Medium</a>
                        <a href="#">Large</a>
                    </div>  
                </div>
                <a href="#" class="size-guide inline"><icon class="icon" name="sliders"></icon>Size Guide</a>
            </div>
            <!-- <div class="btn btn-dropdown">
                <p href="#">black</p>
                <icon class="icon" name="chevron-down"></icon>  
            </div> -->

            <!-- <div class="inline">
                <div class="btn btn-dropdown">
                    <p href="#">Select size</p>
                    <icon class="icon" name="chevron-down"></icon>  
                </div>
                <a href="#" class="size-guide inline"><icon class="icon" name="sliders"></icon>Size Guide</a>
            </div> -->

            <div class="btn btn-bag">
                <icon class="icon" name="shopping-bag"></icon>  
                <p href="#">add to bag</p>
            </div>

            <div class="inline">
                <div class="btn btn-save">
                    <p href="#">save for later</p>
                </div>
                <a href="#" class="share inline"><icon class="icon" name="share-alt"></icon>Share this product</a>
            </div>
            

        </div>
        <div class="options-tabs">
            <p>Options tabs</p>
        </div>
    </section>

    <section class="product-sharpen">
        <h2>Sharpen your look</h2>
        <svg height="22" width="112"> 
            <line x1="6" y1="11" x2="106" y2="11" style="stroke:#01c6d3;stroke-width:4" />
        </svg>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum optio voluptates laudantium quisquam quasi possimus voluptatibus nobis repellat corporis necessitatibus suscipit facilis aliquid voluptatum, consectetur quidem quas corrupti, inventore voluptate laborum, debitis quo dolores accusamus? Voluptas cumque quas tempore. Eligendi officia soluta ea. Error nam consequatur reiciendis non ex molestias ea. Reiciendis architecto numquam quasi fuga animi impedit, veritatis quibusdam corporis illum error repudiandae placeat</p>
    </section>

    <section class="product-elegant">
        <img class="elegant-detail-top-img" src="../assets/images/Product/AdeliaDressCut1.jpg" alt="">
        <div class="elegant-detail-top">
            <h3>Extraordinary Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi eos perspiciatis officia aut alias tempore facilis? Temporibus iusto eius voluptate quis. Quo sunt voluptatibus id culpa quos fugit? Nulla necessitatibus harum, adipisci commodi eius hic voluptate. Ea magni fuga iusto modi, beatae eos sapiente, atque earum architecto nam repellat.</p>
            <div class="product-style-icons">
                <div class="product-style-buttons">
                    <div class="icon-container" :key="item" v-for="item in items">
                        <div class="circle">
                            <a href="#"></a>
                            <div class="icon-box">
                            <icon class="icon" :name="item" scale="1"></icon>
                            </div>
                        </div>      
                    </div>
                </div>
                <div class="button-txt">
                    <p>Elegant Style</p>
                    <p>Elegant Style</p>
                    <p>Elegant Style</p>
                </div>
            </div>
            <div class="btn btn-product-read-more">
                <a href="#">read more</a>
            </div>
        </div>

        <div class="elegant-detail-btm">
            <h3>Extraordinary Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi eos perspiciatis officia aut alias tempore facilis? Temporibus iusto eius voluptate quis. Quo sunt voluptatibus id culpa quos fugit? Nulla necessitatibus harum, adipisci commodi eius hic voluptate. Ea magni fuga iusto modi, beatae eos sapiente, atque earum architecto nam repellat.</p>
            <div class="product-style-icons">
                <div class="product-style-buttons">
                    <div class="icon-container" :key="item" v-for="item in items">
                        <div class="circle">
                            <a href="#"></a>
                            <div class="icon-box">
                            <icon class="icon" :name="item" scale="1"></icon>
                            </div>
                        </div>      
                    </div>
                </div>
                <div class="button-txt">
                    <p>Elegant Style</p>
                    <p>Elegant Style</p>
                    <p>Elegant Style</p>
                </div>
            </div>
            <div class="btn btn-product-read-more">
                <a href="#">read more</a>
            </div>
        </div>
        <img class="elegant-detail-btm-img" src="../assets/images/Product/AdeliaDressCut2.jpg" alt="">
    </section>
    
        <div class="big-discounts-bg">
            <img src="../assets/images/Product/BigDiscountsImg.jpg" alt="">
        </div>
        
        <h2 class="big-discounts">big discounts</h2>
</div>
  
</template>

<script>
import axios from 'axios';
export default {
    name: "product",
    data: function() {
        return {
            product: '',
            items: ["twitter", "pinterest", "facebook"]
        }
    },
    created: function() {
        this.getProductById();
    },
    watch: {
        '$route' (to, from) {
            this.getProductById();
        }
    },
    methods: {
        getProductById: function() {
            let id = this.$route.params.id;
            axios
                .get("/static/products.json")
                .then(response => {this.product = response.data.filter(product => product.id == id)[0]})
                .catch(error => {console.log(error);}) 
        }
    }
}
</script>

<style>

</style>
