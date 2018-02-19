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
                <img src="../assets/images/Homepage/MensLookbookImage.jpg" alt="Lookbook picture 1">
            </div>
            <div class="newsletter">
                <div class="newsletter-inner">
                    <div class="icon-container">
                         <div class="circle">
                             <div class="icon-box">
                                 <icon class="icon" name="envelope-o" scale="1"></icon>
                             </div>
                             
                             <!-- <img src="../assets/images/Homepage/MailIcon.png" alt="Mail icon"> -->
                        </div>
                        
                    </div>
                   
                    <h2>get our newsletter</h2>
                    <h3>join our maillist to receive special discounts</h3>
                    <input type="email" placeholder="enter your email">
                    <button class="btn">subscribe</button>      
                </div>
            </div>
            <div class="lookbook-img2">
                    <img src="../assets/images/Homepage/WomensLookBookImage.jpg" alt="Lookbook picture 2">
                </div>
        </section>
<!-- SECTION B START - "TOP BRANDS" -->
        <div class="homeB-BG"></div>
        <section class="homeB">
            <div class="top-brands">
                <svg height="22" width="112">
                <line x1="6" y1="11" x2="106" y2="11" style="stroke:#000;stroke-width:2" />
                </svg>
                <p>top brands</p>
                <svg height="22" width="112">
                <line x1="6" y1="11" x2="106" y2="11" style="stroke:#000;stroke-width:2" />
                </svg>
            </div>
            
            <div class="brand-logos">
                <div><img src="../assets/images/Homepage/Pull&BearTrans.png" alt=""></div>
                <div><img src="../assets//images/Homepage/MichaelKorsTrans.png" alt=""></div>
                <div><img src="../assets/images/Homepage/MangoTrans.png" alt=""></div>
                <div><img src="../assets/images/Homepage/MissGuidedTrans.png" alt=""></div>
                <div><img src="../assets/images/Homepage/MonkiTrans.png" alt=""></div>
            </div>
            <div class="slider-controls">
                <img src="../assets/images/Homepage/SectBSliderDots.png" alt="">
            </div>
            
        </section>
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
            
            <!-- <div class="slick-container">
                <section class='gallery' id="gallery">
                    <div v-for="img in images" v-bind:key="img">
                        <img :src="img">
                    </div>
                </section>
            </div> -->
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

export default {
      
}
</script>