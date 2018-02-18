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
    </section>

    <button class="btn btn-collection">browse collection</button>

    <section class="dropdown-collection">
      <p>Dropdown items here</p>
    </section>

    <section class="cards-collection">
      <div class="card">
        <a href="#">
          <img src="../assets/images/Collection/dress1.jpg" alt="product image" class="card-image">
        </a>
        <p class="card-description">Card description</p>
        <p class="card-price">$55.55</p>
        <div class="btn btn-card">
        <icon class="icon" name="shopping-bag"></icon>  
        <p href="">add to bag</p>
        </div>
      </div>

      <div class="card">
        <a href="#">
          <img src="../assets/images/Collection/dress1.jpg" alt="product image" class="card-image">
        </a>
        <p class="card-description">Card description</p>
        <p class="card-price">$55.55</p>
        <div class="btn btn-card">
        <icon class="icon" name="shopping-bag"></icon>  
        <p href="">add to bag</p>
        </div>
      </div>
        
    </section>
  </div>

</template>

<script>
export default {};
</script>

<style>

</style>
