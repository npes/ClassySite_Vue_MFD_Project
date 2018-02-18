<template>
  <section class="sectionD">
            <div class="slick-container">
                <section class='gallery' id="gallery">
                    <div v-for="img in images" v-bind:key="img">
                        <img :src="img">
                    </div>
                </section>
            </div>
        </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
