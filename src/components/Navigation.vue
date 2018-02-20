<template>
    <nav id="top">
        <div class="nav-bg"></div>
        <div class="logo-top">
            <a href="#header"><img src="../assets/images/Header/CLASSY.png" alt="company logo"></a>
        </div>
        <div class="buttons-top">
            <div>
                <a href="#"><icon class="icon" name="user-o"></icon> login</a>
            </div>
            <div>
                <a href="#"><icon class="icon" name="shopping-bag"></icon> 3 items</a>
            </div>
            <div>
                <a href="#"><icon class="icon" name="search"></icon></a>
            </div>
            <div>
                <a href="#" v-on:click="openSide"> <icon class="icon" name="bars"> </icon></a>
            </div>
        </div> 
        <div id="side-menu" class="side-nav">
            <a href="#" class="btn-close" v-on:click="closeSide">&times;</a>
            <!-- native because its a vue component -->
            <router-link to="/" v-on:click.native="closeSide" >Home</router-link>
            <router-link to="/collection" v-on:click.native="closeSide">Collection</router-link>
            <!-- <router-link to="product" v-on:click.native="closeSide">Product</router-link> -->
            <router-link to="/contact" v-on:click.native="closeSide">Contact</router-link>
        </div>       
    </nav>
</template>

<script>
export default {
    methods: {
        openSide: function(){
        document.getElementById('side-menu').style.width = '150px';
        },
        closeSide: function(){
        document.getElementById('side-menu').style.width = '0';
        }
    }
}
</script>
