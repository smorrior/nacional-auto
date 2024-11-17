<template>
  <div>
    <slot />
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/footer/Footer.vue";
</script>

<style lang="postcss">
</style>

<style lang="postcss">
@import '~/assets/css/scrollbar.postcss';
</style>
