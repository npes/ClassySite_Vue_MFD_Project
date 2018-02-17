<template>
    <div class="wrapper">
        <!-- HERO IMAGE BACKGROUND -->
        <div class="hero-image">
            <img src="../assets/images/Header/HEADER.jpg" alt="">
        </div>

        <!-- HEADER START-->
        <header id="header">
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
                <div class="menu-btn-last">
                    <a href="#"><icon class="icon" name="bars"></icon></a>
                </div>
            </div>
            
            <button class="btn">learn more about great deals</button>
        </header>
        <!-- SECTION A START - "LOOKBOOK" -->
        <section class="sectionA">
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
        <div class="sectionB-BG"></div>
        <section class="sectionB">
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
        <section class="sectionC">
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
        <section class="sectionD">
            
            <div class="slick-container">
                <section class='gallery' id="gallery">
                    <div v-for="img in images" v-bind:key="img">
                        <img :src="img">
                    </div>
                </section>
            </div>
        </section>
        <!-- SECTION E START - "OFFERS" -->
        <div class="sectionE-bgImage">
            <img src="../assets/images/Homepage/25OffBG.jpg" alt="">
        </div>
        <div class="sectionE">
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
        </div>
        
        <section class="sectionE">
            
        </section>
        <!-- SECTION F START - "PRESENTATIONS SLIDER" -->
        <section class="sectionF">

        </section>
        <!-- SECTION G START - "SOCIAL MEDIA" -->
        <section class="sectionG">

        </section>
        <!-- FOOTER START -->
        <div class="footer-BG"></div>
        <footer id="footer">
            <div class="ft-column">
                <h3><a href="#footer">questions</a></h3>
                <ul>
                    <li><a href="#footer">Help</a></li>
                    <li><a href="#footer">Track Order</a></li>
                    <li><a href="#footer">Returns</a></li>
                </ul>
            </div>
            <div class="ft-column">
                <h3><a href="#footer">where to buy</a></h3>
                <ul>
                    <li><a href="#footerfooter">Store Locator</a></li>
                    <li><a href="#footerfooter">Wishlist</a></li>
                    <li><a href="#footer">Giftcards</a></li>
                </ul>
            </div>
            <div class="ft-column">
                <h3><a href="#footer">about us</a></h3>
                <ul>
                    <li><a href="#footer">Our Story</a></li>
                    <li><a href="#footer">Careers</a></li>
                    <li><a href="#footer">Affiliates</a></li>
                </ul>
            </div>
            <div class="creditcards">
                <img src="../assets/images/Homepage/Creditcards.png" alt="accepted credit cards">
            </div>
            <div class="logo-ft">
                <a href="#header"><img src="../assets/images/Header/CLASSY.png" alt="company logo"></a>
                <p>Ecommerse PSD Theme</p>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
      
}
</script>
