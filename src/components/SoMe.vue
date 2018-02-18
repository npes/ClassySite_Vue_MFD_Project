<template>
    <div class="SoMe">
        <div class="get-us-on">
                <svg height="22" width="112">
                <line x1="6" y1="11" x2="106" y2="11" style="stroke:#000;stroke-width:2" />
                </svg>
                <p>get us on</p>
                <svg height="22" width="112">
                <line x1="6" y1="11" x2="106" y2="11" style="stroke:#000;stroke-width:2" />
                </svg>
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
