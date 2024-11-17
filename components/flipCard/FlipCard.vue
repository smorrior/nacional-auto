<template>
  <div
    class="flip-card group w-100 xl:h-80 sm:h-60 h-40"
    tabindex="0"
  >
    <!-- Flip Card Inner Wrapper -->
    <div
      class="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
    >
      <!-- Front Side -->
      <div class="flip-card-front shadow-lg bg-slate-100 flex flex-col items-center justify-center p-8">
        
        <h4 class="h4-flip-card">{{ title }}</h4>
      </div>
      
      <!-- Back Side -->
      <div class="flip-card-back shadow-lg bg-slate-100  flex items-center justify-center xl:p-8 p-2">
        <p class="xl:text-lg text-sm xl:font-semibold tracking-tight line-clamp-6 sm:line-clamp-none">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.flip-card {
  perspective: 1000px; /* Omogućava 3D rotaciju */
}

.flip-card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s; /* Kontrola trajanja rotacije */
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg); /* Rotacija pri hover-u (desktop) */
}

.flip-card .flip-card-inner.rotate-y-180 {
  transform: rotateY(180deg); /* Rotacija pri klik-u (mobilni uređaji) */
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Sakriva zadnju stranu dok je okrenuta */
}

.flip-card-back {
  transform: rotateY(180deg);
}

</style>
