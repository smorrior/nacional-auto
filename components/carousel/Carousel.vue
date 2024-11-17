<template>
  <div class="carouse my-8 mt-12">
    <div class="slider">
      <div class="slide-track">
        <div v-for="brand in duplicatedCarBrands" class="slide" :key="brand.name">
          <img :src="brand.imgSrc" :alt="brand.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const carBrands = [
  {
    name: "Toyota",
    imgSrc: '/images/logos/toyota.png',
    alt: "Toyota car logo"
  },
  {
    name: "Nissan",
    imgSrc: '/images/logos/nissan.png',
    alt: "Nissan car logo"
  },
  {
    name: "Daihatsu",
    imgSrc: '/images/logos/daihatsu.png',
    alt: "Daihatsu car logo"
  },
  {
    name: "Mitsubishi",
    imgSrc: '/images/logos/mitsubishi.png',
    alt: "Mitsubishi car logo"
  },
  {
    name: "Honda",
    imgSrc: '/images/logos/honda.png',
    alt: "Honda car logo"
  },
  {
    name: "Lexus",
    imgSrc: '/images/logos/lexus.png',
    alt: "Lexus car logo"
  },
  {
    name: "Suzuki",
    imgSrc: '/images/logos/suzuki.png',
    alt: "Suzuki car logo"
  },
  {
    name: "Subaru",
    imgSrc: '/images/logos/subaru.png',
    alt: "Subaru car logo"
  },
  {
    name: "Hyundai",
    imgSrc: '/images/logos/hyundai.png',
    alt: "Hyundai car logo"
  },
  {
    name: "Kia",
    imgSrc: '/images/logos/kia.png',
    alt: "Kia car logo"
  }
];

// Dupliraj slajdove za neprekidnu animaciju
const duplicatedCarBrands = [...carBrands, ...carBrands];
</script>

<style scoped lang="scss">
.carousel {
  align-items: center;
  background: #E3E3E3;
  display: flex;
  height: 100vh;
  justify-content: center;
}
@mixin white-gradient {
  background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7))}
}


// Styling
.slider {
  background: white;
  height: 100px;
  margin: auto;
  overflow:hidden;
  position: relative;
  width: 960px;

  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  .slide {
    height: 100px;
    width: 250px;
  }
}
</style>
