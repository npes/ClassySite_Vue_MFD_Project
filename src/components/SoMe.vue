<template>
    <div class="SoMe">
        <div class="get-us-on">
                <h3>get us on</h3>
            </div>
        <div class="icons">
            <div class="icon-container" :key="item" v-for="item in items">
                <div class="circle">
                    <a href="#"></a>
                    <div class="icon-box">
                    <icon class="icon" :name="item" scale="1"></icon>
                    </div>
                </div>        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
    return{
        items: ["twitter", "pinterest", "facebook", "google-plus", "youtube", "tumblr"],
    }
  }
}
</script>

<style>

</style>
